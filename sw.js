/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a43b06c690ec497589d035940502e623"],["/CVE/cve-2022-22965-build-and-attack/index.html","7b7de4648edac2fbf5805b8e5a602008"],["/about/index.html","d15393f8e365c6ceefa59b7a5ccc4d7e"],["/archives/2021/09/index.html","343d508963fefbcf94790835de069185"],["/archives/2021/index.html","db351a2f225bd80095cec96995e0cca3"],["/archives/2022/02/index.html","5d1db02cc1a7a59f4541c0b532470a9f"],["/archives/2022/03/index.html","f956f6ef91761cfcf5db47647026be9d"],["/archives/2022/04/index.html","13ee1083bb8de84b9350ac9809664a65"],["/archives/2022/09/index.html","90a5e2a1e6c5dddb212ed1273c8d0d60"],["/archives/2022/12/index.html","984dbb96d33666e5924b66474401cdb8"],["/archives/2022/index.html","7ee39f382d34350236a045805105bada"],["/archives/2023/09/index.html","799ae50348bc6476cbaf3332ef4e7383"],["/archives/2023/index.html","e8b73a3b4f2d1bea69b55394ffcf1fbc"],["/archives/index.html","b7faacfbc83641ee0340e43f4ba9d948"],["/archives/page/2/index.html","ad68ce229473f610a4df0af0cb0b6539"],["/categories/CVE/index.html","4192d1cfdaa2eac1c10990c7d33167a6"],["/categories/HackTheBox/index.html","c6abce4557f3ef5be22580ebbc6c992d"],["/categories/HackTheBox/page/2/index.html","dea3f093c61d0104106e91e5a15af0a5"],["/categories/Tips/index.html","fe9f8292dd8a9dd4b679b950309aa10f"],["/categories/index.html","22387b2c9c0a77402499f3dd8b15da21"],["/categories/pwnable-kr/index.html","4414dd900c86722804cf77a02dfb0009"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","c43ef64d335bbe199a44966a48d5a3fb"],["/htb/hackthebox-arctic-walkthrough/index.html","74d28b7ce470e51ef5d1fdc47751e0f7"],["/htb/hackthebox-bounty-walkthrough/index.html","222002267dc14195d6046f18fab44d6d"],["/htb/hackthebox-lame-writeup/index.html","8110a7b508fc52a61e6fa0b1830701bb"],["/htb/hackthebox-late-writeup/index.html","df134a29d6dbf46b02b05392fb1ef6a7"],["/htb/hackthebox-luanne-writeup/index.html","b4299ee8e401a59b35986686154f2a71"],["/htb/hackthebox-neonify-writeup/index.html","424a1a949f41848e89a56e5c834e548c"],["/htb/hackthebox-passage-writeup/index.html","ae160aae54d3c4835a23c10aee5c6505"],["/htb/hackthebox-routerspace-writeup/index.html","460f6af1ebd262a8c79380e4d3eff172"],["/htb/hackthebox-timelapse-writeup/index.html","95e09df1f633494f635837f612d36c8d"],["/htb/hackthebox-trick-writeup/index.html","3e5b791c7861719328091b1a7afee216"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d13abb8d461aa521b1f135017688f426"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","ab47a52f81e59ed7676c760a0461c5c0"],["/note/setup-docker-for-ctf/index.html","ecb2a601d27e454bbcb9710ed27ba0e9"],["/note/spawning-tty-shell/index.html","baa90212dd68f96bd1e1d359a56a86db"],["/note/tunneling-and-port-forwarding/index.html","0ff838a22ee58a93b983495ca8208d3e"],["/page/2/index.html","c4d10e707d562922dec09a5bd7a93101"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","e05faa20471d65f6ad47c67f03570f8d"],["/sw-register.js","53b170c836b499bc498d31f15cbdeee9"],["/tags/CVE-2022-22965/index.html","0a77126e4b3320c8d00f5dec22385357"],["/tags/Juicy-Potato/index.html","2e0403f5dc37d315dc48c41d28243d4f"],["/tags/RCE/index.html","87893926d8eef2ceed51d9b04421fd6e"],["/tags/SeImpersonatePrivilege/index.html","2c0da1b2ce5218d591727fc2b045a7be"],["/tags/android/index.html","1215cc6b4ea0973252b04db2cc7eccc8"],["/tags/asp/index.html","c77092c459a19395d9924f6ef993c8cd"],["/tags/binary/index.html","8cc83b4c5d6f424e6b3eba2b3c8eb538"],["/tags/coldfusion/index.html","4ea9217dac391962bc42c8354d3bb100"],["/tags/ctf/index.html","98456816e226257a7043949983a38d3c"],["/tags/cve/index.html","8ffb4b276ae85a781f5f9b0aa7394f94"],["/tags/docker/index.html","933ccb48b1b494af426c562ca844c940"],["/tags/exploit/index.html","0b49c5e4745e58bae4d8f350fa70e932"],["/tags/fail2ban/index.html","6d43aeb228557cc5880f576fe23c7d96"],["/tags/fileupload/index.html","ac9ecd79e0b0add2d2348369d1a80281"],["/tags/htb/index.html","37628069456153c9dd6f7908c1edb190"],["/tags/iis/index.html","9f8e51588a8c9377795d00ae03f5ef91"],["/tags/index.html","79bfa52743140e61a7592954b582f405"],["/tags/java/index.html","3e4c81073dc0a44849470b3f8d72eb3b"],["/tags/lfi/index.html","6ce9f71f0fb0363689f3cde6b86753ce"],["/tags/metasploit/index.html","c832e6b895a0d891f2874be5f1eab230"],["/tags/payloads/index.html","b5c8c0b129604b8d21340487e3fcb8a0"],["/tags/port-forwarding/index.html","e1dd373c34181fe8b5cf368f9e31d58a"],["/tags/port-tunneling/index.html","c895231bdf26a5fd47ec80ae6a35aa7d"],["/tags/powershell/index.html","7b5b5c22cba1ac2c30f468a5e9beeb71"],["/tags/pwnable-kr/index.html","e03fdefc4ce15495f50af78bf5b8ceb1"],["/tags/rce/index.html","34fe434b7cd7858070a9d76155fd6b50"],["/tags/regex/index.html","73fd067981e44be4ffa3eba2537257ff"],["/tags/reverse-shell/index.html","175cf8fa32cec71e7114803ef53cbe16"],["/tags/reverse/index.html","cb3ee86fe91e4b708b16a4586eddaf26"],["/tags/ruby/index.html","48cc749ae37d4f9d1dbfeec56171d1b0"],["/tags/shell/index.html","9baed9ab284302d1c9680222c2fc3a03"],["/tags/smb/index.html","fe623886a967b705068c89538f9d3da2"],["/tags/spring-core/index.html","146a082b246561231669aaf40b332835"],["/tags/sql/index.html","5d281dab9796e3870d3201bcac6326a3"],["/tags/ssti/index.html","234b46838758d3971bfaa270ac6b7594"],["/tags/tips/index.html","087a481ab70ad4dab86bb3121badbc20"],["/tags/tty/index.html","65909f307c8782d688807e4d99e3b8ca"],["/tags/tunneling/index.html","9823acf314ca2151ed6f8960a3b91690"],["/tags/webdav/index.html","7c901e996e2a57fac3698b82f1f616e9"],["/tags/windows/index.html","bbec7053c24b612293579821debbc409"],["/tags/winrm/index.html","0c6093c87a00b8d85796053cb7204533"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
