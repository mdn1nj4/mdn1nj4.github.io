/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","caf00bc39d5a80773abd81264c326dc6"],["/CVE/cve-2022-22965-build-and-attack/index.html","1535576fad02b7a15fc65adebb0db6ee"],["/about/index.html","900e3396fb1702a7a21b07b0beeb15b3"],["/archives/2021/09/index.html","71ce7bf9090462d9bcce55eba798891c"],["/archives/2021/index.html","5e0b83d084ddfb5bd5260eb7cbe05411"],["/archives/2022/02/index.html","0a47eeafa82b66a0ca8ad50d7b61e0c3"],["/archives/2022/03/index.html","b5903178f66159d8a54eec2d40631f79"],["/archives/2022/04/index.html","55ca9ff52ad778309e39f9806333011e"],["/archives/2022/index.html","aea605cf62057b4765713a49ce259953"],["/archives/index.html","64ac704abf8c383c0e598ebbb4c899c9"],["/archives/page/2/index.html","6492a6e957fe6de85351c367b6bc6eec"],["/categories/CVE/index.html","8d720c8f50a02a4b0ff42a719e1d4601"],["/categories/HackTheBox/index.html","3da9d8b8abe8127a3a431811dd3a1656"],["/categories/Tips/index.html","25276ae89d56c085d4011a3a251ef0e7"],["/categories/index.html","3d63fe8e6f60a47c5d328a13f112538b"],["/categories/pwnable-kr/index.html","368910773075c693308b172984456ba3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","6375377bb52ce7732a9487b60cc923a0"],["/htb/hackthebox-luanne-writeup/index.html","4ba2fd01a03fd8a0d2f1e36264967ab1"],["/htb/hackthebox-passage-writeup/index.html","5fff1653a33ab53d54831f89df640901"],["/htb/hackthebox-routerspace-writeup/index.html","e6baa56c7d3d556411ff6ae22e8e5cc4"],["/htb/hackthebox-timelapse-writeup/index.html","6cf2c9471b500ae547e3577504b223bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1ad8ccbdb30f45f6c582c122c079f75e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","9a530bb2459030153070a258a1e557cf"],["/note/setup-docker-for-ctf/index.html","99a39b33407311fb7b080096539060df"],["/note/spawning-tty-shell/index.html","86c2504a63980bc254148f09d5ea98bc"],["/note/tunneling-and-port-forwarding/index.html","f67a92375b005b5ada108b59d56d4aed"],["/page/2/index.html","5179703d095384ab9d813aaec924ab3a"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","6176d4d66a4d8b089e77e47d17a60de9"],["/sw-register.js","312ec9ce1affce62f08b2b396400226d"],["/tags/CVE-2022-22965/index.html","f11617b4e8a1435676f107a956053327"],["/tags/android/index.html","7127bb6abe89b0c44ed0aadb24133fb3"],["/tags/binary/index.html","c49ec10bd6cf82a77db6a35d22be71a4"],["/tags/ctf/index.html","818fc43c86649af8407b31c7d48d21a3"],["/tags/docker/index.html","e175a3684d0d6d7aa4712bdec63b0a12"],["/tags/exploit/index.html","d3fe34e6cd28ade4b429b901089513b5"],["/tags/htb/index.html","caec3963f129110f39b2c6aecb1702f6"],["/tags/index.html","cdfd11c74969c5ba9dfde2282d8fd35f"],["/tags/java/index.html","f0888caa0656926145cbc6282b5e4b64"],["/tags/payloads/index.html","9f9630138d0dc17b8cc08b868b3755c8"],["/tags/port-forwarding/index.html","b713c5f9586d96a3a30e480de1a4ce81"],["/tags/port-tunneling/index.html","fde7fa172bd234caca9db8aa5a0ebb17"],["/tags/powershell/index.html","e00f7d977e89fa78b013067c4e920d24"],["/tags/pwnable-kr/index.html","dcd549cb11685a992bb98e86fb2b1ddb"],["/tags/rce/index.html","ffca724af99d68a3a396bf5f8660af76"],["/tags/reverse-shell/index.html","e6fca6d723f063c84c0e39940d7bc1aa"],["/tags/reverse/index.html","ae69c18112ed235fa44fff2b91e9aa68"],["/tags/shell/index.html","355b1f3d4009cc023b04b491795f7c21"],["/tags/smb/index.html","d69b5c3d2cf1766d3cc3e65f314f8595"],["/tags/spring-core/index.html","983aa58fa361e376c9ae0c5dd80aef67"],["/tags/tips/index.html","25e1bbbcb564c76d00310f92e3d0fc19"],["/tags/tty/index.html","b9c1a30b135250f03f669cbb43c01efc"],["/tags/tunneling/index.html","57f37b5a0398466f4c151ff66ddfd20a"],["/tags/winrm/index.html","2ae0d44116431fa3be79719eb194aa23"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
