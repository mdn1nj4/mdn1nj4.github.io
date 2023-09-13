/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bf3b6ecc5f5f563fec8973abe23ed3d0"],["/CVE/cve-2022-22965-build-and-attack/index.html","cbe02e01f130f285a93312f69bd244ac"],["/about/index.html","03e166a1889e045901919c1d1c5ff76f"],["/archives/2021/09/index.html","3dc95240bdf7c73d57befcb0732d4624"],["/archives/2021/index.html","9eb6a10aab9772ee7c8b539926257e9e"],["/archives/2022/02/index.html","033b7f6b3b93aa61e13cccdc1d3a3ac4"],["/archives/2022/03/index.html","400d1691a6024e1da8ef13193b144fd9"],["/archives/2022/04/index.html","17c762b0432b88aa906f282740ec59d7"],["/archives/2022/09/index.html","a87ffeaa52d727728394df81e47a898e"],["/archives/2022/12/index.html","0cd8e3bec12a123a1d8b1603dc8b7736"],["/archives/2022/index.html","e724689e42924ade4855dfc8da3e79a3"],["/archives/2023/09/index.html","27bf5afae7d5449c645fc26276f9915e"],["/archives/2023/index.html","a3482ec88b6df4b5cd3141c9c887505e"],["/archives/index.html","0805db7b04af96235737a262d245d292"],["/archives/page/2/index.html","9d052679eb126c885cec7f21e8868118"],["/categories/CVE/index.html","7582d3cf7bc848c93856a541335df939"],["/categories/HackTheBox/index.html","11d882eb6507cff841dd4a3a37369aa6"],["/categories/HackTheBox/page/2/index.html","e700ea28b0f9b14b269b4cc1718bc260"],["/categories/Tips/index.html","5189572c13780ce5885afc8ed227a4e4"],["/categories/index.html","7bf5f08f4a2f7603f023232c5b868402"],["/categories/pwnable-kr/index.html","53609aed37be95d490746c6fec93059c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","58162237fbd060851f176dcb5f93b7de"],["/htb/hackthebox-arctic-walkthrough/index.html","3f6646abb9faef2ee4640f4af6325c37"],["/htb/hackthebox-bounty-walkthrough/index.html","43982c3929dd014c4284ff39fd13f42c"],["/htb/hackthebox-jerry-walkthrough/index.html","833784968399f174007554e797b83277"],["/htb/hackthebox-lame-writeup/index.html","6b24c3b08da5486720440a982e302a9f"],["/htb/hackthebox-late-writeup/index.html","74649de5374a3f01cfcd78ac3470dad0"],["/htb/hackthebox-luanne-writeup/index.html","a08989ff27469d7a2e343665bc4e041f"],["/htb/hackthebox-neonify-writeup/index.html","f49fcda16c77ebe21c6ff9fd59499a2e"],["/htb/hackthebox-passage-writeup/index.html","fa8d26c5c4e5e775c3c9e0e362fa3f67"],["/htb/hackthebox-routerspace-writeup/index.html","fb3e223318ae5d03a2a2bab8faa77c6a"],["/htb/hackthebox-timelapse-writeup/index.html","0fbb86c9039903946dba4306807ef0f6"],["/htb/hackthebox-trick-writeup/index.html","535ccf3a4a0c2cd6fbdf96725b3b5b18"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2537b9c13cdcd7c317727b877bef0c29"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","034904a26c6f6249ed16cf9402613b8b"],["/note/setup-docker-for-ctf/index.html","49d724b8f0abe0d0bc925e1b089c48ea"],["/note/spawning-tty-shell/index.html","159e4566f7a63ec68acfe465a7749b8d"],["/note/tunneling-and-port-forwarding/index.html","21b786a0e3449b78b40403fee19f1838"],["/page/2/index.html","828441286784c9eaca4aadb752a22473"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","5dcf16749b9ea9c032e7d4778b85a7de"],["/sw-register.js","f495d9d5891c5ec29098a582f9a72bf1"],["/tags/CVE-2022-22965/index.html","d62ac015ecc57e4ef36667f377a8f4b5"],["/tags/Juicy-Potato/index.html","b97620d503ef269481a6b0e30a87a7a2"],["/tags/OSCP/index.html","123079a638229a8069f93ac9e4940963"],["/tags/RCE/index.html","a5cfeb499e7b71a88a8a98927bf4c9bc"],["/tags/SeImpersonatePrivilege/index.html","568d329a92bb655b92182933f0aabdbf"],["/tags/android/index.html","c01acaec3b153dfb6586a3bbd52988d8"],["/tags/asp/index.html","63a7ffa8996ca6a61ae07df28e0a56c4"],["/tags/binary/index.html","9c2aca41d54365ce7e3eba2911b9e510"],["/tags/coldfusion/index.html","3f7e1dfb916a00ca0149f002bdf58f0a"],["/tags/ctf/index.html","7b549130b0529a793795c829df320dc0"],["/tags/cve/index.html","370e0c52e1596a999a25ffae1e965994"],["/tags/docker/index.html","5f6150c84dd15e3f467afce3027c1cf4"],["/tags/exploit/index.html","0fc4ad6c769bd771538beb07c85ba287"],["/tags/fail2ban/index.html","5842a5c13c3ddc20f15acd187652c863"],["/tags/fileupload/index.html","59b1d511979103297df50d78594f6b32"],["/tags/htb/index.html","80f50d471f5e528027d3fcf71ada99d2"],["/tags/iis/index.html","4f331f09f6d4c028abbc02e80135843a"],["/tags/index.html","507772c565c74ff668cebd24c134e8e8"],["/tags/java/index.html","5c549439488967c09b5403074fc60bf4"],["/tags/lfi/index.html","94cbce6cb66783f8586214add08dcd7b"],["/tags/metasploit/index.html","fb63824fac0c02ebd7ab3cd82f1b3d21"],["/tags/payloads/index.html","15a39bc2c2ecfbce768ab3544b5a9b73"],["/tags/port-forwarding/index.html","01de2e723834248c25ff065fd58871f0"],["/tags/port-tunneling/index.html","04d016d5ba4efc0bd6d5e0bcfdbb8d3f"],["/tags/powershell/index.html","31f654aeeccf137841c654200a50cfa5"],["/tags/pwnable-kr/index.html","0ed3463dc71c8296d6d48fef3cb9fded"],["/tags/rce/index.html","d11e9ab8e4283a0aa870a43a9a2bf6b4"],["/tags/regex/index.html","5086eeb77634b393528d95c3c032f287"],["/tags/reverse-shell/index.html","7fffc65f546ddf264e447e9adf2c952e"],["/tags/reverse/index.html","77d3a922be1ffc01e24b64b863ea9b65"],["/tags/ruby/index.html","eadc72dbe633eabf03fd30a052c13ebd"],["/tags/shell/index.html","7e444745109bcbc09b7fa33494e54a50"],["/tags/smb/index.html","e0b40fac4e6622247d8eb96207db70a5"],["/tags/spring-core/index.html","f9f18b93ef2afb4c927f538c8acbbe0a"],["/tags/sql/index.html","a044c5684e57a3d3288833395b8e0515"],["/tags/ssti/index.html","f99f6f4f535b0381b5a66862181a2dd9"],["/tags/tips/index.html","c415f36187285c47587abfc770efc0d2"],["/tags/tomcat/index.html","ecf3913657d3534cf2d6b832e51a7ae3"],["/tags/tty/index.html","5c65db91a81320be1b23dd3cf964aee8"],["/tags/tunneling/index.html","f5b1b3fd283a78c8deeba02d8c931054"],["/tags/war/index.html","4404fa3001c548c5ef84b9e8b1c1b504"],["/tags/webdav/index.html","7838d43b5afc16301a77d54a5480242e"],["/tags/windows/index.html","79ac37681b8d014cb7d1949bb1bcce5b"],["/tags/winrm/index.html","eef11d40a4f33b9c04b3c222f65eeb9c"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
