/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d67dde57c63ba4759bee26f57afbeb3"],["/CVE/cve-2022-22965-build-and-attack/index.html","3864137ff0ea5429a20b2e0efdbb317e"],["/about/index.html","7de25efacc7a7dd3aa61654219b51673"],["/archives/2021/09/index.html","8a30b36ff63bea1a84de3720e1fe6c81"],["/archives/2021/index.html","f6a9af901799105142bdf29ccd316a78"],["/archives/2022/02/index.html","caf8cf22ea6100935d722c1207ed8dd0"],["/archives/2022/03/index.html","3c202e3a68dc1c8ffd3c4069676a23cf"],["/archives/2022/04/index.html","3619a2ce9c9e91a62247877adb5f97d2"],["/archives/2022/09/index.html","85ae96633104c7a5de1fb0d78f74b46b"],["/archives/2022/12/index.html","6396f0b9412f64a10233e32f61dc4f62"],["/archives/2022/index.html","49819e9c74ebdf0a078d64115a9deed3"],["/archives/2023/09/index.html","6f3610e10b2a790c802c511e18ea2f38"],["/archives/2023/index.html","0598d69478d647029af405b05b5add19"],["/archives/2025/05/index.html","4a5e5d6c45bb958e25e4bed6ff7c0e1b"],["/archives/2025/index.html","9a98873af559a807fda218f912a9269e"],["/archives/index.html","4db52ce13bcab36b12755fb88d4aeb04"],["/archives/page/2/index.html","532dddc8d18877e61e10585dd7415334"],["/categories/CVE/index.html","57c53c001f719f1b2498905ee77e7e13"],["/categories/HackTheBox/index.html","18b27cd219d2f3e2434025c915e47cab"],["/categories/HackTheBox/page/2/index.html","378b5d3c3022deb4da713635ad902c19"],["/categories/Tips/index.html","00aa3c5bd06487b9d30e3a70510d7352"],["/categories/index.html","410bd6f0302f67f214b7e216bc29bb06"],["/categories/pwnable-kr/index.html","78a71828471b1b703ad3080cc0c2aa77"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d291810e0ff29f90df0f5586ae935521"],["/htb/hackthebox-arctic-walkthrough/index.html","66af740920432a281f70cea224867f6f"],["/htb/hackthebox-bounty-walkthrough/index.html","b8fd864d48789dbf4bdb628330c3ea3f"],["/htb/hackthebox-dog-walkthrough/index.html","050218f9a1539fef2ef9bc8b0058c956"],["/htb/hackthebox-jerry-walkthrough/index.html","31d90301c8bc8aa03fdfe29317e4c6ca"],["/htb/hackthebox-lame-writeup/index.html","2669780e2bf7b0b5d686b63f1bc0afab"],["/htb/hackthebox-late-writeup/index.html","b6a5ae32b8b073ee42baaaf51f2829b3"],["/htb/hackthebox-luanne-writeup/index.html","760bcd2566a3f04d7801f211a9df0648"],["/htb/hackthebox-neonify-writeup/index.html","f4d3487f52da45e42d8a6afd14853ab8"],["/htb/hackthebox-nocturnal-walkthrough/index.html","3cf32b338a441c3f4a83d41760ebbb1a"],["/htb/hackthebox-passage-writeup/index.html","bc13d2ebb7e3dd8f9481ae28307985c7"],["/htb/hackthebox-routerspace-writeup/index.html","1e6e70f0ffef21ca9d7e573c4209bff1"],["/htb/hackthebox-timelapse-writeup/index.html","1674dc0f8123f6dafc16096af0b61e13"],["/htb/hackthebox-trick-writeup/index.html","ed926a3aef84fbc6e2b79d5c99f6af14"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","aee7b20cb8f59466956994ca15cbe6b7"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","633d13cef27368d8feca353039ff3d86"],["/note/setup-docker-for-ctf/index.html","ff39559694c72d2dcb2ae5eca757e74e"],["/note/spawning-tty-shell/index.html","06bc806a69e26e6c9f7fc5cec517300b"],["/note/tunneling-and-port-forwarding/index.html","93c175814d04382a811c38eca55db47d"],["/page/2/index.html","1de9ee0067e43efdbdff36fc173e27ed"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","5a7ace9917057fb717bf701f6bbcddef"],["/sw-register.js","a3520b98b5d760e14713b6b92dd4f4bb"],["/tags/CVE-2022-22965/index.html","9164eca0bc0afcf794980e3c59af13a8"],["/tags/Juicy-Potato/index.html","09082f00b2b2b8cf701788ea09038114"],["/tags/OSCP/index.html","9333b2bc96ee7d84b2cedd8f39620cd5"],["/tags/RCE/index.html","71f68e418643bcfa1fe3e49f11be6786"],["/tags/SeImpersonatePrivilege/index.html","ed45de1308b7b4ca1eb5a5af80be9d99"],["/tags/android/index.html","11cc9c6e43c5554f3301bf3a19a26d46"],["/tags/asp/index.html","2b64f312c848d45e1ae718ecf41f79dd"],["/tags/backdrop/index.html","c6fcd6d189c0310645888413f6767689"],["/tags/binary/index.html","6d887e23ee8d62a1115ea42b5c185576"],["/tags/coldfusion/index.html","b56e492367036693a2bd398d38810808"],["/tags/ctf/index.html","d0b62d9c96bc2098e405e472566dcb24"],["/tags/cve/index.html","df6ea820dad2d67c1083ed753f555a50"],["/tags/docker/index.html","f4fefc55d6f2e9d635db39e863cb2ab1"],["/tags/exploit/index.html","45f2b6ac7a11133d0761c5a3c2dc153c"],["/tags/fail2ban/index.html","9eaee9d4d52b0cce23b45e34f9e31fb0"],["/tags/fileupload/index.html","32999b419bbab4c7f041f7f86673290e"],["/tags/git/index.html","6bb16bca857ab797f9a017b052306212"],["/tags/htb/index.html","565fe9348dd5c2b9693cef612c47dbf5"],["/tags/idor/index.html","33f8ec7add95a58cf4fba70ceb4457a9"],["/tags/iis/index.html","4154c0ffb470808b7ba393092b69eb9b"],["/tags/index.html","36ba4422709575a37bafdf77d4bc9c58"],["/tags/injection/index.html","973bb5a6f2d8922ae92cd86207f3d7f5"],["/tags/java/index.html","acdfa117ccb7fa2d535ce3be3947fd57"],["/tags/lfi/index.html","a169c0fce29f77c9de0719410b9d31f5"],["/tags/metasploit/index.html","f16aefea4fabda4f818c313748e6585b"],["/tags/payloads/index.html","a11e82132ccc580745eafc47a34b098d"],["/tags/port-forwarding/index.html","14280fd3dffe456cc2d6a103794dcc60"],["/tags/port-tunneling/index.html","c5aa90deb61bbef0b93f73c9e4093503"],["/tags/powershell/index.html","2d6ff149415e499d3826423be6b0930c"],["/tags/pwnable-kr/index.html","5c6ca2f0521e513c62b6c00b75a2abff"],["/tags/regex/index.html","2a59f5547ab46547a2efb656daefeb4e"],["/tags/reverse-shell/index.html","57b26936f709b593f92b876319073a25"],["/tags/reverse/index.html","6948566adcc999d0bf495deda6d1afa6"],["/tags/ruby/index.html","af5ef93d0c7b077c229a0a5461f23d4f"],["/tags/shell/index.html","4682af6604fffc862546f241ac0326cd"],["/tags/smb/index.html","eec908fab9b19b1a30290fd93bed94fb"],["/tags/spring-core/index.html","09e0c9a276356da182bf7f6f14221b92"],["/tags/sql/index.html","ca5ee3ae84ec6b3e8d118659c25a5f0b"],["/tags/ssti/index.html","de38f98d47627b11f94f192c0ef7c5ce"],["/tags/sudo/index.html","510d6d430178c6a3b3cfd8a831748e25"],["/tags/tips/index.html","ee536c3b733809bd42bbd265c21afe02"],["/tags/tomcat/index.html","7d93e7f1c0df12a087de3942a03fc918"],["/tags/tty/index.html","c9bd353b0bf02f023d6082cfd5d32d3d"],["/tags/tunneling/index.html","b1dc2c7398d73f2fe6e5a222b1eeb69c"],["/tags/war/index.html","b930ca3d70f3c2928aa6bba975fb6999"],["/tags/web/index.html","cc57d9eacab8cb5d0f091615fe106805"],["/tags/webdav/index.html","fd0b7515751236ac04292092262077d0"],["/tags/windows/index.html","2db3b55864c5897910375c6c7a44a90e"],["/tags/winrm/index.html","4cf3e18da520435d5262914a79e38c2e"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
