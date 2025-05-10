/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20750ec911975635308d1dcdebdf0949"],["/CVE/cve-2022-22965-build-and-attack/index.html","32f228655397d0a08ce1528c63128edf"],["/about/index.html","2a1be8e121b27f5df41908764db87c11"],["/archives/2021/09/index.html","c04925d8427702991075e31f5513c540"],["/archives/2021/index.html","7c6b9dd2fb3351a5d9b29e118307b9e1"],["/archives/2022/02/index.html","fccf570f380139d474904810beabfaf5"],["/archives/2022/03/index.html","5d19e2ee4d0afee631b32cde1d4696ad"],["/archives/2022/04/index.html","6c1330533aeb091ee5501fcf0f124c1b"],["/archives/2022/09/index.html","b06aae57a09b0505f65a522260039013"],["/archives/2022/12/index.html","c7aac2297e0ad150a74a7133b198a1a3"],["/archives/2022/index.html","6701882492572301fa83cfb16c1ef4ac"],["/archives/2023/09/index.html","54e8f58a3a20a32d0dffaa526f490357"],["/archives/2023/index.html","8a6260defd6545662c764bba4497ddbc"],["/archives/2025/05/index.html","677c91e9d889b7937c4fd595305a5979"],["/archives/2025/index.html","186e0e76870163ffb9d9469769fbbeb0"],["/archives/index.html","3db6e3f9f32d07b0c526254074fb7ebd"],["/archives/page/2/index.html","1be82ac06a4f7eac8b288e024db5352b"],["/archives/page/3/index.html","9479bd3d6706bc238962e091064dcb3d"],["/categories/CVE/index.html","2a96f2aff207047de525896a7fd6d393"],["/categories/HackTheBox/index.html","ba9b5aae5ac04ed2313a549b0c2de5cb"],["/categories/HackTheBox/page/2/index.html","0bc9d0bf5ca7e68d3ea24d239393ec99"],["/categories/Tips/index.html","988e612e1c861d1ef7a9c0315c6f5d65"],["/categories/index.html","d914b7b15f004c64f7071fd7f058c181"],["/categories/pwnable-kr/index.html","e1e05d748609247d0db18b7d882d000d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","0e4aa280eceab73660e5d9ca68911e3d"],["/htb/hackthebox-arctic-walkthrough/index.html","1ea9d5bcd6df67c04c0f5584c059309f"],["/htb/hackthebox-bounty-walkthrough/index.html","2d3f3925b76d975f43c40d0961eece5e"],["/htb/hackthebox-dog-walkthrough/index.html","fa106b9b104a9a1c975ed8778727d5b8"],["/htb/hackthebox-jerry-walkthrough/index.html","1786181b22af28983fea3ba0b1c4a7ad"],["/htb/hackthebox-lame-writeup/index.html","9102962dee040659c58338a7fbabb651"],["/htb/hackthebox-late-writeup/index.html","63e8189c9aeb9691fce1df598085409c"],["/htb/hackthebox-luanne-writeup/index.html","1cb828886c528ba7faa9fa58b7c7361f"],["/htb/hackthebox-neonify-writeup/index.html","f4a3aeeed0a0907333ce242e2a57da00"],["/htb/hackthebox-nocturnal-walkthrough/index.html","3421b74b81964c9665a0c9a5a0bd87b9"],["/htb/hackthebox-passage-writeup/index.html","8bb4724963fd48fb90fabbe0d2faebcc"],["/htb/hackthebox-routerspace-writeup/index.html","34c36613b38aad6af014a7e5236c685b"],["/htb/hackthebox-timelapse-writeup/index.html","bbe412d4878c9b05be2c0749da2b047c"],["/htb/hackthebox-trick-writeup/index.html","8b8bc349cf964fe7a802a6939c7d3636"],["/htb/hackthebox-underpass-walkthrough/index.html","b12bdb92288e7c068226c4f0002fa777"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","05a0417427153a757af27731f031cdd2"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","180dcb6f113a97887dad2063c8ff37bc"],["/note/setup-docker-for-ctf/index.html","f8586637259f9b719db86b41027e4ca9"],["/note/spawning-tty-shell/index.html","ed9ee52fdae33ce42df673e1ac5f42ed"],["/note/tunneling-and-port-forwarding/index.html","d2d1b9d8ee2a70e596e43fb0bf24d0f9"],["/page/2/index.html","f5e2831c89a5fb4badd9cf34a80f8338"],["/page/3/index.html","a8bffcc9b6d174aacd5ecc970f268222"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","6bdd4d1bead0b3fb5fa29cd78e5d0c1f"],["/sw-register.js","e118134f672c6adf9bc9cee13728f5f9"],["/tags/CVE-2022-22965/index.html","6ed15281d225985c65be8981e51f2508"],["/tags/Juicy-Potato/index.html","0d8b4005ddd16c77657365fe2d72de80"],["/tags/OSCP/index.html","991c6058c868102ebb8e78812ba40d16"],["/tags/SeImpersonatePrivilege/index.html","b003fe6cefd802ce6b08dbaf9c80eb4d"],["/tags/android/index.html","a8b786b0af25d5908735b0e9fc1d60a5"],["/tags/asp/index.html","2101a13db64e4a6b219852a2585a876f"],["/tags/backdrop/index.html","b0d5eed775948bab77fe61a40b16c342"],["/tags/binary/index.html","ae4633f9af50a0eca31b549f02f8558c"],["/tags/coldfusion/index.html","ea1c621901f902646aa4d3a4d8202d89"],["/tags/ctf/index.html","db0c900aa1364d9d3952c2a65ba42000"],["/tags/cve/index.html","2e7c3cc27244a83b4879ea8487bfc70a"],["/tags/daloRADIUS/index.html","31e863c6cc4477f2ccd76e71f6aaab1a"],["/tags/docker/index.html","d6985daa3bb9db55370b7c6c0d476604"],["/tags/exploit/index.html","0e32930003f019c49cb02b1fdd90a987"],["/tags/fail2ban/index.html","54162c68a267c646ccdba747bbcbacd3"],["/tags/fileupload/index.html","d27f0fe05fa3539d41027647eb726ab0"],["/tags/git/index.html","1f12bc523ca786c8d7eb94c288e63bbf"],["/tags/htb/index.html","ee473d83a46038bc29a81f190bd31340"],["/tags/idor/index.html","e000030a9b8a11c5fab97d4fc202d275"],["/tags/iis/index.html","2ecb3e6000a9ce44f3d8cb02e42988df"],["/tags/index.html","a91f806d684a6c2813678ea0028f5101"],["/tags/injection/index.html","43ef818d81acc802a2fa18a012bf6a95"],["/tags/java/index.html","af2e4efbccfff09aba2a8d957441786a"],["/tags/lfi/index.html","3e7095a459530f4f0ce754a09ca40dfb"],["/tags/metasploit/index.html","bff2f51f10b90a848f108866b2335018"],["/tags/mosh/index.html","38e679cd532f3d7bef054de7375ea6e4"],["/tags/payloads/index.html","ee3840593ae777365cb8eefa253559a5"],["/tags/port-forwarding/index.html","857a36f8913b0287519c93c1e0e490ea"],["/tags/port-tunneling/index.html","fd2beb84ec0073b616c5f8e9c3a81a0b"],["/tags/powershell/index.html","e1ecc8c9216b3b211ea20d548a396bc5"],["/tags/pwnable-kr/index.html","5a67f53711b30064a3273d9ad3e1fa74"],["/tags/rce/index.html","16f07213fd64ab1c4f45492f2ce598a8"],["/tags/regex/index.html","fd86562e01dbf0a9ad7e4aeb71b66ccf"],["/tags/reverse-shell/index.html","173bf1ead96f472c4f25d555eb2b46e8"],["/tags/reverse/index.html","5570104d61a732ff5c5e65aa4b3ff726"],["/tags/ruby/index.html","5b18c94f2befb9327006863b029e7395"],["/tags/shell/index.html","b958c80f3c33f2ea0db6a56f89555a7e"],["/tags/smb/index.html","1c5f2a1d4abe0af316a4276ae611b5fa"],["/tags/snmp/index.html","1e33fcee8089e2d85ce003f460a9892f"],["/tags/spring-core/index.html","a33b1b98824277180df3fc78759fbf3b"],["/tags/sql/index.html","7a629d2bd257af9796aed6f78b4cc8de"],["/tags/ssti/index.html","1dd9c63700d4ef1f0e37d76db8ff4212"],["/tags/sudo/index.html","b6b130c9012e515d9551f1b089f3b00c"],["/tags/tips/index.html","864dd7b8c6b46ff491369c02e5a9e06a"],["/tags/tomcat/index.html","4bbdaa79bae704c58bdfbd0ec5daa00f"],["/tags/tty/index.html","b7b11de8892e52877f028386fae0cfff"],["/tags/tunneling/index.html","6e8b3374eca4d9e46e20a0744ba9510f"],["/tags/war/index.html","8504d06844c93a19b238d8bee86303ac"],["/tags/web/index.html","5724dd2ebb7351b42df337a22cf57970"],["/tags/webdav/index.html","963c67153fc370e79fa7a5421bef3169"],["/tags/windows/index.html","b2655ec8a0c742ac84fbc73c7f665053"],["/tags/winrm/index.html","6f4bd3ac27b5a392ed9c19be8669b766"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
