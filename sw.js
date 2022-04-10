/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9500e6fa26fae57b8c2baeab649e4dfc"],["/CVE/cve-2022-22965-build-and-attack/index.html","c593faac8b9542d94cf61d0945563682"],["/about/index.html","be4a78d1bc3a3030dc3bfbe74ac0c9b2"],["/archives/2021/09/index.html","6bca4aeaa71d6151e1b1a9bc5d16bf53"],["/archives/2021/index.html","6c0d582fb1257454b851f75ceedace27"],["/archives/2022/02/index.html","30ad9c6afdb19c4aa99b65be8b0d90ee"],["/archives/2022/03/index.html","2e6d0a1991064b2a5d9353f22c52f4e0"],["/archives/2022/04/index.html","dc819bb9e3efaf95e5d73c676dcd8844"],["/archives/2022/index.html","75862f7e8466557617c0cecaadd9d289"],["/archives/index.html","4e1dde4c80d063c005ccdfb29a0edd94"],["/categories/CVE/index.html","3bd5affd174ae13f3c532904deb68c82"],["/categories/HackTheBox/index.html","2e960ce74dc8ce962bc60167c9e8150f"],["/categories/Tips/index.html","f0153fd379be1bc80f1ebf94026ad0dc"],["/categories/index.html","1d65a356fa7f832ba9cfbba848b70696"],["/categories/pwnable-kr/index.html","5b499e72c82fa63ebab92dc0b521cde3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","8f305ad5e059cd5e4175651fbbe5b097"],["/htb/hackthebox-luanne-writeup/index.html","d4b89f3c84b9c0be8357e58690458a4f"],["/htb/hackthebox-passage-writeup/index.html","7568dde12afc4d0495cee419d3346440"],["/htb/hackthebox-timelapse-writeup/index.html","d936d99276cb8ac694d6d0016830ee8e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c914645edfa382115dee4e98b71a8389"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","6a3f0b787599a202433524ec8521c4d9"],["/note/setup-docker-for-ctf/index.html","12b3876f248ebd305aaad58e8b01c9ca"],["/note/spawning-tty-shell/index.html","03ee302a1b629d38ce7a03b0b6033054"],["/note/tunneling-and-port-forwarding/index.html","b02ac004563e1951191d258a6d4f7252"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","06c40544a375c1134e52468f40041758"],["/sw-register.js","929b635e4c4084febed41c1b842af171"],["/tags/CVE-2022-22965/index.html","f49920ea8d46b3737251f8e179d43381"],["/tags/binary/index.html","d7231fba17216d24e711b147c0e5703e"],["/tags/ctf/index.html","9cf0a69c32db2f3a60d94f66f9a52698"],["/tags/docker/index.html","bfc3cfd1328b36d11bd35bbfee6a9f43"],["/tags/htb/index.html","fe16b2e7431ae39199b1dc42f51ce9a4"],["/tags/index.html","5ee734950b6d4ef2b5746aed93fc17f5"],["/tags/java/index.html","e198bb32510d8cf517f6eb13a23f2310"],["/tags/payloads/index.html","bb563b613d0098ee064da784950ebcb7"],["/tags/port-forwarding/index.html","aa1da8be10f5511858b80b70fdf027b6"],["/tags/port-tunneling/index.html","c177142ca4fc5de2c12209ca2b5f769a"],["/tags/powershell/index.html","d15091608fcecceea2c7a9a990721bc5"],["/tags/pwnable-kr/index.html","906937eada67204f855e81921b263eb2"],["/tags/reverse-shell/index.html","5af9ddd08a6aee3e1b76004fcebdec38"],["/tags/reverse/index.html","b5e8a9d5b8572542a5d734d0c12fcf5b"],["/tags/shell/index.html","96178183b9ced6353faedeeebbfd903b"],["/tags/smb/index.html","c20c7ecd12833ff7b4228b2b48770791"],["/tags/spring-core/index.html","108c531f4d52257d971ec8ece42d21ef"],["/tags/tips/index.html","b3533cbb357d8ab3f22be8f83220e99f"],["/tags/tty/index.html","268e60ccded161fe3bf3ac1ca7e49faa"],["/tags/tunneling/index.html","0b6535d099b968399560bcff409812d9"],["/tags/winrm/index.html","fa85e70d1c09c0ed01643c197fb8d657"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
