/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","ea604d5a15125814decf647b61d19688"],["/archives/2021/09/index.html","ca355090799ebae1203eef42e4b5075b"],["/archives/2021/index.html","8d6a225814a0635d713736943e57dfc5"],["/archives/2022/02/index.html","dd0920fa9b1843c4e4bcec9f48939bac"],["/archives/2022/03/index.html","549b33cbb6be265cdf2bf021b640d9e8"],["/archives/2022/04/index.html","bc4a92be23355512303f6073929b3466"],["/archives/2022/09/index.html","08e97f1e80ebefecabb6adc5eb3bc711"],["/archives/2022/12/index.html","70830967143091ed60f912570e1c1faa"],["/archives/2022/index.html","656c601e07d62b497988d5320decd92d"],["/archives/2023/09/index.html","fbb141e1681f1bfab5844402e120b363"],["/archives/2023/index.html","7fd7ccb3a319153316f7f8ec2b8817f6"],["/archives/2025/05/index.html","1b0a83196ba3b992a38faab0c4fb3e58"],["/archives/2025/index.html","a42bee27684d334c980aee3450fa1c10"],["/archives/index.html","ac80f41b62c7a57e58a651fa2e1d0c67"],["/archives/page/2/index.html","27951c3c95b5ec13eb65f858a7334c64"],["/archives/page/3/index.html","a6eb3803bc47a7f407ef350c90f971a4"],["/categories/CVE/index.html","3c52c003f6750fde515c75ddd47b84ce"],["/categories/HackTheBox/index.html","0018eca8e77ffc39365bafc8e055af28"],["/categories/HackTheBox/page/2/index.html","420b18f91529cf6b61addb1f2eb78aab"],["/categories/Tips/index.html","d0f77b502f4014fc5eb14a7e28278ccd"],["/categories/index.html","bae0bc11a5c1f50fd751e92c52160f13"],["/categories/pwnable-kr/index.html","3f35873a67edfca180bf4988cbf82fa8"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-nocturnal-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-titanic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-underpass-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","183f2e33cc0326799eb392b9dbe6e622"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","82e795f148a940099e3dfaf413afe4d4"],["/page/3/index.html","759e86383e331058f7f2da43e75ce19e"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","ef584bcad30bd3816aa7a6d9abc2f9cf"],["/tags/CVE-2022-22965/index.html","ba082c5461eb9943993dcbb9ce95d229"],["/tags/Juicy-Potato/index.html","769c887b3e85c2b163e2d05e7cda0c78"],["/tags/OSCP/index.html","c9b717125e7f086b6a7bf8e1ba8558a2"],["/tags/SeImpersonatePrivilege/index.html","78467ecd9e83bb5280cc18a733c61db1"],["/tags/android/index.html","2478e41dc1239cfe85b74e1ce7889bda"],["/tags/asp/index.html","d5d6021bb488ff2c537a9dee8a85c316"],["/tags/backdrop/index.html","28cbcfd18ff62f5c5452bc4dfa58158c"],["/tags/binary/index.html","08141214d8e56ee4e922ac3b74b9492a"],["/tags/coldfusion/index.html","0fb4387abc57b64e6f0eb4fc824c2935"],["/tags/ctf/index.html","3e5c9a0b79df9d743c29b9d8c9e92205"],["/tags/cve/index.html","4116580c171b932ae90b19e4d13c3e99"],["/tags/daloRADIUS/index.html","db087c5e05702fb31d87b202199cb8cc"],["/tags/docker/index.html","c8e987e1bcb1de32da4360a3e5132904"],["/tags/exploit/index.html","2f0d565ff797281202fbe675d85434a2"],["/tags/fail2ban/index.html","809a9be35a892bcbd939ea59173ae35a"],["/tags/fileupload/index.html","2e08f73fee481cfe4097ea95e0c0fdd6"],["/tags/git/index.html","e15f96ec3723e2e26763d335feda166f"],["/tags/gitea/index.html","61ed5f484c61935657b1068f3d12f1b3"],["/tags/htb/index.html","a6315de3fbe7e1cc04f6e193d0fe7181"],["/tags/idor/index.html","79c7be5a8e1061b2174820cbe2d20fac"],["/tags/iis/index.html","f13ca7080b364bbb4aa818e47f3e9118"],["/tags/image/index.html","a5bc53f30cfdb446524b026bb0d97cfb"],["/tags/index.html","651f70f5ad489ec4b617792d1b11f41e"],["/tags/injection/index.html","ae167cd9aa55c7e47ad5c1e77e8b65ed"],["/tags/java/index.html","5767171bfade367e361bf1bfef90ccae"],["/tags/lfi/index.html","b27b41beb4d744cab1e57503e1a65129"],["/tags/metasploit/index.html","cbd3d87c19df7e9a884117d15af7c161"],["/tags/mosh/index.html","76d220605e2275480a1fa17229f80c84"],["/tags/payloads/index.html","e7e56c11e85f6a16d278558f9913f99a"],["/tags/port-forwarding/index.html","a40daabb76fd4044d3c303646467738f"],["/tags/port-tunneling/index.html","860d54fb2456c9d532cc19cb805a95ba"],["/tags/powershell/index.html","dc2a5155d6a1ae7c982117a975292557"],["/tags/pwnable-kr/index.html","4bd967ae2b962b5616d7166c99ed700d"],["/tags/rce/index.html","a16107383dfdcea389665e2c7d643c8e"],["/tags/regex/index.html","9e0fc5cbf426c511e46e429b2aeaf552"],["/tags/reverse-shell/index.html","71dfca4966c78db3f6fdb14a1fd34e26"],["/tags/reverse/index.html","962c827f3a63f149db01ab321843d448"],["/tags/ruby/index.html","597c59c18954c96a12b874e1f7926448"],["/tags/shell/index.html","2a66779444ddb531056679e6db87c844"],["/tags/smb/index.html","e71c95b29a30f86eaebea1021b77dca9"],["/tags/snmp/index.html","d4cdd3664934f1f16f6adcb313bcda4f"],["/tags/spring-core/index.html","5623e83690915269e4d2cf2150fbff34"],["/tags/sql/index.html","15653d9072b55f5c5ae7a522f42fcbc0"],["/tags/ssti/index.html","5bb58d2592fbe7f4b0101debe98bfd83"],["/tags/sudo/index.html","cbd793d562ab11a8cff83d436b9a1d09"],["/tags/tips/index.html","2d8526c37000d483778cde3a35c7d1b3"],["/tags/tomcat/index.html","e9a32177f0e5c7ad2f394fd45d356208"],["/tags/tty/index.html","8e612d2325bdc3eada629fe53aa9fc43"],["/tags/tunneling/index.html","f52b8043cb5771cfb13bd73cb40391cd"],["/tags/war/index.html","7651550b8721a8172c1948b09074b618"],["/tags/web/index.html","c34754e381cbec0d87002b5c98586dd0"],["/tags/webdav/index.html","b495a38e9310578491c8795ef4579ae3"],["/tags/windows/index.html","49a601dd34ecd318d96977c2ae2c3696"],["/tags/winrm/index.html","dd010d85164240a2c0a7da4d1a7fbf9e"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
