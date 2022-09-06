/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ca4e18aae6d3ff5e4de58290cef81e0c"],["/CVE/cve-2022-22965-build-and-attack/index.html","21cc41abfb7e7e6bab06e452e3b333ee"],["/about/index.html","eda8925549732c06ad18aa964c706a40"],["/archives/2021/09/index.html","6a01b0c0d0370c708dec46edb78c3de1"],["/archives/2021/index.html","0a268551af2890c08c4653998b14f2c9"],["/archives/2022/02/index.html","83c98001eaed9b1a13689569f276a6a2"],["/archives/2022/03/index.html","426da3a986369196454380ef8a42fbcc"],["/archives/2022/04/index.html","dc3fb9c14d28c182307ef82bc96cfb61"],["/archives/2022/09/index.html","d9631ed157d63c475f9aacfa61f03c88"],["/archives/2022/index.html","4eb6eefc4c2aade9b8e8110b8f4eab20"],["/archives/index.html","2f2b0607ce6dbf2afb124f05c05d4f89"],["/archives/page/2/index.html","b8e0486074125afe48ca4f74fbe3629d"],["/categories/CVE/index.html","f6e25ebd58045b23bdf54d1e10db794e"],["/categories/HackTheBox/index.html","b9acfe7dbbfdc903f7a6752b94fc569a"],["/categories/Tips/index.html","022e3c95dc17bdf6be4218659e9bcdbc"],["/categories/index.html","7e0c3045055396b855e15fc19ba00b75"],["/categories/pwnable-kr/index.html","8697ea9f59d307e148905592e1a3c76c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","9e2e40c8b0d611445db047961554ea55"],["/htb/hackthebox-late-writeup/index.html","aaf2dc58df311cf40765b706ff16e5d0"],["/htb/hackthebox-luanne-writeup/index.html","49b48dcc5e45752753314a24f00432bc"],["/htb/hackthebox-passage-writeup/index.html","85f29c8d4667e763becbbe054efaf243"],["/htb/hackthebox-routerspace-writeup/index.html","050442765d9de1dd64fcbece09bbad52"],["/htb/hackthebox-timelapse-writeup/index.html","cedccf7deab62a5e4cfa1c4b9d108b15"],["/htb/hackthebox-trick-writeup/index.html","69f505c16418b7726ef57cd12dc69a30"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5583896c7fda12ac4f71636d78c5b2da"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","e4ebaee8214cfa5990bae40979c63498"],["/note/setup-docker-for-ctf/index.html","c8ff9885b971a73b252c6e9867132146"],["/note/spawning-tty-shell/index.html","cabb1c33ef0843611513b1e834fb0783"],["/note/tunneling-and-port-forwarding/index.html","a80964f5e383a4d9fd2a0e2935c2a4b0"],["/page/2/index.html","f8bc7653021d7a206d93cdffa4476cbb"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","244b75cec573ed9376613d4a432b7268"],["/sw-register.js","7e67ede7a292717e1c9d801ca22207fa"],["/tags/CVE-2022-22965/index.html","97a1acf75f0baab64ec567013ec6fa4d"],["/tags/android/index.html","f210f25ae42f88e5f825297394a22301"],["/tags/binary/index.html","7449937cd954ba36543d17a3ab29655f"],["/tags/ctf/index.html","b08cdcfea44a17aa21478c0e200d8154"],["/tags/cve/index.html","63f82909c3fdd8a279cde00f2e09aaf3"],["/tags/docker/index.html","5296d2c1b0052bdd06c452e25cbdbaf7"],["/tags/exploit/index.html","27bae1343d3b72bee34a9476b2257d44"],["/tags/fail2ban/index.html","1413844f370c96da47aab1167ff6f839"],["/tags/htb/index.html","2b1cb9e0d54f49c5c3badc6be3c9db47"],["/tags/index.html","7dd9f0b466912ed1aa79f8d5c5fdd065"],["/tags/java/index.html","96c9672f909ca9b5b9610ccb0e08c335"],["/tags/lfi/index.html","e3bb6134cc3105bfd641df6d0dd678a2"],["/tags/payloads/index.html","925501536fb312d2f6fd585211ae546e"],["/tags/port-forwarding/index.html","81c85f94ae67c5bced6f8c85be2bef94"],["/tags/port-tunneling/index.html","4aeec5296d25ad6a9ef3eb84e0748d46"],["/tags/powershell/index.html","a2c1bf8679b75608c2ac0601ad77e491"],["/tags/pwnable-kr/index.html","7afc4787ecfcc8d8948f44d64b3a9363"],["/tags/rce/index.html","f51e42f18158e822bd50a550e96a1fff"],["/tags/reverse-shell/index.html","073e7fee45b811814e6c099cf9b77d5d"],["/tags/reverse/index.html","8390c89934aafc1ff610f41edbc85591"],["/tags/shell/index.html","5d829b6862be2f66684a744b08b2e3e0"],["/tags/smb/index.html","23641aba13e3f0f957536519aea61770"],["/tags/spring-core/index.html","b8b8ed4363dc4ff4f496f4da59fb2d3d"],["/tags/sql/index.html","c9cc6202fdf72e3f3d411dacc3cefdcb"],["/tags/ssti/index.html","fb50b0bcf80310343969bfa50cb0290b"],["/tags/tips/index.html","d58e634020644bd0b2526e7f58b9abaa"],["/tags/tty/index.html","91e677388c3d81a12dd3eb587487c6dd"],["/tags/tunneling/index.html","f8dae23b297fee43123930ee8945924b"],["/tags/winrm/index.html","199f9d71cec7524cba837ba343ae6e00"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
