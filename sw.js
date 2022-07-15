/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3495f22771026e38d178e118ce6c8188"],["/CVE/cve-2022-22965-build-and-attack/index.html","d91fedd00544aa81d111cac7afab8829"],["/about/index.html","6ea2a0959c94de62c550e93e91f28ce6"],["/archives/2021/09/index.html","ba0d35862c7d9c3c9ecc0570001fac9e"],["/archives/2021/index.html","e643356c055fee9e1cf52c9cbeda812c"],["/archives/2022/02/index.html","3ae18c03ecca75a932ed145a831b94b8"],["/archives/2022/03/index.html","1fc7049364c121031596e00ca7f4ced7"],["/archives/2022/04/index.html","082ba4a18d0fe794fee41ab779b345c9"],["/archives/2022/index.html","f02086ea5c0d405a3758252ce1140984"],["/archives/index.html","9c180a00057d07b433aefb353eb0c0ff"],["/archives/page/2/index.html","c0fbf41e8a1fcd5ad2b7644dfdef089e"],["/categories/CVE/index.html","adefbf8a41d4f011cc1a816d976bd27c"],["/categories/HackTheBox/index.html","fd63cdea600778946817fa94f4bc9be0"],["/categories/Tips/index.html","ca469331584cc9f7eb9d8a8045a60480"],["/categories/index.html","972438cf3c1ba81dace503f1a2ca75d8"],["/categories/pwnable-kr/index.html","c06fa4a46ad45424829340ca623951e5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","157777705e533d0dac778c534e81ba4b"],["/htb/hackthebox-late-writeup/index.html","12c3e85f93a0d9aea5cf799653cf6b6a"],["/htb/hackthebox-luanne-writeup/index.html","926ace3fe321591949a18cd77f889616"],["/htb/hackthebox-passage-writeup/index.html","39f97b3662938d9a32179621514c804a"],["/htb/hackthebox-routerspace-writeup/index.html","132ebdb6c8ab079d2496af9bf385515d"],["/htb/hackthebox-timelapse-writeup/index.html","3a3501e1e541d5c052635e3665db33f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","22ca40727a00b16ca1c3cec9a4c8a8f3"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","b28200fc0b7b3c73f557d591836aaee0"],["/note/setup-docker-for-ctf/index.html","312e587a80126d9409baf729ec102fef"],["/note/spawning-tty-shell/index.html","0bdff15e0c4861b3cc049f77b645b45b"],["/note/tunneling-and-port-forwarding/index.html","8992ae62cefb0d68980738fe4c0c9172"],["/page/2/index.html","bb21e01ac38a27e9583a58a7c5c7acd6"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","2eb536eecdd98179a8fbc69109e9c617"],["/sw-register.js","0781fb97acf8293038e40437318af5a9"],["/tags/CVE-2022-22965/index.html","80dbdec98cb35f448dcbdf7329d24b62"],["/tags/android/index.html","6312a3dac653f2a07304f0a11e2dae24"],["/tags/binary/index.html","0ffb3d07f4b8783a039f126360f37190"],["/tags/ctf/index.html","243094c69b7d8e62ffe0770ba768b417"],["/tags/docker/index.html","2e671e95c357745e46acda56de1884ff"],["/tags/exploit/index.html","5eec51a66795c13dc6343d42c5a626fe"],["/tags/htb/index.html","edc9dc857043820ba00a10ef10509793"],["/tags/index.html","a757f8dd9896908d953b6f11ce7caaba"],["/tags/java/index.html","8576f8d9c702edca703826df5fe5e118"],["/tags/payloads/index.html","29f36b9acaf2a7c8c7743cfe2f80ffb1"],["/tags/port-forwarding/index.html","d43968a726dab5ab46430ee82a4b0ad1"],["/tags/port-tunneling/index.html","a03aa202e7899662a7bbfb07b6e7c3b3"],["/tags/powershell/index.html","8a56ffba1437447b14b560425b363369"],["/tags/pwnable-kr/index.html","d975f05a654836134fcef43b876d28e7"],["/tags/rce/index.html","e835e72b11509ec8cc74619d2a258707"],["/tags/reverse-shell/index.html","8a50a1db4b837cc25e825a9bf3d0a09f"],["/tags/reverse/index.html","2c1c2a3df2045a1d19894382010d5343"],["/tags/shell/index.html","f9f79be800427d4cd4c0674dc2658989"],["/tags/smb/index.html","fb088f5fc47d50f685b4c7cdc26ead4c"],["/tags/spring-core/index.html","13db2db0b050ea154325e25bcfc80332"],["/tags/ssti/index.html","215f3a59437aa4b7ab24eb80d78d47cd"],["/tags/tips/index.html","4db4520c1f95a38beee94373475f5adf"],["/tags/tty/index.html","9c3aafc2cdd58840e4de7627e7da9654"],["/tags/tunneling/index.html","1543feabdfae7b600c0242f708ee97af"],["/tags/winrm/index.html","86863e5a8eb47d1e8ebc830cf246de9a"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
