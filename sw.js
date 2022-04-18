/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","25d7b6724e946a7a6d6228319ed4d27c"],["/CVE/cve-2022-22965-build-and-attack/index.html","c593faac8b9542d94cf61d0945563682"],["/about/index.html","be4a78d1bc3a3030dc3bfbe74ac0c9b2"],["/archives/2021/09/index.html","2f370320050d888941082cf97355491f"],["/archives/2021/index.html","7f95f048374f2ef7cc314369101aa816"],["/archives/2022/02/index.html","d14bd7e8ed2d85dbcb74edffa0c50834"],["/archives/2022/03/index.html","4056a027b3776a2566ee5a940d19e7e0"],["/archives/2022/04/index.html","fcd788de89bc7de40ba35bd76eeaa59c"],["/archives/2022/index.html","969583d026509b7f732c4d33c26679d2"],["/archives/index.html","1b5c3e70d88ea9a532865e066fd67148"],["/categories/CVE/index.html","28441ddf2d44bd5a6fd6b6a003b81b33"],["/categories/HackTheBox/index.html","b93a5235440315405bc5215b7a73399b"],["/categories/Tips/index.html","bf9162ebda6452ab95f6ee996c3e2dba"],["/categories/index.html","1d65a356fa7f832ba9cfbba848b70696"],["/categories/pwnable-kr/index.html","c48ca5a4d189d1efd47bfe52cc7b4403"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","8f305ad5e059cd5e4175651fbbe5b097"],["/htb/hackthebox-luanne-writeup/index.html","2fea5bed6ee8d2f14a0995a7d201fc1d"],["/htb/hackthebox-passage-writeup/index.html","d63aa2e2eb7641d4c0d16557fc562f7f"],["/htb/hackthebox-timelapse-writeup/index.html","d936d99276cb8ac694d6d0016830ee8e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d23b86bdd4c1b80095b9d3265d35024e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","6a3f0b787599a202433524ec8521c4d9"],["/note/setup-docker-for-ctf/index.html","12b3876f248ebd305aaad58e8b01c9ca"],["/note/spawning-tty-shell/index.html","03ee302a1b629d38ce7a03b0b6033054"],["/note/tunneling-and-port-forwarding/index.html","b02ac004563e1951191d258a6d4f7252"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","7084bc04811b4a0d6dead872cfd65b4b"],["/sw-register.js","a338dcf3eed3d95c080718823a7acd8c"],["/tags/CVE-2022-22965/index.html","0e824c99e309eeb0a936a8401098cef4"],["/tags/binary/index.html","bf0f467db4a082685a8f13f73ef4faae"],["/tags/ctf/index.html","8854a02708798e157fdb2d9c27752622"],["/tags/docker/index.html","6b3e9bd17a39ed59013312e5fddea1ec"],["/tags/htb/index.html","6a0f4badb2ee8b9a3e76e6c768cbf30a"],["/tags/index.html","dbec8eb4e46401ff7e0e7a9839dbd037"],["/tags/java/index.html","8b66aafc154cf6bb0cfebb135428a64a"],["/tags/payloads/index.html","388d1c74cd55b19038f7996543de12f0"],["/tags/port-forwarding/index.html","55e5f0358691747a688e19b4cc07005c"],["/tags/port-tunneling/index.html","5880be485f5e9f9acbfccdcbecb184ec"],["/tags/powershell/index.html","367f0289540bad827ac6414080f1f7b5"],["/tags/pwnable-kr/index.html","43464525823b6162c169acc132e59fb0"],["/tags/reverse-shell/index.html","509c5309e2e7e3ba11196bb468de4b22"],["/tags/reverse/index.html","db5a6da72e9d60b0d11d3a2a48a183a6"],["/tags/shell/index.html","261747adb425faa8fd2f194e1d0e097e"],["/tags/smb/index.html","c8bdc31284803b7ef67d745af900b878"],["/tags/spring-core/index.html","c40c1fd3c36e87f2c729ffbbceb31b38"],["/tags/tips/index.html","98172bd9cd09610409bb120c2a36be2b"],["/tags/tty/index.html","b9b9394ee97aecc38d6f4a84a42aee98"],["/tags/tunneling/index.html","181557ab22565519f4e8259a6d9af5ca"],["/tags/winrm/index.html","63e78c778f1c9a45e251113a3ae435f0"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
