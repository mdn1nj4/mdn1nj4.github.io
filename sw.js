/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","e849aa8a786b1e788a1371736ad898ab"],["/archives/2021/09/index.html","99548db70181d8b36c61b8959b27f000"],["/archives/2021/index.html","891e332982c75f6ea13d61614f67b89f"],["/archives/2022/02/index.html","cf830fa483223c466fbbe2e9518b0aa2"],["/archives/2022/03/index.html","c4ec3e70d43c4b5782fd4d225887c51f"],["/archives/2022/04/index.html","978d644a8488ae47695af86eedae48c9"],["/archives/2022/09/index.html","76f25cceeee65745435057fa539396ce"],["/archives/2022/12/index.html","7ba0fd017c1681b3a9519f3450f6a516"],["/archives/2022/index.html","abe239211918395ab7db8ff5e343f627"],["/archives/2023/09/index.html","aef7e2f3882ba1dde32f9a8d5b9f4926"],["/archives/2023/index.html","12770a40d183100d4f8b8bbecf46b448"],["/archives/2025/05/index.html","a1639e01537302a3fa388f46b2e2def0"],["/archives/2025/index.html","a8d54f862f106982978c253db67aa371"],["/archives/index.html","460ba33aeb50c1089ef418374fe6f94b"],["/archives/page/2/index.html","503c597ab4213eb80a5076ab57b5e56e"],["/archives/page/3/index.html","2cb185cfbfb4bcd765bfa73fb030dbbe"],["/categories/CVE/index.html","5f4874d2a8cf54772f45aa72937dae45"],["/categories/HackTheBox/index.html","4b926d7c3880c06dce3a5db385346ac4"],["/categories/HackTheBox/page/2/index.html","d7d9e2bcbd44581191db7ef6f1bc37e1"],["/categories/Tips/index.html","783d9b5fa165fae0c66925287d7b7875"],["/categories/index.html","9cf2ebffafa655fd8e58bd5f04f7add1"],["/categories/pwnable-kr/index.html","970e074207af2328ba278d895c5b941a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-nocturnal-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-titanic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-underpass-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","03acfceb7f9640078c45ffab104c5ff1"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","766655a2057831347c5ed9a8962d3f3d"],["/page/3/index.html","9ad24159ca64189b355d5f77340ffc59"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","59db29b7531c83ac83c486b7b7bce297"],["/tags/CVE-2022-22965/index.html","de8852b7638ea0b3037727644260bae3"],["/tags/Juicy-Potato/index.html","7228f283af22a209bfe19c99cbcbb8d3"],["/tags/OSCP/index.html","5ba55b5c9bb8e23d4ca398d9856b5e95"],["/tags/RCE/index.html","0253e71c439d74f1b06001dfe56d9dc1"],["/tags/SeImpersonatePrivilege/index.html","decdbf4f7b6c1eacdfcdee05c655b304"],["/tags/android/index.html","aeef24fc9e4f5829b3fc2ca1ebc7e086"],["/tags/asp/index.html","45f14fbd2264f45495dd3db3c9fb282a"],["/tags/backdrop/index.html","5999b2a81083c9ca5b56c6bb1742f6cc"],["/tags/binary/index.html","4cc7356e681e43331c2ecf7a03765d55"],["/tags/coldfusion/index.html","aefd20d71841bbb868119dafbee76d1c"],["/tags/ctf/index.html","84c7c8a0f762bad8afad3630c36a34bd"],["/tags/cve/index.html","b70a4bc01a3fe11169d92e5da9fbde44"],["/tags/daloRADIUS/index.html","4b4d0c08d5b6d1f5589236c39868c060"],["/tags/docker/index.html","563fb2ebc0e81d012e960eb28aad99f4"],["/tags/exploit/index.html","8035d0d286c3a7d23d47b0fd2778fbc0"],["/tags/fail2ban/index.html","8ded29cb6f503fc071a0343a44258270"],["/tags/fileupload/index.html","9f400f369d2d310504b6a1ed43bee15c"],["/tags/git/index.html","259a4d5bf882eeeb12ec22e614ea7621"],["/tags/gitea/index.html","103a78004844ff1a0695071429f9d670"],["/tags/htb/index.html","47d2a8b5fc05649d6bf03759ae0d7ab7"],["/tags/idor/index.html","8016280767b9bdd330593b50e7c8c7aa"],["/tags/iis/index.html","f51802f4c4d8270c87ca00b9d2477bb5"],["/tags/image/index.html","bba3c6d65fca9242a95fec1cd8f98f1f"],["/tags/index.html","aa2c630116be21c724dddcc7f0936d72"],["/tags/injection/index.html","fe12bd79ac91267a5d7c22a2b111d48f"],["/tags/java/index.html","f1b770385970b524badc763f13c49ae9"],["/tags/lfi/index.html","b002b0bae414dd0e521c08a7336c23b2"],["/tags/metasploit/index.html","1cbd1b5610936ae714e15d280349a3f7"],["/tags/mosh/index.html","e58ec1aebf8e8da6cfb6481f0bd0bc86"],["/tags/payloads/index.html","223d1c15ca2f4eb79ff6dc05a09451c5"],["/tags/port-forwarding/index.html","3bcff2e413d871089e9060603ea675dc"],["/tags/port-tunneling/index.html","9950dfbee93784ff6b6274282031de36"],["/tags/powershell/index.html","2c058d0db458dfc5ecb2c5bf38334313"],["/tags/pwnable-kr/index.html","b325005f0627bbdeaa465dc661bb2e05"],["/tags/regex/index.html","aa170010195063a53ec2d27819f08f4c"],["/tags/reverse-shell/index.html","7e8d3875b1c6612c847f8badf21edcf9"],["/tags/reverse/index.html","216f6bee3c23d6c9202cd93bb1cc3607"],["/tags/ruby/index.html","c01b2ae00ab79c9d0148c844a28e4805"],["/tags/shell/index.html","1c4e291462e1ae65c257ce574662bcaa"],["/tags/smb/index.html","e0b6a2892f3a616d19f4ff3dd6d71ab4"],["/tags/snmp/index.html","877751b2f459e371433e0d64d05de83e"],["/tags/spring-core/index.html","c589501a3581131e4c203d1b35e4b011"],["/tags/sql/index.html","1ca8dd55ae7bc0ed47785c0e30088fe1"],["/tags/ssti/index.html","fe6075c27e4924792cee2db51b0bcfe8"],["/tags/sudo/index.html","49244b6efaa82031ad845fa8bf20b309"],["/tags/tips/index.html","8be4cb5382ec371befc74bcae6499087"],["/tags/tomcat/index.html","48de2ab1254d40251f75aca330f4d9c2"],["/tags/tty/index.html","310d5c54c69f07bc9bbcc5d8a3be5650"],["/tags/tunneling/index.html","4e283ba8c0852a8bfe3e94d0af21c655"],["/tags/war/index.html","4266da6351e162ff8ee9d44c3d1ede85"],["/tags/web/index.html","35b84ec0c0a90fc81e3deeaa0d654081"],["/tags/webdav/index.html","114068679320555f8055986aa4a0d74c"],["/tags/windows/index.html","dd8e846725587a162ae4b606c4addd74"],["/tags/winrm/index.html","dbf52bb283736c1fd37d37e77fd47267"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
