/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","30433c9a65e93b19430df68c397d1ea3"],["/archives/2021/09/index.html","c27800fde6c140be0ebead1d86d6f3b0"],["/archives/2021/index.html","04a1014b242e1571e7336ab1724c93b6"],["/archives/2022/02/index.html","da36b13cf6b55f7dac2c11e874022c2b"],["/archives/2022/03/index.html","466abcb0a032160e7d20b2555d7f50e0"],["/archives/2022/04/index.html","bfcbdbc33861cb4ddcc9a3010dfc88f9"],["/archives/2022/09/index.html","347a01625d74c6cdc6bae151a60f6620"],["/archives/2022/12/index.html","74e74fba2ed742addd1b5633a951e363"],["/archives/2022/index.html","c46bdc3661b3d6d6efa5c252a5703727"],["/archives/2023/09/index.html","96b8f11e7726600e46c264e6f08ecf25"],["/archives/2023/index.html","908602f8fd4e4e4d27102d6ae971ab20"],["/archives/2025/05/index.html","605afd96dc867ee51fa349d0b892c79f"],["/archives/2025/index.html","038849d151ea70b3129e58c9d3cfde65"],["/archives/index.html","6f460e4d15cbb4efe857d184cebcdae4"],["/archives/page/2/index.html","95ceb7ce0234e564139faed3078ae6c8"],["/categories/CVE/index.html","478d18a1d29b67b98c60a9ae37db503d"],["/categories/HackTheBox/index.html","138a98e91dc63436ff3329c07b2c7e75"],["/categories/HackTheBox/page/2/index.html","fff2161db9a6ab09a068d4e6abf66bdc"],["/categories/Tips/index.html","dd66cc4bdfe1239a01f5b4bb55a48ba7"],["/categories/index.html","f5d494b46f2f847dbca34b656ebfc49d"],["/categories/pwnable-kr/index.html","e119302740702831c96dac8dbb4fea3e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","199738f6ccadc503277e67080062dae0"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","532d1506f76995a78f302c4e08e77448"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","641261e7d7532037effc8e3079d30de9"],["/tags/CVE-2022-22965/index.html","98fb8131dc9bc67c4142441400b8e170"],["/tags/Juicy-Potato/index.html","542268e2a3902b3f9982e71cb6573e31"],["/tags/OSCP/index.html","a99d93645b378dfdb77a74d44f26d36a"],["/tags/SeImpersonatePrivilege/index.html","33e1d41f7d1c27e9b14da876110f5e21"],["/tags/android/index.html","1058ab1380c843ffd0ce6c4159fcd3ac"],["/tags/asp/index.html","16e3e2c92378ad60063b98e9445c5e45"],["/tags/backdrop/index.html","0460f3e9b0aa553f1a638f895034e128"],["/tags/binary/index.html","c6ed295f424b6eab62e7a5bdff983f3b"],["/tags/coldfusion/index.html","361aba920aec06e5cc54b9f569e55526"],["/tags/ctf/index.html","3a8f1d59aee68ed1bc54d2b02f204794"],["/tags/cve/index.html","cd942d353fb30acf026bdddec09df0d3"],["/tags/docker/index.html","3a7d98f94bc13bac8228075a010c360f"],["/tags/exploit/index.html","7757a619419d3fff80231b5647c1092e"],["/tags/fail2ban/index.html","35ec9b5854db55a9384abad46ea9062a"],["/tags/fileupload/index.html","88b5e89d49042da82083ed4daaa24242"],["/tags/git/index.html","16a763e2852e744ec24ba043a6f9fd17"],["/tags/htb/index.html","55560c9a9faa7b93f11a638d9b9771d6"],["/tags/iis/index.html","ee9aab887ca508a0f478ac0f02417aec"],["/tags/index.html","825c7e50ea904792aa7f2fe6579d17fb"],["/tags/java/index.html","771c3480733c3df7c2331d928b2aec0d"],["/tags/lfi/index.html","dd5efb68b7b26096f24c837b0a03a262"],["/tags/metasploit/index.html","9120394619033bf44e562dfd74da1486"],["/tags/payloads/index.html","cb51e749f8328e6235ca004b0e77ff91"],["/tags/port-forwarding/index.html","b3f8783f4e1c80d36bf6fd92fa98c8a5"],["/tags/port-tunneling/index.html","8e1f7e7f4131afa6d54f7280adfc144a"],["/tags/powershell/index.html","a0f25e58942606f50bc59727f5e25e5f"],["/tags/pwnable-kr/index.html","59544865adc7b08e4f65d4adc64c3826"],["/tags/rce/index.html","e3fd40b535921ae3b0b4dbcfb4f8f254"],["/tags/regex/index.html","fdaccd0f2608df0fb960bca142a166cf"],["/tags/reverse-shell/index.html","f05e838a51dea3425291afd22836d5cd"],["/tags/reverse/index.html","92d64c75182725cdacad0efc28612fc7"],["/tags/ruby/index.html","fecfe3f1233e0f09476a26193b69ae11"],["/tags/shell/index.html","dfd0eab47e94acc57bbb8cf6ebc3a522"],["/tags/smb/index.html","19f7c7439ed77ceaa7d00ea482082a53"],["/tags/spring-core/index.html","7b666ee3a547fbba252296327d2e90ad"],["/tags/sql/index.html","96e407a7c2ada4c1c1a4a2de3e77de41"],["/tags/ssti/index.html","6c398dba4d1ba7e15ac7d6231482764e"],["/tags/sudo/index.html","3d2215eac4d86e99cbe9883bd2d9b5ec"],["/tags/tips/index.html","33be973935883ce139da90ddaaf5e201"],["/tags/tomcat/index.html","5f7749a4e38a11ed740f787195faab22"],["/tags/tty/index.html","2e2e1f258daa3557400d89a922cb1251"],["/tags/tunneling/index.html","ef964c2aa8b9992266c11d30a303f0d1"],["/tags/war/index.html","ac27944b093259c10fcf640d30ed9b69"],["/tags/web/index.html","8a602b64871a90e992d5e5154cc223a5"],["/tags/webdav/index.html","49d5d61333e9db5394af37235ea064e3"],["/tags/windows/index.html","64a5f891afc5cde045e3571dd30b88d2"],["/tags/winrm/index.html","7689d3047058b093317de49dfbe15534"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
