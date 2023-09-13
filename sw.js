/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c779420f5c48a2cb5d00b7db485ce241"],["/CVE/cve-2022-22965-build-and-attack/index.html","d7b8848b6d1e1aeb1eee178378f493fb"],["/about/index.html","3753153e64fcd7a0837b3913cc86ea33"],["/archives/2021/09/index.html","8c9057c0e4ae0baebbc94643eba6bb42"],["/archives/2021/index.html","8f84f82b81a08e15fc23be48f5230668"],["/archives/2022/02/index.html","ae9cbd3ebf7dac4edb176c317592d623"],["/archives/2022/03/index.html","cf5c53a7ea0d51e342ffa2af22a5522e"],["/archives/2022/04/index.html","2a849824420235c987f5a9890e6d62fa"],["/archives/2022/09/index.html","249558e6a7da9a087a573915ecb2d817"],["/archives/2022/12/index.html","3b4cbd951f3e0950cf21f741e4f49fe9"],["/archives/2022/index.html","d5c1009f34e6692eb9401ef0b4a53ac4"],["/archives/2023/09/index.html","143cc793bd0980afddb881487b610e74"],["/archives/2023/index.html","304a2c5a63b8d776c8f584d2fda73300"],["/archives/index.html","4dcd30efd48444cf09cdd091442a0c6a"],["/archives/page/2/index.html","87eed3b4ebf8fb08d748e67fa9be91a1"],["/categories/CVE/index.html","6e816043e1a89565fe6af3d960434dfa"],["/categories/HackTheBox/index.html","ed364eb5961fa840a9094e5e568e6cf1"],["/categories/Tips/index.html","00f16f0846e13c53141b00bf870ee445"],["/categories/index.html","b5a5badef9c7661f90ab9199740fbc2b"],["/categories/pwnable-kr/index.html","e1d16f2e2577a12bc0250941ee4fbad3"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","7a189bb9fbe30e41557ed948a30f14c0"],["/htb/hackthebox-arctic-walkthrough/index.html","da12bf043385aa076064cb615b114005"],["/htb/hackthebox-lame-writeup/index.html","73117cc49279c64dc96917b04743a14e"],["/htb/hackthebox-late-writeup/index.html","18c07634b2f726bb1b138767db1aee89"],["/htb/hackthebox-luanne-writeup/index.html","036b6a2f442daee5a3b9a9ad7117bebb"],["/htb/hackthebox-neonify-writeup/index.html","776c55c0d0a479eb542f4d618a614376"],["/htb/hackthebox-passage-writeup/index.html","9e3f4911d14c17b5a62c93c68dc1e8ed"],["/htb/hackthebox-routerspace-writeup/index.html","7ffb127a8bd52ea477cf14a45b198bf7"],["/htb/hackthebox-timelapse-writeup/index.html","2efbae85d453f295cd0cef1884e0c8b4"],["/htb/hackthebox-trick-writeup/index.html","cb544962a75b89bc73e2104fa325a666"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","03f62df94e0f95ecf91b1f12914c92cc"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","284a2c2c1d7d78e0280913824b2f5ea1"],["/note/setup-docker-for-ctf/index.html","b31df62bfb1ce0328051fc9c9e436f51"],["/note/spawning-tty-shell/index.html","aae18870007313a2d8e4133f2076b8f8"],["/note/tunneling-and-port-forwarding/index.html","3b66d8103b71cb80e8e922bc6b6dc813"],["/page/2/index.html","4c17527e04b4d23d8eba43c5cbdf3f08"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","416388ba6838e6cb5caeb7744a1949db"],["/sw-register.js","cf32437e3e4bac04d342709e4f18ba77"],["/tags/CVE-2022-22965/index.html","6e0ebd17775a2d09d2fdf763d3fb2f8d"],["/tags/Juicy-Potato/index.html","5ecf28daec1adf3f209be0fa71e56cea"],["/tags/RCE/index.html","cf033861527e21fca844ef9ed5d8f352"],["/tags/SeImpersonatePrivilege/index.html","5f9c71f226cb5a03e1f4c1679d022ec4"],["/tags/android/index.html","82b576173bad16d251eb754fed254fd8"],["/tags/binary/index.html","f1dfd2d337dfe8757386dd8bf7721bb5"],["/tags/coldfusion/index.html","5a13c1d79c850352bc00d9e5dd3073e8"],["/tags/ctf/index.html","346439f72e5b77bd962e93c86b22f52e"],["/tags/cve/index.html","829bbe9507678f631cee0d4b72c2eb2c"],["/tags/docker/index.html","82006fd78ebb70d4e9c1c2bbf8afb711"],["/tags/exploit/index.html","bbb9f8f3ec988dbfcaa733af50609f70"],["/tags/fail2ban/index.html","2bf3ad94ca6f7485c5ec67a1075d0a3d"],["/tags/htb/index.html","4d2909f3fdbe6e12f6bb2be33bdb171a"],["/tags/iis/index.html","4403827cddf8453546be0bae0fc79459"],["/tags/index.html","4188c9dd764601885b66efd7cd40f7fc"],["/tags/java/index.html","92c33a6d4e9932f008a84a0e041ed396"],["/tags/lfi/index.html","93142c9e77d7acce3e1030863631a484"],["/tags/metasploit/index.html","f395436bbf85e9aef33f74ae8da38d7e"],["/tags/payloads/index.html","7587ce20b40d09400c0838f6dd005d60"],["/tags/port-forwarding/index.html","1ae520c729dd2bebac13699dadafec98"],["/tags/port-tunneling/index.html","9c1d2b662936de5b82b2f0fd4105fc5d"],["/tags/powershell/index.html","bb54690ae198ea502feab87c4a44b740"],["/tags/pwnable-kr/index.html","3c133b238ec94084dc740a3618703ace"],["/tags/rce/index.html","7dbfbeaead8849a9de479b209550bd8a"],["/tags/regex/index.html","e46b3e1789a539fc37490a7982f6af3b"],["/tags/reverse-shell/index.html","5e19f7d6b8cbe3b8d05f85e8fe1b9490"],["/tags/reverse/index.html","6b970565d660950f4561c9892fb4b2c0"],["/tags/ruby/index.html","b8f091b2df2669fca11b8e659ed67566"],["/tags/shell/index.html","790f7cff7ec59407ad0533c1b434fabc"],["/tags/smb/index.html","5ef4ef1c7bd1de454601eb8221a7b0f2"],["/tags/spring-core/index.html","42922bb758885dd5c1a1e7500e10c829"],["/tags/sql/index.html","dead72bf48b187c2edbede691bd70d92"],["/tags/ssti/index.html","e2b089295a03ceca2816410b457b52e1"],["/tags/tips/index.html","f3724da80201e37189316b8225759186"],["/tags/tty/index.html","85ace06acc2b7125ff7b0a6f755b3df1"],["/tags/tunneling/index.html","81673d3e8264a2b861f24adbe950acb8"],["/tags/webdav/index.html","41c9ab52950760cf63863080f946fca4"],["/tags/windows/index.html","329aa9fcae5290fa9934f62a4a559b2b"],["/tags/winrm/index.html","c567d6ab54ecc1dadd82a8857c10d566"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
