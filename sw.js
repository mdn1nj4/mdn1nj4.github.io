/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","e76c9a1ece3f996efe1c4c6634cb0b64"],["/about/index.html","2fe80c77ddac918f844f3587bd9f050a"],["/archives/2021/09/index.html","682780ff4ec335dcf4e6d0535d5c5287"],["/archives/2021/index.html","cbd73a8b60247244d4463fca66b0fd55"],["/archives/2022/02/index.html","3641cd0797bda344f5f1522ac596c98c"],["/archives/2022/03/index.html","8a0a87e14ae3f56dcd2af92226f0122f"],["/archives/2022/04/index.html","c42a489b727a93089442e3fc391b7479"],["/archives/2022/09/index.html","4a5ea5c2cbeac3c089ceda41c0aa6746"],["/archives/2022/12/index.html","87b8f32728dc0d1da11c1de956444882"],["/archives/2022/index.html","48853829d430d5def2c6bc776a1c0303"],["/archives/2023/09/index.html","b0b035eec40c3bd8c4b25cff6d07a940"],["/archives/2023/index.html","467b7bfc53a74f21cde8f6df35768c22"],["/archives/2025/05/index.html","82dfa44d171ce5667ebf5b12f0c8afd3"],["/archives/2025/index.html","549891c2b5aec0a3a01680e6c2095c24"],["/archives/index.html","922da7383f3d5bfa02ab5dd08918d04b"],["/archives/page/2/index.html","51a00abe7a887df8f0ebb64a29c78078"],["/categories/CVE/index.html","9e9dc7999ec48070e9c992f952006843"],["/categories/HackTheBox/index.html","4f87963dd6c8c7851e3887535230c4aa"],["/categories/HackTheBox/page/2/index.html","a55c0a5fe6174aae7dcc3faa796a1a47"],["/categories/Tips/index.html","ff33d1a6d30ecb402a3e3c705af594b8"],["/categories/index.html","3ed8d83fefb509499e479a9322969da5"],["/categories/pwnable-kr/index.html","cf8348fa875d5543a004bc5d53d57b24"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","432c3d0d7a72788d8d4e154c0c815522"],["/htb/hackthebox-arctic-walkthrough/index.html","66b77255ec958c2baf7c1cb89b9c017f"],["/htb/hackthebox-bounty-walkthrough/index.html","0c0ed1799f059060742e356025a9a2dd"],["/htb/hackthebox-dog-walkthrough/index.html","b0a3fa6b0b154b38ed0a73bedb7626e8"],["/htb/hackthebox-jerry-walkthrough/index.html","3d047a26e2f8815f515fa7aa4fa3a50c"],["/htb/hackthebox-lame-writeup/index.html","832a7835de976f1149a34e0848d146d6"],["/htb/hackthebox-late-writeup/index.html","2fbd4104064e442a3b5a639cebd14603"],["/htb/hackthebox-luanne-writeup/index.html","fe2f40f7d3a89d073d4ada73c47914f5"],["/htb/hackthebox-neonify-writeup/index.html","0be992f33b1c9acedda9c259163b00d4"],["/htb/hackthebox-passage-writeup/index.html","c282141fc0b3a4326c0c1355fdeef7d6"],["/htb/hackthebox-routerspace-writeup/index.html","1be09589d9cb9264f84297391e49bf35"],["/htb/hackthebox-timelapse-writeup/index.html","bac765809f3046728c20f642e5dcc2b5"],["/htb/hackthebox-trick-writeup/index.html","ea080e4c61898f13ad1f15a02a893b50"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1a33b172af32ddb24d930174a2a13503"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","5db9d679d91c1fd3be38e7f6ed2ac888"],["/note/setup-docker-for-ctf/index.html","760548687930c1e51589412b8582c2d1"],["/note/spawning-tty-shell/index.html","6a4c67948efa89d55d6d0627a23d29fc"],["/note/tunneling-and-port-forwarding/index.html","ee14a53fa74e7bd2da137ed066b86f50"],["/page/2/index.html","28681a554b64e8abd9b3ec9693c1e29f"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","237279c11058bc4da8da9748f6c05988"],["/sw-register.js","ee19fb23bfd3ad6c6fdc67523c773a37"],["/tags/CVE-2022-22965/index.html","0746154ccc09da1177fb69e8b883c8ff"],["/tags/Juicy-Potato/index.html","a53e9f2caba6ee39b53b92432df1f9fb"],["/tags/OSCP/index.html","9d9e204b5d4681352853a0d0a7f89fc3"],["/tags/SeImpersonatePrivilege/index.html","64c7fd84051722475299d37cd37ff5c7"],["/tags/android/index.html","a2b71ec84623d5d111d6e429f47197d9"],["/tags/asp/index.html","953a3b43fab2b6422559c3d4407b264f"],["/tags/backdrop/index.html","729e3961968592990430ccc13fa94937"],["/tags/binary/index.html","fc3ef028d0557304b23fc99fe417450b"],["/tags/coldfusion/index.html","e0848e614a781f0fc94125a8461b2f14"],["/tags/ctf/index.html","81f32fd75eacc77dfa128a1db6ae62b8"],["/tags/cve/index.html","4bf47b9e214cb3e7c48e1ec7902c2f5c"],["/tags/docker/index.html","84faef544e3465f063705927949673a5"],["/tags/exploit/index.html","979d6c2fd956a7b9c1e0e05c97e65780"],["/tags/fail2ban/index.html","726d36539f314445f5c51aabf1282eb7"],["/tags/fileupload/index.html","339ea9ca4369af6842409e783393d1d5"],["/tags/git/index.html","2e1639face50801ce1529b42471b3184"],["/tags/htb/index.html","e77fd20730e3f9355057300c7e154c75"],["/tags/iis/index.html","c829da96229bb96ccf4f2a0da2d1a99a"],["/tags/index.html","3530d537fb834c65f54fd4b36e2b96d1"],["/tags/java/index.html","fbc104a65d836ade3fe92efff37257e2"],["/tags/lfi/index.html","8a2728a139b65c9236e6016a15bdd871"],["/tags/metasploit/index.html","aa605310cf5427de56f1e64ecd619175"],["/tags/payloads/index.html","8c2a7071572edf2768555fef426414af"],["/tags/port-forwarding/index.html","e0d1509a73c9ca6ada1dbd6a9691a994"],["/tags/port-tunneling/index.html","7bb1a0196922f8aeb7be6dbe6860c5bd"],["/tags/powershell/index.html","ed26babcf3dbf5e580c6c22eb90c6769"],["/tags/pwnable-kr/index.html","44fd7962de2ce0e42fd06381d451b6cc"],["/tags/rce/index.html","2e728634c0a7579472d0679437df1250"],["/tags/regex/index.html","a4b41021a5c812ffff178344f8ceaf92"],["/tags/reverse-shell/index.html","6f36cb697fa1d35df8e92cec0577ea1b"],["/tags/reverse/index.html","1cdc23ba99a74415f71a2af402672f21"],["/tags/ruby/index.html","4658c6553217cc7b1be906568c286c5b"],["/tags/shell/index.html","d8ecc3fb92069a2d912d7701332be744"],["/tags/smb/index.html","bc5aa2e8935926b6aab11af11569078d"],["/tags/spring-core/index.html","e568dc7f857154f1bc141445f5ca09f1"],["/tags/sql/index.html","73e2c674377b01aa66172f31c3adfd18"],["/tags/ssti/index.html","0fe885c294f1654ec8955ee33c5e504d"],["/tags/sudo/index.html","60d44eb9532b0b04af963d269d015ae7"],["/tags/tips/index.html","0b8988567537348ad8f2bc5d98006e2c"],["/tags/tomcat/index.html","557fa7ef79fe62d5dd624c7e460ae048"],["/tags/tty/index.html","3faea420609e6c923f588ec9e16b6ef6"],["/tags/tunneling/index.html","20d764157c22676705ce626cccf1d5f7"],["/tags/war/index.html","60b82629d6f9dfff75e47a2a768a04fb"],["/tags/web/index.html","e719cde585eee368b71636013466766b"],["/tags/webdav/index.html","0811d8065ccfc4a84c46720fdcbb83a8"],["/tags/windows/index.html","6d2a120b5e3b11fcddce437014358bd3"],["/tags/winrm/index.html","e64154495e00d80c4338c18556d760ad"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
