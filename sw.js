/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5bd818168870c682d65b18e5a9d30ace"],["/CVE/cve-2022-22965-build-and-attack/index.html","d91fedd00544aa81d111cac7afab8829"],["/about/index.html","6ea2a0959c94de62c550e93e91f28ce6"],["/archives/2021/09/index.html","cbe714fc7b1b905cb623a3cccbaa2e6b"],["/archives/2021/index.html","efc6ae9e725cda34698e5a246d31362b"],["/archives/2022/02/index.html","fd3bebac6a57e6f02e4cbc2d86db6178"],["/archives/2022/03/index.html","914c5863ffbec90af2065913c107c0e7"],["/archives/2022/04/index.html","924351f8448e8d2bd55887fcf893fab6"],["/archives/2022/index.html","594e17bd2dd6f765fcf9728044836277"],["/archives/index.html","384f0acb462aae334305f10f174aae33"],["/archives/page/2/index.html","774f1ed809d0597853296887fd3aa2a1"],["/categories/CVE/index.html","352ab2ae98de6aec455d6454716dd528"],["/categories/HackTheBox/index.html","6e8abf99951a506f52fb1d94699429ce"],["/categories/Tips/index.html","2857d91f05283aa43e066ecae7d3d150"],["/categories/index.html","972438cf3c1ba81dace503f1a2ca75d8"],["/categories/pwnable-kr/index.html","63ed404f36932c4d09b8dd667b4cfc23"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","157777705e533d0dac778c534e81ba4b"],["/htb/hackthebox-late-writeup/index.html","7a00cc120890f5093f663c525904b912"],["/htb/hackthebox-luanne-writeup/index.html","db2d44bd56108ecb4f1463e20cdbc99f"],["/htb/hackthebox-passage-writeup/index.html","57aa2712b51a496a365790e5a31862fb"],["/htb/hackthebox-routerspace-writeup/index.html","474aec6a08ade161da902f7ec3fd77b3"],["/htb/hackthebox-timelapse-writeup/index.html","3a3501e1e541d5c052635e3665db33f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","03cd3eb61db4714c45558ceb47f90be9"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","b28200fc0b7b3c73f557d591836aaee0"],["/note/setup-docker-for-ctf/index.html","312e587a80126d9409baf729ec102fef"],["/note/spawning-tty-shell/index.html","0bdff15e0c4861b3cc049f77b645b45b"],["/note/tunneling-and-port-forwarding/index.html","8992ae62cefb0d68980738fe4c0c9172"],["/page/2/index.html","28b26d48e8c3c8898deedb65071b507f"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","17e2f56005979dfa55a54d1cd5cf6412"],["/sw-register.js","f078592b7d6064c98aaa8c5b2c919268"],["/tags/CVE-2022-22965/index.html","6559dd7ed3982e94bf989186a3c76555"],["/tags/android/index.html","0aa863e060495e68365f96f44fbf86f5"],["/tags/binary/index.html","2d7d8d1b3ec6137084e9fd982d4e0cc3"],["/tags/ctf/index.html","c2f9f29ce14bba86fe12a1c72ca3a0bf"],["/tags/docker/index.html","63704fbbe8cd1a23028de2055da8cd3d"],["/tags/exploit/index.html","08acddb2e29404d7d90b641d5afa903e"],["/tags/htb/index.html","8307f7c8155ecd81adab4fea9c11f13f"],["/tags/index.html","a8e4cb1c45c324707e15e7d06eea14dc"],["/tags/java/index.html","1b167f7967ba7fe76f6c47e7f8d42968"],["/tags/payloads/index.html","19d6653df67694b7de141a1780c98a8a"],["/tags/port-forwarding/index.html","d461988cdafa68798d47e95f6600b9d7"],["/tags/port-tunneling/index.html","d9470261644ed837f1b20f73fe0b2780"],["/tags/powershell/index.html","25e7ce59286ac010a09ea0f016599e88"],["/tags/pwnable-kr/index.html","2cb511a95151561b874c191498b1b377"],["/tags/rce/index.html","c2530ca466550d15da0793bb2b2c3cbf"],["/tags/reverse-shell/index.html","e2edcb3634d418a1bd3802de7545a392"],["/tags/reverse/index.html","39e6e4bb55a2088f87dc1f30d89e9cae"],["/tags/shell/index.html","5d5bfdd0f2f45b65dcfcb59cb45a3ca3"],["/tags/smb/index.html","a70b8682bd9c08564bbbc459c663c8c6"],["/tags/spring-core/index.html","b334569220b43bf55975b88a28204ac1"],["/tags/ssti/index.html","45070797832d30163d6dc324dab8237a"],["/tags/tips/index.html","f07fa73e4abbc9601c7998f3e9a30617"],["/tags/tty/index.html","160603c2c437f5b86b3705d8077433c6"],["/tags/tunneling/index.html","fb09f5bcff05b5a462ed3c9f40f978a3"],["/tags/winrm/index.html","05487ac6e0565ce423ecab4914c70e40"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
