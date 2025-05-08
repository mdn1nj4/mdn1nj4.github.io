/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","925dcb49fd2dead74a577054d8c633a2"],["/archives/2021/09/index.html","4a4eb7817a574fbb441cee805fd06a09"],["/archives/2021/index.html","2cea6c3e4f94476d14851e99b807557c"],["/archives/2022/02/index.html","983cce350e5fc97eb1a04929515683f9"],["/archives/2022/03/index.html","60b8521314a71d627e2c40895ecfceae"],["/archives/2022/04/index.html","74627baaabe71d0df0309e7ae25d15a7"],["/archives/2022/09/index.html","75f04b3e6fc0441cf6249e1a2f260d06"],["/archives/2022/12/index.html","5c2e67601b82e9450d193a3d3a9e3a5c"],["/archives/2022/index.html","8b4dd2e1384e7964ec7ffb8bf8d7a6f1"],["/archives/2023/09/index.html","9e58f469058076f2c2c3ef501e5a0607"],["/archives/2023/index.html","f1d4d55dada4c9895b0d993c5ebf85cf"],["/archives/2025/05/index.html","870d217cd941760c12550b6059b89b11"],["/archives/2025/index.html","c0c4ed3d61d7417cbc0b83c2f176ec24"],["/archives/index.html","757eb9ca4a8909f559b7ec6ab6a3ed8f"],["/archives/page/2/index.html","ba8a251fb6cc0cceeca6e12b4eed5798"],["/categories/CVE/index.html","874119613a2b18d9408ece98057fb0d0"],["/categories/HackTheBox/index.html","798c2964c1f7855f5e23514eae454f29"],["/categories/HackTheBox/page/2/index.html","ee4b2b92c5f85283ed2f4f9291aaf36d"],["/categories/Tips/index.html","ff96d3344fac3046a423193a78fb527d"],["/categories/index.html","b146f12823c5d04f2b38aa4e610ede2c"],["/categories/pwnable-kr/index.html","ad030f978f28543417c32f3875842f64"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f0b712e90793d93bb0e8985b9aa16b6d"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","45e75fe032ffd02af29ac8bdf5d42e81"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","662578cc54001f3827509b2f9427fc6a"],["/tags/CVE-2022-22965/index.html","bd3a2eab631434098c7c04ec23a03d03"],["/tags/Juicy-Potato/index.html","3bf9121de419db76070ce10410d340f0"],["/tags/OSCP/index.html","b159b1e63968a8c485421588c1a0ed9e"],["/tags/SeImpersonatePrivilege/index.html","f90c6c08d3e72bdfcec28983b32cc368"],["/tags/android/index.html","8a0e121fff17131f1aa5aa44a373b9c8"],["/tags/asp/index.html","abd71d9a3d2b2f59bec112a4b9fa27e6"],["/tags/backdrop/index.html","1d40d2b153cee1033d311212e7fff934"],["/tags/binary/index.html","cdcc21c06eea2e3b69aafd6f8974ad47"],["/tags/coldfusion/index.html","5048f4e45a5df11fa445ec4f8e97fbe9"],["/tags/ctf/index.html","532864753201317bf6f1c3c9c8f51f57"],["/tags/cve/index.html","6cfc588734d8e16210fec2de1e462831"],["/tags/docker/index.html","e56b76403bd7748025dbbf56ec3c90b9"],["/tags/exploit/index.html","6a0dfbc889860e16d12e60dea79861b4"],["/tags/fail2ban/index.html","4d9627eb41f0191ca44fca6776ec13e9"],["/tags/fileupload/index.html","53bc946f3e944dce07ed07ad217977a5"],["/tags/git/index.html","719eab298bf2fc567cef5a8c35f0daa8"],["/tags/htb/index.html","ad798669c7bbae7c5aca056431a964ae"],["/tags/iis/index.html","629cfefb5cf1aa23f7d00795ed21b2c5"],["/tags/index.html","b6a093a491c51d8959b549e446ee8843"],["/tags/java/index.html","a24d8ec0697d97d9a5ab19a96ebb3354"],["/tags/lfi/index.html","6ee214411d9b61a6b17cc0b1de4e351f"],["/tags/metasploit/index.html","2b05da7276c3489b4774ebb8e020f444"],["/tags/payloads/index.html","00ccddb6e82257c659d6b6935a6326b4"],["/tags/port-forwarding/index.html","837f12edc5749c9a08f4d827c1bf5a36"],["/tags/port-tunneling/index.html","c3f79796215fe6f08022c41bdfcd093c"],["/tags/powershell/index.html","884fd24efdf2a0f3ebcdcc43fe6b9a35"],["/tags/pwnable-kr/index.html","2b116e6d38de1b74809baec73f650065"],["/tags/rce/index.html","2dcf87f28e594955567dad0f3835981f"],["/tags/regex/index.html","b3fb3b925a0c6b0a92a5c6dcd1e08016"],["/tags/reverse-shell/index.html","b4c0db3f4c501e3c319cd2354fa4279b"],["/tags/reverse/index.html","60ac4f398fe28aff08657279f3dbf6f9"],["/tags/ruby/index.html","15aa032c5ff53ae3d6f4b79e7a35dcd9"],["/tags/shell/index.html","aec59736137a984d97f1f61c9ef40030"],["/tags/smb/index.html","5a2af2b2ed295c69a0661370740baf52"],["/tags/spring-core/index.html","fa555bdf0447c3fc9f266ed986ed6cd0"],["/tags/sql/index.html","2cc4382f4ac3f0a29cf48c3d0c68ee4d"],["/tags/ssti/index.html","3a50fc5dde51e3be864727e01391e96e"],["/tags/sudo/index.html","987d4ca55432b9b88d18155a1b440d76"],["/tags/tips/index.html","d0cfe1b42dab070e5399db2e6efdbe20"],["/tags/tomcat/index.html","1ad48ef6752a8f4ff088b1c939fdc9a9"],["/tags/tty/index.html","41afb9605fc911f2b8c16b9e57a6a5ee"],["/tags/tunneling/index.html","85657713895afd63d484a3cff94da5aa"],["/tags/war/index.html","86e9dff56491da850163017c55f8a34e"],["/tags/web/index.html","c03d080a5849e8fac3afa958736855d3"],["/tags/webdav/index.html","876729f8f090c6c51b230052706ec6bc"],["/tags/windows/index.html","7040d4e81d8fce97a58199a0406191a2"],["/tags/winrm/index.html","d751ca2a536422a57c5bdd0ca2b184de"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
