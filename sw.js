/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e469db9defcedb24ff08f7d65b54d9be"],["/CVE/cve-2022-22965-build-and-attack/index.html","d91fedd00544aa81d111cac7afab8829"],["/about/index.html","6ea2a0959c94de62c550e93e91f28ce6"],["/archives/2021/09/index.html","a85a19ec72f7da890117da0be18a12db"],["/archives/2021/index.html","7a9c1c0c88b7258232e8831b5d8cb9db"],["/archives/2022/02/index.html","1ead33fe7552dba4f6dfdf8826d193cf"],["/archives/2022/03/index.html","b03d2ec7c93c09c90b5229fe3cd9c8b1"],["/archives/2022/04/index.html","70fc0630d6be5b0cdb7a87205ee3ecc3"],["/archives/2022/index.html","bbd6f70eef18235ceabaed48ba0e6d19"],["/archives/index.html","aa515aa1c2ecd49db2410b541b768ce1"],["/archives/page/2/index.html","9ed19fa66f1c5ef3e97e723c80369548"],["/categories/CVE/index.html","2401ea9f394323dea5149f1d528621ed"],["/categories/HackTheBox/index.html","eefba6c24940b5067f6a325df1b7777a"],["/categories/Tips/index.html","6685a64a28104e30de6a095275719812"],["/categories/index.html","972438cf3c1ba81dace503f1a2ca75d8"],["/categories/pwnable-kr/index.html","647e73a4c6ef94f2ee871016e1d23252"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","3e91c0140f7d01dda253b7218d88e299"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","157777705e533d0dac778c534e81ba4b"],["/htb/hackthebox-late-writeup/index.html","caa87eb0835fe9d56b707242e0f8fd8c"],["/htb/hackthebox-luanne-writeup/index.html","0366aff79c8a6487b20cff1f399f31ea"],["/htb/hackthebox-passage-writeup/index.html","15eee853fa86754f2b065f1963d10c3c"],["/htb/hackthebox-routerspace-writeup/index.html","474aec6a08ade161da902f7ec3fd77b3"],["/htb/hackthebox-timelapse-writeup/index.html","3a3501e1e541d5c052635e3665db33f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1af238c067eb8b3fb22fc8da9a4f479e"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","b28200fc0b7b3c73f557d591836aaee0"],["/note/setup-docker-for-ctf/index.html","312e587a80126d9409baf729ec102fef"],["/note/spawning-tty-shell/index.html","0bdff15e0c4861b3cc049f77b645b45b"],["/note/tunneling-and-port-forwarding/index.html","8992ae62cefb0d68980738fe4c0c9172"],["/page/2/index.html","794a925459e814f65deb93b79d143d53"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","86cb19199cc4a93080f622afad051b32"],["/sw-register.js","106cdded5467361053a3b6ef98601336"],["/tags/CVE-2022-22965/index.html","16531eb03a92e8e633b9d2c857f1739d"],["/tags/android/index.html","87640fd93fd611367fce31c9fb7f4c41"],["/tags/binary/index.html","80d49baaf7322e049a38ff6380234bec"],["/tags/ctf/index.html","1fcefe252e0a7780ca8391de5183d25e"],["/tags/docker/index.html","f47b443cc90bd1401b1bc9cbddfad5b9"],["/tags/exploit/index.html","c0946cbe147cb397910664e4d3a0b24c"],["/tags/htb/index.html","8d5e4603896e552ab12c5eab7ce591e4"],["/tags/index.html","760cd8ea06309c91dcc938a4c413e23d"],["/tags/java/index.html","3694cbe683c51437e7b731732a84805f"],["/tags/payloads/index.html","2d376b15d8b311fb59c9be39cf394f70"],["/tags/port-forwarding/index.html","a313854a6d6207c9bfea1a600e37f787"],["/tags/port-tunneling/index.html","ac4afe0910bcd9b0b62cce9230e726fe"],["/tags/powershell/index.html","baf291802d09f60c0ca5aeccb410cef9"],["/tags/pwnable-kr/index.html","60f81fbe7b0ebd4c5700772b022ec402"],["/tags/rce/index.html","89b2c8b05e266a6a31764c2d53ed21d4"],["/tags/reverse-shell/index.html","3d539cd0055bf82b79276e458ff6574c"],["/tags/reverse/index.html","ad0f48f93fb7803b054a382d168563c5"],["/tags/shell/index.html","390aa833582d751e7568f3d2fb4a2fcc"],["/tags/smb/index.html","71ad5930294dffd524412f1b3e2619da"],["/tags/spring-core/index.html","9e01098c35c4706fa723b4c568907be2"],["/tags/ssti/index.html","900f7f4be2fb6333670243fcd1a88008"],["/tags/tips/index.html","b5563e870f66bbe086d50ccf9a6a91e3"],["/tags/tty/index.html","546e23114143c73c0a2ced3e440f0d23"],["/tags/tunneling/index.html","0a96ae21ee5bb82023ad4737abf08b3a"],["/tags/winrm/index.html","9f163a7f5674038937fe27a855ec9bed"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
