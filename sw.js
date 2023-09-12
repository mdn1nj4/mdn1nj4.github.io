/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","64de1ba0f79514fa943d26b4233e5185"],["/CVE/cve-2022-22965-build-and-attack/index.html","d5dc0980390aae5dbd1a1beda77d709a"],["/about/index.html","3fbadc954345386413f960b9c25ed966"],["/archives/2021/09/index.html","852db1226a3b4f10d07ff5f7b5cfd9d8"],["/archives/2021/index.html","4b03b78cddad4e37c88ed7db6e204e51"],["/archives/2022/02/index.html","bb94ff49bd2758ba0a1927f0d08a4d8d"],["/archives/2022/03/index.html","6caa340d33da0b2eea8374d4a98b4150"],["/archives/2022/04/index.html","88e81b580ea994e9a35b4eca9acb1dc8"],["/archives/2022/09/index.html","4e497192c0c5d400ad2a61e156a889eb"],["/archives/2022/12/index.html","61797cf2c876e24831a3b1f603b2550a"],["/archives/2022/index.html","7986d4dc8d3d5a86a8553e88c7fc138a"],["/archives/2023/09/index.html","42e3b5dd8d37b355081d8faabf67a00c"],["/archives/2023/index.html","043ca50012364cb7c864235210bc2270"],["/archives/index.html","b867df69af23be53fb38554f7a64314d"],["/archives/page/2/index.html","e9f7265b1e33516391917ab1798069c0"],["/categories/CVE/index.html","43cb122c48da1eb5f205b2d645a6198a"],["/categories/HackTheBox/index.html","1d2fd28d415bf434553da41847dd6a2f"],["/categories/Tips/index.html","9199604c940b2ff723d38b5b99e4eff2"],["/categories/index.html","bb18e669a6e94c84af67d2d0ebce3ae7"],["/categories/pwnable-kr/index.html","1d6de73da268aeee0c54d85322c293df"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","4a406ec3d54c04163727af8d82c59285"],["/htb/hackthebox-lame-writeup/index.html","9d05ae14c7fc449984e53a0ac558732c"],["/htb/hackthebox-late-writeup/index.html","0162a27d47b88dc07b11beabfabab10c"],["/htb/hackthebox-luanne-writeup/index.html","f4f3af0d429287a360c0240861495479"],["/htb/hackthebox-neonify-writeup/index.html","5f00089ef40bff5ab0e7ed0627f75683"],["/htb/hackthebox-passage-writeup/index.html","acb82a27d4924032a24f3ee00b914625"],["/htb/hackthebox-routerspace-writeup/index.html","59fdfec96434ec07092ff827bd63037a"],["/htb/hackthebox-timelapse-writeup/index.html","7e8529cb516718344aab2deb1075ba65"],["/htb/hackthebox-trick-writeup/index.html","a4ae4784e33a9fba686b8e4c40a65bf8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9419e0bb027e1843038f9912eb896517"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","3303761fa2b1943f70a144e883c9d546"],["/note/setup-docker-for-ctf/index.html","d2447ce027a4db1d5b6ee24515afc268"],["/note/spawning-tty-shell/index.html","b17b86c18162ec7e3cf8e5aac17e526e"],["/note/tunneling-and-port-forwarding/index.html","7983c6181f7a509cc3e70bd6aa828c56"],["/page/2/index.html","152bba3be50e12792b69677562c955dc"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","3c91ee063a157a09a77fad880a067d70"],["/sw-register.js","72a8f9fda4bafe7abe3f483ebfa8a192"],["/tags/CVE-2022-22965/index.html","8ee040e30ca49c714d60d4f8cb81d418"],["/tags/android/index.html","bcb56d657770bad08b9d70e04ee8cc08"],["/tags/binary/index.html","1ad132fde32e335522c443872774e9a5"],["/tags/ctf/index.html","6dd8f9e13e003b9c4754bece5deca01c"],["/tags/cve/index.html","2f1c6da017ebca0758eb061c49d50d68"],["/tags/docker/index.html","2179bc80d4e56a4b8d91534229be2a59"],["/tags/exploit/index.html","67272889b2085e13ef836562ead546c0"],["/tags/fail2ban/index.html","d2a2b7a5e91ec84acafb53905af52aa2"],["/tags/htb/index.html","b3747549c6770a27047400c0b0ba9f55"],["/tags/iis/index.html","641b49189dd805bfa0e7fe8ab5bf2bd9"],["/tags/index.html","dd3495cc04751c7039acf3692b6bfc33"],["/tags/java/index.html","1ae434b08a77d49e807ccec3e4fee840"],["/tags/lfi/index.html","8055901e9c32dec0cf92283aff0a224a"],["/tags/metasploit/index.html","65dfda5fb8e953837e0cbf5c5f12fa8f"],["/tags/payloads/index.html","797b72d6cd1d5743bf067beea26a3b09"],["/tags/port-forwarding/index.html","85cd6eac77a494b27ae4aaba974c2e0c"],["/tags/port-tunneling/index.html","8d10e68ca846ed4ab7235217648c439d"],["/tags/powershell/index.html","7236aa14936dfe26e2db6aebd4d48939"],["/tags/pwnable-kr/index.html","872622260b0df9c5a5b53a2acbc85682"],["/tags/rce/index.html","8a4f38a6a1fa485b8f621097587bc3cd"],["/tags/regex/index.html","4e00b70c48bf8dfab21bba19ca39c8c7"],["/tags/reverse-shell/index.html","79d06e74b9bc092015b65dda2e222f14"],["/tags/reverse/index.html","059e01f75226d991adc7d10094b7486a"],["/tags/ruby/index.html","213c2726a672b9cedb38c8d60700ad0f"],["/tags/shell/index.html","8a77673d4fca2605c7e403bd22f1cd4d"],["/tags/smb/index.html","3fa9aae7a0c173fab92aac9a1e2d7d3a"],["/tags/spring-core/index.html","5306d29007bb384340908f1c7893e24e"],["/tags/sql/index.html","4e2024bff9d8283d47ffc6a73c4a5adc"],["/tags/ssti/index.html","6b9de4e059cfeafbb0d2596d9d4fbed5"],["/tags/tips/index.html","e28a9a558b01d923f40224159ae42eac"],["/tags/tty/index.html","d3161703405dc689d46ceb77b496d66d"],["/tags/tunneling/index.html","4bcb267bd0e4ed278852012c032d796e"],["/tags/webdav/index.html","874179c3b8491fcbe47db67f0674276a"],["/tags/windows/index.html","e32338ddc9ff3ab3d92712e3173b42a9"],["/tags/winrm/index.html","0ce7dbe66a978e299c2f6c86b8ca09e1"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
