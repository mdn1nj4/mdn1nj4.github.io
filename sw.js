/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","47c465e50dcecb615a27e0e8f460c86e"],["/CVE/cve-2022-22965-build-and-attack/index.html","bb17f212e1ce6a258c5ef503855e239d"],["/about/index.html","f72dd6a09f41efdf46e1f94e4a676a73"],["/archives/2021/09/index.html","130674bbef9a41171075282bf347e30c"],["/archives/2021/index.html","44333f5b7ce848c82c401e6f0051f57d"],["/archives/2022/02/index.html","0735cd61202c65022b15a4a912142b9c"],["/archives/2022/03/index.html","fc173503d15e41902a3a3c5ef19d50ef"],["/archives/2022/04/index.html","aaa4d339903e8b9785c150f5ca018a05"],["/archives/2022/09/index.html","c67eaabc407e5938b2a83563fe235dd2"],["/archives/2022/12/index.html","fdb6eb7d253ba43412780e65a858f8f1"],["/archives/2022/index.html","c384862966b61f24027fd037e8598362"],["/archives/index.html","c232940be1dd4e2fa0c3466ed5233104"],["/archives/page/2/index.html","5dc02aaaa18608db1a9f6af72361a1ae"],["/categories/CVE/index.html","f52f67ad277b30bc2808eb79207cafe5"],["/categories/HackTheBox/index.html","c4dccedfbce03149d8d1ffadd7797b60"],["/categories/Tips/index.html","653aef61cb674828dc67c32dd8cf68f0"],["/categories/index.html","bf910384764ce0a2907252424d83b4ac"],["/categories/pwnable-kr/index.html","a903d811a88f38e394a89ff9a3ea1f16"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","22797744fd2f1129049ad34b4bc55687"],["/htb/hackthebox-late-writeup/index.html","473fb3ae37ad0fe8e19a12ccac65ff3f"],["/htb/hackthebox-luanne-writeup/index.html","d3f4e8d65a9a03b16742190fefd17bb7"],["/htb/hackthebox-neonify-writeup/index.html","808692f0984730f0b111a24140c9bc1e"],["/htb/hackthebox-passage-writeup/index.html","55d8a806526d7a0e7be12fb117c279b4"],["/htb/hackthebox-routerspace-writeup/index.html","d8477b9390efb7e95c4b3860d232ad5b"],["/htb/hackthebox-timelapse-writeup/index.html","fd0f2cb2920b86d43ce0f56ed85ee398"],["/htb/hackthebox-trick-writeup/index.html","47e7e2a020da6d8c84fa0db9b8e73d33"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1b9d7e9f1e0d861127fd77e0a3387eab"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","5dfc0f036a85db1d02bf5e17c3c63c10"],["/note/setup-docker-for-ctf/index.html","53ec5cd54a09b1985474a3f0b2dae23e"],["/note/spawning-tty-shell/index.html","81e2fa4072ddafea9d45a0e71724012d"],["/note/tunneling-and-port-forwarding/index.html","dfcccb24d89eb6503369f870c3b32bfb"],["/page/2/index.html","68a371524e75c6a8e3a14f94274fd47a"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","e69009163c37b30b5c1779303b39917e"],["/sw-register.js","803e2b744e572c48c18c485c40438867"],["/tags/CVE-2022-22965/index.html","dfef4ecd2e7ac5f65befe66821ea44ca"],["/tags/android/index.html","c6275ac40bdbbf21d4206d9668a3d728"],["/tags/binary/index.html","94911afcf4776046ee3a3622792216d5"],["/tags/ctf/index.html","db287236910b05aeaf21c64005c328f8"],["/tags/cve/index.html","e6ee16e032b51487ec5b9b1e23e20fec"],["/tags/docker/index.html","c2d7bfb178ca2352641e67e07b0aa722"],["/tags/exploit/index.html","c1b06341da3e4d189b95c9657e66e7b3"],["/tags/fail2ban/index.html","a303813a60c112f0d4282024f5c04455"],["/tags/htb/index.html","c9d1d8060458c001952298a93fd62ad7"],["/tags/index.html","83e9f99c76f21dd25eb7342072704da1"],["/tags/java/index.html","2528ac9251a070423975f9e46dc3eef2"],["/tags/lfi/index.html","62e6ae7782eaef49dfeedaa54b46155d"],["/tags/payloads/index.html","7e23bde5c7da3cd9ac28032a6372842a"],["/tags/port-forwarding/index.html","708c44a375a9241f8bd6233296489abc"],["/tags/port-tunneling/index.html","56e7a2baf5b6832c4e8713441cbf1fbb"],["/tags/powershell/index.html","d9d3981d26f7f3bb4567fc532d66162a"],["/tags/pwnable-kr/index.html","27dfd21773dfbff04b2d6d7cfa8bab1e"],["/tags/rce/index.html","03fa62e7c93c5f27b85289e7cb5dd364"],["/tags/regex/index.html","a0f90364655d2dfa267b6e692326b050"],["/tags/reverse-shell/index.html","24bd40080889767b75a36070079ba26d"],["/tags/reverse/index.html","9273d416acc7f59086d9de50ab00785f"],["/tags/ruby/index.html","54d79bcf0ba0dac954b4ec13c6646bba"],["/tags/shell/index.html","b475f7ae0e504cf13af8b0d93d6bcebf"],["/tags/smb/index.html","fe75d44d7afb9f53900e2d83ea74e1b4"],["/tags/spring-core/index.html","5f94b958fd6aed34b10351dc1e834b73"],["/tags/sql/index.html","46a9e4004118238670803f25c7595df7"],["/tags/ssti/index.html","758fa35db8715d5f0b12167629b39df7"],["/tags/tips/index.html","09fcd0558150350ee110f4c51946e8b7"],["/tags/tty/index.html","d9c05c4650fe5542dca063cecb901aea"],["/tags/tunneling/index.html","2310e82ecff5c80bf2ec667d6a23e39a"],["/tags/winrm/index.html","4baa2ca96c1e341395aacbd10994efde"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
