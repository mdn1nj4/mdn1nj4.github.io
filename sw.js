/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0b66f7f9f96d2728463be059a78ab389"],["/CVE/cve-2022-22965-build-and-attack/index.html","21cc41abfb7e7e6bab06e452e3b333ee"],["/about/index.html","eda8925549732c06ad18aa964c706a40"],["/archives/2021/09/index.html","1cf74e3c3545a0cd9598e1227699105e"],["/archives/2021/index.html","e9fac0834d182a8ad252dd0c1e35add6"],["/archives/2022/02/index.html","82f77dd0331d3365194dd9a1915b320a"],["/archives/2022/03/index.html","eabe8a6560682f4d64ac4ef25e4f633b"],["/archives/2022/04/index.html","e59ae6323e61e9e94d56269b51607556"],["/archives/2022/09/index.html","1d56903dae310ff742bb78bf166694b9"],["/archives/2022/index.html","aab054ea0c97e5f28c9816c0cc52ba63"],["/archives/index.html","a57cb93950630d6718403c36122018d1"],["/archives/page/2/index.html","e90a57719d448acb0cdd272da9eb2e7f"],["/categories/CVE/index.html","7cf86f206379591d5d7c3e93f4c32d9b"],["/categories/HackTheBox/index.html","da8c7b793dfa361fc5ce4cc1c5543cbb"],["/categories/Tips/index.html","cbf5f737cd31db425f634e20ae4fbd1a"],["/categories/index.html","7e0c3045055396b855e15fc19ba00b75"],["/categories/pwnable-kr/index.html","8dc594ae7bcb4d179e1f3ee6022a1e74"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","9e2e40c8b0d611445db047961554ea55"],["/htb/hackthebox-late-writeup/index.html","aaf2dc58df311cf40765b706ff16e5d0"],["/htb/hackthebox-luanne-writeup/index.html","1dc74c38ad760f94b60ffa9e026de743"],["/htb/hackthebox-passage-writeup/index.html","874040834e7bc83d7236b0020058dc3a"],["/htb/hackthebox-routerspace-writeup/index.html","050442765d9de1dd64fcbece09bbad52"],["/htb/hackthebox-timelapse-writeup/index.html","cedccf7deab62a5e4cfa1c4b9d108b15"],["/htb/hackthebox-trick-writeup/index.html","234b61d5838fa7a1997a5acaf29195bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c393fbc59f03161e7a4018b8355a2356"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","e4ebaee8214cfa5990bae40979c63498"],["/note/setup-docker-for-ctf/index.html","c8ff9885b971a73b252c6e9867132146"],["/note/spawning-tty-shell/index.html","cabb1c33ef0843611513b1e834fb0783"],["/note/tunneling-and-port-forwarding/index.html","a80964f5e383a4d9fd2a0e2935c2a4b0"],["/page/2/index.html","ac7f9ced26e056d10b90ed07b0420661"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","3530d45ecf6ef73905704367941a23ed"],["/sw-register.js","553cea9882675916075f8ab80f96f726"],["/tags/CVE-2022-22965/index.html","4b893664cf42741de8d9101bf668d612"],["/tags/android/index.html","92106698cc365bc08f4b442e83358c92"],["/tags/binary/index.html","08ee177159c823d38bcf0c4424679ad2"],["/tags/ctf/index.html","29e8bdb21362c9b08b5b810475527035"],["/tags/cve/index.html","53b0d201d8155d1147b373ba3be4eab0"],["/tags/docker/index.html","c40c973690cadf67d4b4ef95fe64bc89"],["/tags/exploit/index.html","0372a82b8870be04d79d55a72d9c2a80"],["/tags/fail2ban/index.html","5f206ec1e60542adf50bd7c2a888611e"],["/tags/htb/index.html","dd8ad19ca16a3921b5d875ecb0744957"],["/tags/index.html","0072eda8d7732fafcb9998651efa0f52"],["/tags/java/index.html","070e97785d6067a04ed5d01cabe2798d"],["/tags/lfi/index.html","25c8330a86aa67cd060c69ee24fe9f73"],["/tags/payloads/index.html","e56644cc37f71cfa5830745b392485f1"],["/tags/port-forwarding/index.html","3d25aca74447f6f9a5b7446d14b05401"],["/tags/port-tunneling/index.html","26a7af92bc951eb007297dfd5fc026d3"],["/tags/powershell/index.html","12aea3e348d0ca72d56f3ca9ed6d8d17"],["/tags/pwnable-kr/index.html","257f0ce1d279b0a5c6e59b179e3a594b"],["/tags/rce/index.html","3c0962868236517bb2a83ae2134d44b2"],["/tags/reverse-shell/index.html","8ad4e85809303b9dfd4595593444a85b"],["/tags/reverse/index.html","2f7b58cb819b14c1e03aa6a5d649f0ab"],["/tags/shell/index.html","638341f27772a95b75ba0982faf372e8"],["/tags/smb/index.html","f56a9f4571f5c97dc70ad843ab1a146a"],["/tags/spring-core/index.html","84c7d46183d51336f4107eaa06c38c60"],["/tags/sql/index.html","144faa67ba6149ece6f7bb427bd29ff1"],["/tags/ssti/index.html","bd66a699b951e10e88677d46373ffe80"],["/tags/tips/index.html","a20c9c976204bc7148a30c221603e624"],["/tags/tty/index.html","3dd41239c97a243a00879ea83ecab820"],["/tags/tunneling/index.html","0df0b2b11f266fa852f1bacbe7198bd4"],["/tags/winrm/index.html","2e8e29be1543ef9c5e65b938eb536e65"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
