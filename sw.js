/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1b4141fb807e7d9b1e63929246e44c4a"],["/CVE/cve-2022-22965-build-and-attack/index.html","1535576fad02b7a15fc65adebb0db6ee"],["/about/index.html","900e3396fb1702a7a21b07b0beeb15b3"],["/archives/2021/09/index.html","3fa773953e0d524a92fe545d75359a29"],["/archives/2021/index.html","74a8284ea88a0f89b8fbc425216af635"],["/archives/2022/02/index.html","dc2ed5f8664bca11ad87f1591dae828b"],["/archives/2022/03/index.html","0eb79e8e0f373f2b8639869dd9dfdc01"],["/archives/2022/04/index.html","661143a9d7d4a7fe6235eddb477bb583"],["/archives/2022/index.html","7bd6968a5ef3ba61bb5a12831855f459"],["/archives/index.html","b1f5fb3458c8df639f424aad55ae8136"],["/archives/page/2/index.html","5f6a09b4de3b7a4e2a54d2036d19f25e"],["/categories/CVE/index.html","dcb7dad36670b95a524b67500a82e291"],["/categories/HackTheBox/index.html","5dc207e03d47120a88c60754ae737ec1"],["/categories/Tips/index.html","65cc59e1d08f1952e51e8c3dcc21ee21"],["/categories/index.html","3d63fe8e6f60a47c5d328a13f112538b"],["/categories/pwnable-kr/index.html","b6e7393c4f57a4f50da52d5ddf7fd3a0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","6375377bb52ce7732a9487b60cc923a0"],["/htb/hackthebox-luanne-writeup/index.html","1e987ee6776cc8543fc4c3d0e3863b7e"],["/htb/hackthebox-passage-writeup/index.html","792f3952cc25d2d34d14249159fae80c"],["/htb/hackthebox-routerspace-writeup/index.html","4f66961ff69d09c8e25fc93d7fbbf177"],["/htb/hackthebox-timelapse-writeup/index.html","6cf2c9471b500ae547e3577504b223bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","14de50809a95e3364f71d1b6bf172c0d"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","9a530bb2459030153070a258a1e557cf"],["/note/setup-docker-for-ctf/index.html","99a39b33407311fb7b080096539060df"],["/note/spawning-tty-shell/index.html","86c2504a63980bc254148f09d5ea98bc"],["/note/tunneling-and-port-forwarding/index.html","f67a92375b005b5ada108b59d56d4aed"],["/page/2/index.html","8054da578116735ffcf91fc3133e7bda"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","7da334fe8c76a2a5f673c6e2f67bc5bf"],["/sw-register.js","7470e93686c0485a7f8a98fc101832b3"],["/tags/CVE-2022-22965/index.html","2bc6250032a6883079166ea8e8737038"],["/tags/android/index.html","b259c85c7c2af433478a80b3dfd61826"],["/tags/binary/index.html","e4f5100f8110e43fa4536d4014a72fcb"],["/tags/ctf/index.html","2a41e20d9747de168eddddf119a639df"],["/tags/docker/index.html","a4ebc2ef98a9f23fb1b8dd8497bd2521"],["/tags/exploit/index.html","737c44fe27e61b1ac1cd9ff9d408d902"],["/tags/htb/index.html","cfca650fcbba32fd2af4a7ecce0c7311"],["/tags/index.html","d3098f3f859a7000b64c1077d9d660f8"],["/tags/java/index.html","6484b61a45be04fae37079acad9507da"],["/tags/payloads/index.html","af2f2db0ea56424fe818dacd81289667"],["/tags/port-forwarding/index.html","6c2804ccea489709a60f4f1fb8895341"],["/tags/port-tunneling/index.html","674d3a682ca858f3cdac9f6a71fd02c5"],["/tags/powershell/index.html","47b22b133328dc636b0f58254707e3b8"],["/tags/pwnable-kr/index.html","76cf82581f2ee5cf5a9c9202dfd47de5"],["/tags/rce/index.html","084b9218faa978649362aba1ed2dafc6"],["/tags/reverse-shell/index.html","1477d4f2d595bb09002fea0264875231"],["/tags/reverse/index.html","51415073fd119c08f16f69d525fb4cd6"],["/tags/shell/index.html","cf6feada4af42cf6f294e250f35cd663"],["/tags/smb/index.html","d4152aed8d94127c5dafb9749ab8ecf9"],["/tags/spring-core/index.html","64962f870e8f13aee6a58d59e3630e13"],["/tags/tips/index.html","8918e695cd6f4c50d2e98ae152c10aab"],["/tags/tty/index.html","95616ff8b3c696cfdf1883305657cf28"],["/tags/tunneling/index.html","6c82adaf42476760df71bc3456bb2acd"],["/tags/winrm/index.html","dafb4b33b2701a2ca0f3b44f16c22429"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
