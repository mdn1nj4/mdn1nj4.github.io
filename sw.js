/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","613fb5734b4537d7255e00e5764bcfcc"],["/CVE/cve-2022-22965-build-and-attack/index.html","d91fedd00544aa81d111cac7afab8829"],["/about/index.html","6ea2a0959c94de62c550e93e91f28ce6"],["/archives/2021/09/index.html","99bf8caca1d9cbfe4e4e603e8b038aa0"],["/archives/2021/index.html","9bd14e550ccefb65c9ceb00d6be84526"],["/archives/2022/02/index.html","18dd74ae685d79b735e7de1717894db5"],["/archives/2022/03/index.html","0ebe7d88abb96a3680e091ac8580123a"],["/archives/2022/04/index.html","c8b7033961793303c13acd898228731f"],["/archives/2022/index.html","33611bdcbbbbeb4078cf7216b027511f"],["/archives/index.html","a627dea0130cfab3a1fa00673e2b4a4b"],["/archives/page/2/index.html","c3ee7d8b1e2ce715f394ca51496edefa"],["/categories/CVE/index.html","b6683eeb3ef7c31be2f272d01c31be73"],["/categories/HackTheBox/index.html","80efe4ba092b1cef24d686f0d246b037"],["/categories/Tips/index.html","b02fa97443bdbd298a6da730555e9998"],["/categories/index.html","972438cf3c1ba81dace503f1a2ca75d8"],["/categories/pwnable-kr/index.html","b097134828cbf3e233b6d7ad02e772ae"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","157777705e533d0dac778c534e81ba4b"],["/htb/hackthebox-late-writeup/index.html","12c3e85f93a0d9aea5cf799653cf6b6a"],["/htb/hackthebox-luanne-writeup/index.html","011b011f10b19809dd81227d9c824e81"],["/htb/hackthebox-passage-writeup/index.html","1a0e839528cc459baeabb33528ba7852"],["/htb/hackthebox-routerspace-writeup/index.html","474aec6a08ade161da902f7ec3fd77b3"],["/htb/hackthebox-timelapse-writeup/index.html","3a3501e1e541d5c052635e3665db33f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","52efe7850ae72318122cbbb831c4c6da"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","b28200fc0b7b3c73f557d591836aaee0"],["/note/setup-docker-for-ctf/index.html","312e587a80126d9409baf729ec102fef"],["/note/spawning-tty-shell/index.html","0bdff15e0c4861b3cc049f77b645b45b"],["/note/tunneling-and-port-forwarding/index.html","8992ae62cefb0d68980738fe4c0c9172"],["/page/2/index.html","279c043fab9d0d00104d507d28aabd8b"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","12ca891bf652bddf70f7b8edb727097b"],["/sw-register.js","b7b1eed9d0060615a44cdd896066ffaa"],["/tags/CVE-2022-22965/index.html","78406728e4975e2dc03600d6766ed230"],["/tags/android/index.html","2a92ff002f16e563108ad0b8a3b63018"],["/tags/binary/index.html","fdc7b80336680c9f1ba30a5b53602e3c"],["/tags/ctf/index.html","f321a65893c257cd819a247ad7100cf0"],["/tags/docker/index.html","ba26b4fb84bd8cf9869705ca0c8a276f"],["/tags/exploit/index.html","8a23f93273a5c08cfcd84461f53a2f78"],["/tags/htb/index.html","e5463d9a1ab50b1af0a6fc2561a5013f"],["/tags/index.html","8e1016ea9b7dbacef6cdb4626860062a"],["/tags/java/index.html","6f33b7f19e80e9ea8a9fb273d44f9c71"],["/tags/payloads/index.html","771d3262594aff83fdf2e781941c45ec"],["/tags/port-forwarding/index.html","70b9b4947a73878dc98966dff6929f44"],["/tags/port-tunneling/index.html","06921f7c2ffb38a8e39fdca1fad44d05"],["/tags/powershell/index.html","a5aa6b86d9b8323936e5898c56dde8bc"],["/tags/pwnable-kr/index.html","f594dde72149b53187920be60bfec1e6"],["/tags/rce/index.html","73c5e36f1ee050696d2956dc8340ecd7"],["/tags/reverse-shell/index.html","c84d3adc3a85d4a28aca69eb357b1ece"],["/tags/reverse/index.html","072561087e3daf31942607ec8cb22d05"],["/tags/shell/index.html","ce924eaacb050dbbd8a7db8d4f44ed91"],["/tags/smb/index.html","9c60e8616033ae220ff00664e9edac77"],["/tags/spring-core/index.html","974e0ee6d82b718813c150adcaeef2ed"],["/tags/ssti/index.html","a40c330e99e07e0e4ae3d4d93f70b3f0"],["/tags/tips/index.html","ed07c87633991ec1e818c7acdb74481f"],["/tags/tty/index.html","bcfea26d8ef7fc724c42be603c212789"],["/tags/tunneling/index.html","a4a727ab20003d9f08d9e49c005d2437"],["/tags/winrm/index.html","20e061e18704dc5cf7e39c36418d4236"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
