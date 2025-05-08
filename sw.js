/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","ef99f1110cc1e159a0bfd1839fc6d66f"],["/about/index.html","c7940cecb64869011967773ef774f744"],["/archives/2021/09/index.html","3f12975028cfc551ed86703ef8a93bae"],["/archives/2021/index.html","4da5cec8f9db8393955ff60504ab722e"],["/archives/2022/02/index.html","141cec92f32cd3656ea4bd2a207529ce"],["/archives/2022/03/index.html","7bc5f4ad2f40bb0c0068ab8e31719df9"],["/archives/2022/04/index.html","6e4dffecd097f3a5a9a57ac0946198e1"],["/archives/2022/09/index.html","89edd76473e2154952a69e154df59c21"],["/archives/2022/12/index.html","4fe5755cc5ff2a22e76a5b16ec32b807"],["/archives/2022/index.html","67a8bc95644e918e00b1cd91435ec274"],["/archives/2023/09/index.html","953a6c7646dbb0cd724a4ce2159662e0"],["/archives/2023/index.html","bf2029a1718b179976993ef16716e368"],["/archives/2024/05/index.html","d971bb4094ef8c21752f459262a6e42c"],["/archives/2024/index.html","f3ec547aa3d366de01ba9462916636f3"],["/archives/index.html","333998625f0a5876f359f3ed660e5209"],["/archives/page/2/index.html","a6e3294bb8edc711c69f144a97afab07"],["/categories/CVE/index.html","70956942f14b9e1755b45aa7733bbb1b"],["/categories/HackTheBox/index.html","7ddf71b23eac0015c6d31134e26d4cf3"],["/categories/HackTheBox/page/2/index.html","e1995a492ed4cd74428d449b7b03a6da"],["/categories/Tips/index.html","1dc2b21b687b3868efa22647b1a6850a"],["/categories/index.html","5856dc75b7ffc852d3a73d9b7c164961"],["/categories/pwnable-kr/index.html","a089cf2a4f591b457e78c44051214b1f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","1c209d864842b1bf5d86b3c6e3ab32fb"],["/htb/hackthebox-arctic-walkthrough/index.html","af2bbae35cd9651c5b6db95dc20d8356"],["/htb/hackthebox-bounty-walkthrough/index.html","61a8050a1905395eb6fa0afea5c91648"],["/htb/hackthebox-dog-walkthrough/index.html","79256f98df2be460ebd7b558dcaf3e16"],["/htb/hackthebox-jerry-walkthrough/index.html","2301b8eed87ee99eb19a8035f008d8e0"],["/htb/hackthebox-lame-writeup/index.html","157f5d1d66a2b4f1c0e2c689e3f535ce"],["/htb/hackthebox-late-writeup/index.html","de471ace2ea4ff978b4b0b11e9adfea4"],["/htb/hackthebox-luanne-writeup/index.html","00c5e3a46eff6005003071cb175ada4a"],["/htb/hackthebox-neonify-writeup/index.html","c3f45e05c2d9bb073cdbccaf7c459b12"],["/htb/hackthebox-passage-writeup/index.html","122f7a3d13c597ec1889fc1ad91d6bbe"],["/htb/hackthebox-routerspace-writeup/index.html","d5e8b2a161201f09e7ef8f6bb1ac1671"],["/htb/hackthebox-timelapse-writeup/index.html","d1c850c3e52bc7d819fb2bf478fa12cf"],["/htb/hackthebox-trick-writeup/index.html","44e321a6e40cd69f42ca7f0ca71b8bae"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","cc644b210888fefa6be2eb35734d8e33"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","61885a7394da603ede14ef1cd365f700"],["/note/setup-docker-for-ctf/index.html","9f94905d27bb798e294d4bf5fc5d1511"],["/note/spawning-tty-shell/index.html","1400ce974293545dfd14a1b75de10427"],["/note/tunneling-and-port-forwarding/index.html","c1fc1e4f798040c12603b936cb28d312"],["/page/2/index.html","2dba3b3c19a51f2628e51d0f63855f96"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","f09fb888dd5f819ebe68481aa786d99f"],["/sw-register.js","297f8d997be6e06aba7dac98f581d489"],["/tags/CVE-2022-22965/index.html","297eb5a448c324ff78a99d05dbea023b"],["/tags/Juicy-Potato/index.html","915420dd04a5c9c5f7ba89e42db68905"],["/tags/OSCP/index.html","0972b3aad6fc87478a81c1bab714bae9"],["/tags/SeImpersonatePrivilege/index.html","c09f6ecb749c5371e9f1ce59ba979570"],["/tags/android/index.html","755fc6439ac41f18efd0d8911dd9c877"],["/tags/asp/index.html","2b347b373c2437287697edaa4a81a60b"],["/tags/backdrop/index.html","70515ef117d42e0ba12e195dc1a6e0d2"],["/tags/binary/index.html","0249af1b62722945fb0d28ffd2d80680"],["/tags/coldfusion/index.html","3914b13ee5522d8e508373a19cdfd468"],["/tags/ctf/index.html","3563e1cc0616afe05d70350f8f257d6f"],["/tags/cve/index.html","520772d3df397f364207de0b270e2907"],["/tags/docker/index.html","bc70380695f008546581149527f48d6c"],["/tags/exploit/index.html","5f9326bb3471373921cdeb3f4fedf1f4"],["/tags/fail2ban/index.html","d349dde5f1c0908b5c5b438fb1b79b45"],["/tags/fileupload/index.html","e330230e09db99c243882f8f8a463377"],["/tags/git/index.html","0e346b7ac13fbf9133089c881910f180"],["/tags/htb/index.html","07d2830766b4703462e8c9c7d2fe3fa4"],["/tags/iis/index.html","ff34b118c28866413edb685eac7c4c39"],["/tags/index.html","d0f866202b920494b14b9086589f609b"],["/tags/java/index.html","44c8a0ea010485f179a3ce7ca87d54d2"],["/tags/lfi/index.html","053594d377e91741f120914d2d9808c9"],["/tags/metasploit/index.html","848d902bed1272ce7677233d5f27763d"],["/tags/payloads/index.html","c14a882ca4f0f4d1aa2f52d63a4b813e"],["/tags/port-forwarding/index.html","51fb5a37030690a7dfa051347dbec1bb"],["/tags/port-tunneling/index.html","9a4776f0f5b83c62c0075acce096536e"],["/tags/powershell/index.html","9b20cf15209941fac0c6a91c5a1723d2"],["/tags/pwnable-kr/index.html","67b1cee5950e7886c0305fa9a569fa3f"],["/tags/rce/index.html","dd87595174de21dc0db7053350002199"],["/tags/regex/index.html","06b17087ce611886a58ee74bb024d92c"],["/tags/reverse-shell/index.html","8286c1eae227858048f333c8f940ca7f"],["/tags/reverse/index.html","470cc42c4a8278b9bbdcc9a9f3911cb2"],["/tags/ruby/index.html","829fdbf8998b5d32374986e53f5b7fac"],["/tags/shell/index.html","88c49a8cd35f16cf32f0a97d5b87b848"],["/tags/smb/index.html","d3ef246bb551666f7f0a20980b810b71"],["/tags/spring-core/index.html","ba66ec570144d41c8dc0e9937816a3d4"],["/tags/sql/index.html","ada18a4e686c849a709880d324811648"],["/tags/ssti/index.html","d71a488cd9b462fa1a7221eb0c4cbd69"],["/tags/sudo/index.html","9bea7570dedfc15d4ef81f4311e7f972"],["/tags/tips/index.html","c865413fe5fc60fc14c24c799268ad9a"],["/tags/tomcat/index.html","a01fb8c13df99fe46c3ea8b5b4e321f5"],["/tags/tty/index.html","1f7f94319a408b59791878d29801a690"],["/tags/tunneling/index.html","83d6746166f651b84270dc0fc8a9cf9a"],["/tags/war/index.html","8cdcea93a67bbbd92cdf79ac3ddd0ab3"],["/tags/web/index.html","2ea77e9b3cab1ad0205606ffcf00848a"],["/tags/webdav/index.html","44b008f9d75b9c8ab36932291167a617"],["/tags/windows/index.html","604a97cd7e84dd8995b59e7bbdca5415"],["/tags/winrm/index.html","aad88a5b0a1d12dca21855f0dc285d7f"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
