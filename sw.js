/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d67dde57c63ba4759bee26f57afbeb3"],["/CVE/cve-2022-22965-build-and-attack/index.html","727f7a22c3584aba70ae465e8c858a82"],["/about/index.html","68a4fc0ae0a450442fa7f519d9efe5e3"],["/archives/2021/09/index.html","843b772ae9d64cf6c7801ae104a4258d"],["/archives/2021/index.html","f2076d1301a5361b21813954a19f52cc"],["/archives/2022/02/index.html","c8271a29bf640c0c673f0275c374d438"],["/archives/2022/03/index.html","5e7edc0d36479d8e543b2f82e3afe183"],["/archives/2022/04/index.html","2954c0723fc896f47c6b6990b81102e0"],["/archives/2022/09/index.html","eafe26509c5eda404d1e2f8b92721938"],["/archives/2022/12/index.html","ac342d4903ce1fbc7a9f955a737ebf28"],["/archives/2022/index.html","da2a0a0699c16c42cfb5523efee106a7"],["/archives/2023/09/index.html","2f45b1d949e95ba4c71e8f21fceb4c71"],["/archives/2023/index.html","2f3a64cb854395ae62c23b2f44095e2d"],["/archives/2025/05/index.html","bb3b2f7959f5d4ef9fb320e9f722d58a"],["/archives/2025/index.html","4ed041db311af30a1f34efb9a9219b41"],["/archives/index.html","8448c642d422716098200fe65f2e2f54"],["/archives/page/2/index.html","327b8fc653fb77d54a41938aed1f0a35"],["/categories/CVE/index.html","e10785d015935e7b0627b06accfc7f43"],["/categories/HackTheBox/index.html","1bc154a7345a292519a31ba50467a3ba"],["/categories/HackTheBox/page/2/index.html","a2c0de800bd18750522f14387a6aabe1"],["/categories/Tips/index.html","24bcc70a39ad1c9e072df36b3a5b3f6f"],["/categories/index.html","d4ff3b1ffb1bf7610192b5a0f8438cd5"],["/categories/pwnable-kr/index.html","d3b5ee5a414b69539463eb0dabc88164"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","3e51677a4694dd59d70ee66030e30b4f"],["/htb/hackthebox-arctic-walkthrough/index.html","215aea6d800a9e023728d73e77d8a482"],["/htb/hackthebox-bounty-walkthrough/index.html","64ae9156ab8c50377ffbf9d8b7af4eb7"],["/htb/hackthebox-dog-walkthrough/index.html","8442528a77a189f1078daf4901e57a91"],["/htb/hackthebox-jerry-walkthrough/index.html","8c6988af5cabecf7bbc8f7869396573d"],["/htb/hackthebox-lame-writeup/index.html","d1163350734356639dee12dccdd9061f"],["/htb/hackthebox-late-writeup/index.html","4a16ccc81877d301ba1297c8a9b72d92"],["/htb/hackthebox-luanne-writeup/index.html","4846646798c14d7c8a4f215d42b20764"],["/htb/hackthebox-neonify-writeup/index.html","831736a98bc68d61d50f847976d6da7b"],["/htb/hackthebox-nocturnal-walkthrough/index.html","0c5b8642d007e4203e7a169b8ef9d494"],["/htb/hackthebox-passage-writeup/index.html","e2667338a050d41fffd4b974ff529522"],["/htb/hackthebox-routerspace-writeup/index.html","d6c11241fa0eaa8f59d41ebc0c6c599c"],["/htb/hackthebox-timelapse-writeup/index.html","356d12d71e9e7e39f9835a861941c1d9"],["/htb/hackthebox-trick-writeup/index.html","d8ff5cfaac562450106d9f27b58b0d23"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0477a7965069eb6d915f98fbffa00dcb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","da540ef4be1d334fb7894cc2fab6d3d4"],["/note/setup-docker-for-ctf/index.html","18271016f323d2b45e24f3d3e210731d"],["/note/spawning-tty-shell/index.html","62a567ce80b3f10738a1f36615ffea6e"],["/note/tunneling-and-port-forwarding/index.html","aafd2341c45a6b1fd9fdb82a6fd65694"],["/page/2/index.html","57cc909bfc50e92a28916ef2307971d8"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","b8b8764d1035edda9fe1668acb90e4d4"],["/sw-register.js","5c781e6c05c70f23c2412c6104275a9e"],["/tags/CVE-2022-22965/index.html","800b891168574abd0c65efaa8e4f573d"],["/tags/Juicy-Potato/index.html","86f326d0959b501fe0faebb503d828f0"],["/tags/OSCP/index.html","480c61833716c8681ea152b2293aea6b"],["/tags/SeImpersonatePrivilege/index.html","dc913fb93eabcea3e96ad28bc6eb0b92"],["/tags/android/index.html","afa35f671cc9321845732e470d73ce72"],["/tags/asp/index.html","569b2541511ab66e0d4a24aa4a9eceff"],["/tags/backdrop/index.html","cc1e3629513f10cfe89d0b6dd594827a"],["/tags/binary/index.html","b4bde1316df3966b53b220125ca6e714"],["/tags/coldfusion/index.html","431adbe30e00190d46bb3d4effe4aba9"],["/tags/ctf/index.html","4e6d338c3694ff830579164be57d3c8c"],["/tags/cve/index.html","87dfbaa8f2e19a404df0b2182b63409c"],["/tags/docker/index.html","30c3e630f8d977364b9abeace896cba4"],["/tags/exploit/index.html","e867c2dd2f6f4e177bd40b50111a76e9"],["/tags/fail2ban/index.html","23bbc345a685d8cdeb0841a0fb8fe642"],["/tags/fileupload/index.html","80291455e35b628b6a2dbc3589713ed4"],["/tags/git/index.html","705668a2e94748a3e3cee5864be10b5d"],["/tags/htb/index.html","acf7fcfde785d6b8ad7630f3ed210490"],["/tags/idor/index.html","4d66c47124a17cd692d1520ea18b63e8"],["/tags/iis/index.html","2cea916cc8d1ba34c29d32f101963373"],["/tags/index.html","3d1879ce0c606042b6b0259d526e2594"],["/tags/injection/index.html","ab915e84e6a2ff0b143ea378787449c8"],["/tags/java/index.html","a531ecb1603e68cc450ade2e3537f0cc"],["/tags/lfi/index.html","d670710340da43770345adc3ff945910"],["/tags/metasploit/index.html","d146bb89cda81e173ee2a1ceec5f5901"],["/tags/payloads/index.html","f02d0767f48d0f75d1f36f8287e3fb04"],["/tags/port-forwarding/index.html","847980a619170eb0abf8d04be4b8b5c1"],["/tags/port-tunneling/index.html","718c16b7d8497b56273f1834509a994f"],["/tags/powershell/index.html","f3609d43c2326eebf83a527c512f09f9"],["/tags/pwnable-kr/index.html","0cf873d286a260c41d35a15d7ec4ffff"],["/tags/rce/index.html","5528db6572b09388829717e48f4e069e"],["/tags/regex/index.html","b81a990c7aaa1d25c07e5ad61e32ce80"],["/tags/reverse-shell/index.html","c31a0f1e20b68ad385f31ed21fa72cf7"],["/tags/reverse/index.html","a1c828e0305fd2bb31426aa24d59ddbd"],["/tags/ruby/index.html","9b7c7f3cc068a235901971745690c51c"],["/tags/shell/index.html","100db67bc6aa900f7337fa954e78fc8a"],["/tags/smb/index.html","50d5c1de92bcafb4b5c8bf322f90bd3c"],["/tags/spring-core/index.html","e65d37e1c7d0a49d0771a4e00f0caad4"],["/tags/sql/index.html","202734efc7bea6aa7aac801f457ddd05"],["/tags/ssti/index.html","edff2181168f9f6d4680999cceac6139"],["/tags/sudo/index.html","5dd42e86bd621eb1f2cbcc25d88af1c2"],["/tags/tips/index.html","e677dbc72c4162df2b8a6bb889db5627"],["/tags/tomcat/index.html","3f3fd0f32bc790da22642c08487ebc7b"],["/tags/tty/index.html","f24ed860734ef47b97e33c4f2068931a"],["/tags/tunneling/index.html","ab5d513ab91c6ce72833ddcea9d80ab8"],["/tags/war/index.html","5116cc9e84d5ad2463945ded87f7473f"],["/tags/web/index.html","a168828b80ffa33ec23df65806e3a0ba"],["/tags/webdav/index.html","908ab3e57fac6b7cd762564d2996fd6e"],["/tags/windows/index.html","7b860e0b747ffda047419b049b688510"],["/tags/winrm/index.html","3ebdfb6f78da894cc328c8a0d03be873"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
