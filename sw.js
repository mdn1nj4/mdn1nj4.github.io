/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","e76c9a1ece3f996efe1c4c6634cb0b64"],["/about/index.html","9fe72516b3a98b028dc6100db3456a22"],["/archives/2021/09/index.html","b8534408433fc88ae97cfaaf3f4a1d8c"],["/archives/2021/index.html","ca9e35aec5c5264cba5ff819d1311468"],["/archives/2022/02/index.html","69f877072ce5c83cca2f55b4fc9df4a8"],["/archives/2022/03/index.html","657ada6c2476dae0153329dcab346ba0"],["/archives/2022/04/index.html","00ece4b0b941b8df84058b274b283596"],["/archives/2022/09/index.html","ee57e87f1bcee2e3ca74e0079db96021"],["/archives/2022/12/index.html","c8abb78a64e39edb7b5f13515c187cbb"],["/archives/2022/index.html","feb72bbce34c6a4dc0ced0e7bc067f8e"],["/archives/2023/09/index.html","0ef89615995f5376304bf563a06ab7c1"],["/archives/2023/index.html","b294ab8b00e63c72f6a2a5ce3fc0948c"],["/archives/2025/05/index.html","2f18dcb8c2d7614f3290ff540f0eae70"],["/archives/2025/index.html","cb646fd138e38123e6deadff18214836"],["/archives/index.html","14c16dd0c44b427fcb1da1149bd2aa2a"],["/archives/page/2/index.html","d281676e969bf616337c80f8cdf6bb74"],["/categories/CVE/index.html","0931ae47e38bff57422f12562492c6d0"],["/categories/HackTheBox/index.html","4e9a7cb494b9faa6efbb4de1522c6078"],["/categories/HackTheBox/page/2/index.html","7e9f660840f377fadaaa5b07f9e487c5"],["/categories/Tips/index.html","d3f9787808433c1765e0d70ce8b72dad"],["/categories/index.html","a360d6d8fa6453d4d1c5f27a37fc43b9"],["/categories/pwnable-kr/index.html","29347a1317ae170dd394bfb98a46dd9a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","b190d0398d88a4e485498663da431f75"],["/htb/hackthebox-arctic-walkthrough/index.html","b956373272490bc8c456415f1cd49aae"],["/htb/hackthebox-bounty-walkthrough/index.html","467482e848ef15c53f273954a7cf6bd9"],["/htb/hackthebox-dog-walkthrough/index.html","964f99f5ce140c45c0cc8736ce469288"],["/htb/hackthebox-jerry-walkthrough/index.html","113ce6503b9f1e9489a0240bf509261c"],["/htb/hackthebox-lame-writeup/index.html","507528092eee7cee202932045e035fe9"],["/htb/hackthebox-late-writeup/index.html","3ce8008a01685ec4a03c29826fda600b"],["/htb/hackthebox-luanne-writeup/index.html","d05819b182712712707d89138e325249"],["/htb/hackthebox-neonify-writeup/index.html","8e8e8cd1fb85b8f6023f8d4c66f45de9"],["/htb/hackthebox-passage-writeup/index.html","5467a523cf0eb6fe6dc9612b3ae71310"],["/htb/hackthebox-routerspace-writeup/index.html","9f2807ea43ad2cbf492064118063e8e9"],["/htb/hackthebox-timelapse-writeup/index.html","211ec753f47dea8ddde5c7937ee01d9b"],["/htb/hackthebox-trick-writeup/index.html","6810747c4e9f283af4c21344fbb93cf8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7975e84a76577870b7d474b03b3d7a6a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","db843741569afac42e83420658b4230b"],["/note/setup-docker-for-ctf/index.html","760548687930c1e51589412b8582c2d1"],["/note/spawning-tty-shell/index.html","737908b64f9d23183135403608cc5798"],["/note/tunneling-and-port-forwarding/index.html","35f1eaae51e66fa096c5910afd8fc0d8"],["/page/2/index.html","8e5b72df5b0f4d64103deac137e27748"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","96e23c3bef9667d5bee3d73ea2b7ee88"],["/sw-register.js","05bcc3e391ac1cd41b1bcaec1d16ccb3"],["/tags/CVE-2022-22965/index.html","4e1d923765f60b422040f720d78afcac"],["/tags/Juicy-Potato/index.html","90ccb8d9404d9a6c3967cf3cc635aad6"],["/tags/OSCP/index.html","36433a2411f2f7b9ccc3562a1baf1046"],["/tags/RCE/index.html","f4225e0ecfe972e90198fc1849c2903f"],["/tags/SeImpersonatePrivilege/index.html","f14e1477c5ea7804a1c6876b3bd2f43e"],["/tags/android/index.html","9221959e65e3b7b2719721939b7b879e"],["/tags/asp/index.html","ad2d028c02d08e59416d1f653dcbe0fe"],["/tags/backdrop/index.html","8e1495ebe5991a82197180dc7d256ff8"],["/tags/binary/index.html","4e0ecd8c61af5d203c896cb45d3a2ed5"],["/tags/coldfusion/index.html","fc17b4b585d88e73c0a09b8faad8b736"],["/tags/ctf/index.html","3936ebfbb3b546b03783cb0d1c7cc164"],["/tags/cve/index.html","71d2422760f299969d433d996bfa4a0e"],["/tags/docker/index.html","5e84e461bb1e891d0330d453267c3378"],["/tags/exploit/index.html","b96c183924fae97eaeefacd58aa3e2d0"],["/tags/fail2ban/index.html","0e5f8df460f225617cf722614a5f8b04"],["/tags/fileupload/index.html","6a10b139f9cee93c0118f1a25174d962"],["/tags/git/index.html","7f598a780275e0a4b3dc51301a06eb51"],["/tags/htb/index.html","554a37d192d235787f3f2a3a19ce593a"],["/tags/iis/index.html","3f09faae83fdcdbcd839b621064062b9"],["/tags/index.html","98f0f2692a053861492a3d292d001e80"],["/tags/java/index.html","03e6d1bd92b36cab51c87845d1a68d52"],["/tags/lfi/index.html","cdc096d64e2da9586f47ee9e93cfec95"],["/tags/metasploit/index.html","50d439ca011e846aea99126b2fae5287"],["/tags/payloads/index.html","fe5182947e804e9b25e3e95aa179313d"],["/tags/port-forwarding/index.html","1d2fd33f5d7b14f0eb7839adaeba35e6"],["/tags/port-tunneling/index.html","bf2fe1da33d74e3c5dc1ec2afe26c06f"],["/tags/powershell/index.html","53bb1e1e7ce7020cea34108181e9a890"],["/tags/pwnable-kr/index.html","bd41f870881d85f6f7dceb2933621b03"],["/tags/regex/index.html","8ec82d4ae993730480632c4aeba2d5b1"],["/tags/reverse-shell/index.html","276d93e7709504c3033ac4cb9a7983e3"],["/tags/reverse/index.html","37c98ecfbccadaf5b6f9a8e4841e49da"],["/tags/ruby/index.html","d7c5c830d01ee6fb9bd23a6cee031226"],["/tags/shell/index.html","ad16d4ffa08bb7116511b1635f7a406c"],["/tags/smb/index.html","71ce0b3bb02142768739b310a0ad1fa6"],["/tags/spring-core/index.html","39f1d5fe10a911eb4cf4e54ae7ceded8"],["/tags/sql/index.html","2084913510095d5cdcae3f5fc1e39cb0"],["/tags/ssti/index.html","180f2e137f525d4b3f1289cb19111a80"],["/tags/sudo/index.html","93326a629e546f059d4a31d07248c52c"],["/tags/tips/index.html","3820f30fd4304ec2e7b5d8626cfbac66"],["/tags/tomcat/index.html","9bb90c3834a12bab3af09ed96e447ec0"],["/tags/tty/index.html","3e07b71072a65067324be68e68b53d1b"],["/tags/tunneling/index.html","156bb32ee71ca23f28673de497fc4a83"],["/tags/war/index.html","b29bcf5200c644570a9109b8318ae54c"],["/tags/web/index.html","211c2bf4ca1973cdc239dd65f94bba8b"],["/tags/webdav/index.html","e499c32a3219b71491466f31f269755d"],["/tags/windows/index.html","80e15c82e83b4a5fa470be41cd25a694"],["/tags/winrm/index.html","86abe6d9e9ecd2e43a2734707233b023"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
