/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","50f249a683646e6f109123c84e071340"],["/archives/2021/09/index.html","bf8fa514c37c11a76ee05c08ef494dae"],["/archives/2021/index.html","d1b612bdb970b2f88f8aa70be96013ff"],["/archives/2022/02/index.html","40448fd496858cfa842df17214bc306f"],["/archives/2022/03/index.html","bf25368a71a6ab74e5d4ddb9b0b1e8a4"],["/archives/2022/04/index.html","db89babd9ea0651acc0af8f6b30e4774"],["/archives/2022/09/index.html","f9beaa25d990d550397fbbc977ce4553"],["/archives/2022/12/index.html","9f3beff74a611496b57183192ae13948"],["/archives/2022/index.html","9f136ddcb8757639999cd384b3eaf200"],["/archives/2023/09/index.html","f4e9894a7b51474b869c43812f4313e4"],["/archives/2023/index.html","ffee185e520a30364470caafceffe91f"],["/archives/2025/05/index.html","9c7d50a6df6b3e8e38f052de218cda06"],["/archives/2025/index.html","d3941463467af3483af1ac052d039d07"],["/archives/index.html","6d764e752ea6a15169466dbab8fb0774"],["/archives/page/2/index.html","940953b679e618e6a72ea10957d03b60"],["/categories/CVE/index.html","457488c151ec89b5fe110bcf5c882099"],["/categories/HackTheBox/index.html","40c149c2f20e9659fe785f7455325dcd"],["/categories/HackTheBox/page/2/index.html","070466f05be50d3036652477d1227f2e"],["/categories/Tips/index.html","3e239e104f9d1cf17524f913e4adcdc6"],["/categories/index.html","36bf75cd6ba80c869be4f7bcfb1a4532"],["/categories/pwnable-kr/index.html","642a40f36b7a8c02e6a820b3fff1f086"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","82a0349e87de40041a76156720f833a6"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","dabf48ed8bba7918e4f073e2f8f8bc72"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","9b8f64681e76b5098567caae0bf6bafe"],["/tags/CVE-2022-22965/index.html","572a9c40ac3518d0ef4c902925b391f9"],["/tags/Juicy-Potato/index.html","997006001ffcd68b0e5f8662dec68735"],["/tags/OSCP/index.html","2a6c0958da9c4ff65d86290e39ecb368"],["/tags/SeImpersonatePrivilege/index.html","1a5db8968ba2326e84d35171b271aaa2"],["/tags/android/index.html","eecec86844adb63353b25cf1069878cc"],["/tags/asp/index.html","16edef7f1595101c9b1ae56e876c09b6"],["/tags/backdrop/index.html","118d1512132d52ddd15c276a430fb2ab"],["/tags/binary/index.html","a4e36f02f1ee5e31c4d603415e800cb6"],["/tags/coldfusion/index.html","3ea086ac29c033e200c119170387ff46"],["/tags/ctf/index.html","b5511e6acc2d8d7451d5d67f806ad9ed"],["/tags/cve/index.html","04af4be3d063848f8af55a8da74a76fc"],["/tags/docker/index.html","76e64263801165ed73786ed91b0e4187"],["/tags/exploit/index.html","e3a5d6b41c445fc7035c79c3510b699f"],["/tags/fail2ban/index.html","aa56ccdaa6b46fd9fce4604c7c585ceb"],["/tags/fileupload/index.html","9b0797c82e1298698f653fe41cb467af"],["/tags/git/index.html","c5d4dd779244c84de8fcd4ce65894b2e"],["/tags/htb/index.html","e2153aa3cdd0368b662306699cdf2f06"],["/tags/iis/index.html","4b1c53eedb4b1c1b37dab2b4a0d08824"],["/tags/index.html","65d23b96207b3189ec878195276debf2"],["/tags/java/index.html","faf4ce25b85733035874bff74df05d4b"],["/tags/lfi/index.html","40eb4d4473ce325208c532414ba4deb3"],["/tags/metasploit/index.html","5b7eb52cea3bddc94a84b3be7f66f95d"],["/tags/payloads/index.html","f82529131cb49759ed83cddccd014cbf"],["/tags/port-forwarding/index.html","d0e5eec6d95ad009e695a3435ad52ee0"],["/tags/port-tunneling/index.html","e6ec7b26166b1c73ba6fd4a1e7b32431"],["/tags/powershell/index.html","28333e8c58958841b8ad142fa8a22515"],["/tags/pwnable-kr/index.html","313b7a6f596d7cd50ae4a34644a7038d"],["/tags/rce/index.html","b55cfb8a0c4f86019ded3cd4e9883e78"],["/tags/regex/index.html","06ec1a59b1ad2f1c14e4550440ab5784"],["/tags/reverse-shell/index.html","e9166ef1705e13a37e8b7b2db51bd276"],["/tags/reverse/index.html","2289ede6ed83cfd91c8f6f6d0d2288fa"],["/tags/ruby/index.html","760ee17cd76c102bb69e213139bde970"],["/tags/shell/index.html","73fc2306b6dd2215ea1bcd9e5e9d806c"],["/tags/smb/index.html","38f233483cc50e5fd7910d48cfaa93d2"],["/tags/spring-core/index.html","6c71db352c79da3b1e0b740d007d5383"],["/tags/sql/index.html","cf5efa41d914d7b6f9f6bf13416c6dda"],["/tags/ssti/index.html","8a9a92b63cf071f2dd8c16a64b7068e6"],["/tags/sudo/index.html","650dd3a5c5bab6860faddd9606cd3810"],["/tags/tips/index.html","278d2ee0570cc3098d1e5834fb069e74"],["/tags/tomcat/index.html","412896a7c6dc791d38c6da53f42a1068"],["/tags/tty/index.html","b4a7d2ec2a14a28f27be70150b344fbc"],["/tags/tunneling/index.html","74c878b656fe30b3e0544f953b28364c"],["/tags/war/index.html","6c96464f7b42d68ccc78c5b5ced8a9df"],["/tags/web/index.html","e43ab5da91b557da559eec4dffdcfd5e"],["/tags/webdav/index.html","4e1fc5fc4ce353e9705e35fbee087adf"],["/tags/windows/index.html","0f5628cbc3cda4c2d140ac21b38be580"],["/tags/winrm/index.html","8fe9f6fe7f34ea893496d10b73507989"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
