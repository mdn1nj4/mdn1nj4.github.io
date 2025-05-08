/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","5626d87133c51957a02be05d9b3046bc"],["/about/index.html","c0612ca159c130a3b0c15d6cf433b396"],["/archives/2021/09/index.html","f1a0526ebc7949e75c31f4550801f80f"],["/archives/2021/index.html","044926056118142c3aafb09810b66bec"],["/archives/2022/02/index.html","9c2a3a076ec3213923c00eed091d4d21"],["/archives/2022/03/index.html","3a35713be773a900127b418af344af46"],["/archives/2022/04/index.html","2f62f4ae47f1ece7e4dfedfb7ddbb3f8"],["/archives/2022/09/index.html","b4593cd128b3f91a0a919696d778c579"],["/archives/2022/12/index.html","a0c612b100f73a060524680330c706fe"],["/archives/2022/index.html","2f2613ef0acf7bff9d87421af6175342"],["/archives/2023/09/index.html","d12ad06766b5aa9694a910b72203615d"],["/archives/2023/index.html","a05a9100345fb55cf16e51ddd4c396f8"],["/archives/2025/05/index.html","f5d6eb66ae6274186655c826579e9090"],["/archives/2025/index.html","7f9ab998b6df3d3c2f4cc1a0d327a406"],["/archives/index.html","9da0d25444fc497e5d7ef06c68432522"],["/archives/page/2/index.html","cc108da56038ee5df2a9fd1d0e323251"],["/categories/CVE/index.html","24355d3436f96f9860e7575464c1170a"],["/categories/HackTheBox/index.html","3a3f1b022f4acb9548a88ea405032f67"],["/categories/HackTheBox/page/2/index.html","d4ac586284e873135e8407bcf3b3eee3"],["/categories/Tips/index.html","41aecbcfb2102748b1c287f5df67a218"],["/categories/index.html","ee2f6ff2d444fedf5e4663d61f5bb3b6"],["/categories/pwnable-kr/index.html","377b78aea7a907808e72709178624af2"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","f330ec11bf9c944779cdd3c92e0b9299"],["/htb/hackthebox-arctic-walkthrough/index.html","3464bdff5b180e44f2c77707a75f9fe9"],["/htb/hackthebox-bounty-walkthrough/index.html","baf19e7d18e2efd00b9bdf47c0d7f284"],["/htb/hackthebox-dog-walkthrough/index.html","bb60d47b5a32bf09a0a0da598776a7fc"],["/htb/hackthebox-jerry-walkthrough/index.html","b92d7e965c744cf6826d9f30885f1434"],["/htb/hackthebox-lame-writeup/index.html","4b7c9f20f7290c073757c927908f7172"],["/htb/hackthebox-late-writeup/index.html","b0c221c58e12a33d3dcfd7380ffa320d"],["/htb/hackthebox-luanne-writeup/index.html","c49be243d47dce131918a764d694a7b4"],["/htb/hackthebox-neonify-writeup/index.html","833676f731362a184d068aeaa765ac1f"],["/htb/hackthebox-passage-writeup/index.html","22f8421274615000440638301dc7dfd0"],["/htb/hackthebox-routerspace-writeup/index.html","974e3d6edae1c5912f3fed0567af8a89"],["/htb/hackthebox-timelapse-writeup/index.html","6d2da69e73e097852f3f3b7b181f9c82"],["/htb/hackthebox-trick-writeup/index.html","98aebcb8cc025053da2c12bc0d2f48bb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0a1a17d2e149cfb9ce387e069f5b9dad"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","1c0002208384be03d9538703f7322220"],["/note/setup-docker-for-ctf/index.html","2fbbe625c4f218ebcdd2084aec08b85a"],["/note/spawning-tty-shell/index.html","b2e4d5c7bc65af1cd9e4129b736bd751"],["/note/tunneling-and-port-forwarding/index.html","e7421de106b881d07ec5501128b99afe"],["/page/2/index.html","47b5867b908e57fecc9acb67b428f99a"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","564392642acd8f0dff37472a5d48784f"],["/sw-register.js","46a65dc6d7d1b2b9d0749e1cec9d15cb"],["/tags/CVE-2022-22965/index.html","09447402dc2e04cd795987f3cd186d4a"],["/tags/Juicy-Potato/index.html","564ba9df385b0aeb3bfb57d81a263f44"],["/tags/OSCP/index.html","c8d3959630aa5203c010c5c8a9e546d3"],["/tags/SeImpersonatePrivilege/index.html","29fae46d759cb1815255ea2dcc6fcae8"],["/tags/android/index.html","c387f051a37912aad8d0fe1d7c5538f7"],["/tags/asp/index.html","cafb61dde6f232401b8e0164161798d0"],["/tags/backdrop/index.html","f1b105376194c6b634595878b8528bd9"],["/tags/binary/index.html","9f692ecfcaea8cf8e2ce78f7694fc12c"],["/tags/coldfusion/index.html","19397a6d43549608a639ed9ecb298a30"],["/tags/ctf/index.html","2577bc031df2b04815db28052dbecfb5"],["/tags/cve/index.html","1e723d924aa59edaa046026e6bec8bea"],["/tags/docker/index.html","17defcf2d9616b113f51b0a47f5e950c"],["/tags/exploit/index.html","f3eb1f8ff80098a8492eecb101229ccb"],["/tags/fail2ban/index.html","5847a77428422515822bd547908628d6"],["/tags/fileupload/index.html","c9765013a4411caa91fe4ba6448978b8"],["/tags/git/index.html","66683af40674d6c223b65219c0fbaf59"],["/tags/htb/index.html","a46db056568d29b290bde6531236182b"],["/tags/iis/index.html","9fecf183245b925df2297171d2818723"],["/tags/index.html","59cd8be2b941877eb2d93c3f0e4b9793"],["/tags/java/index.html","146e60f8079c77644d5e30d79566f7c0"],["/tags/lfi/index.html","f8ef560997430a307a7d359a5c630964"],["/tags/metasploit/index.html","7fc12654d6fc704de25ce452624eae78"],["/tags/payloads/index.html","824d8642b810c78fd25169c16e1b5cc3"],["/tags/port-forwarding/index.html","09532aa712761aefdf6c4208c47f5a09"],["/tags/port-tunneling/index.html","beeed04828bc550bdb56dd3af029b24a"],["/tags/powershell/index.html","5bfda2c05ccf7dab2e298d7350347712"],["/tags/pwnable-kr/index.html","032110abdc775ee64032245eec25794a"],["/tags/rce/index.html","458adbb101f9dfbc0c766667060df5dc"],["/tags/regex/index.html","1d0035eaf32b0004139bde768701c733"],["/tags/reverse-shell/index.html","8e8b38e3f5be6f610cba4198c2b7a6ac"],["/tags/reverse/index.html","cb95afd678daac82198558a32905c996"],["/tags/ruby/index.html","13685c26b775f8902f1c70b2e263b2b5"],["/tags/shell/index.html","3a91c63fa17f87a4fe4ae0771bd4f306"],["/tags/smb/index.html","556b1725cc421be29260cad00a10b09f"],["/tags/spring-core/index.html","b06cb0bdff964cc3c92406ae1817b990"],["/tags/sql/index.html","ad471c311abbc5b3b3a753cb46f4cb9e"],["/tags/ssti/index.html","16437fc3a85c48ae6670dd036ff3c5a2"],["/tags/sudo/index.html","c06cab3b7338afc511e6334c0645153b"],["/tags/tips/index.html","8c8743478598728c2200b70e145ea708"],["/tags/tomcat/index.html","919663140c8e51610a03706cfaed3d64"],["/tags/tty/index.html","f2fc874c09f2f36d8bef852d5ce7fa7e"],["/tags/tunneling/index.html","81d641f692668ad1b67669c610195a76"],["/tags/war/index.html","e9ea3b273a54d54abdf2fb758883603f"],["/tags/web/index.html","02c63e4b239838de6b26ec4d0df5e8a8"],["/tags/webdav/index.html","2f6932543dc119fff70dcb9c46028526"],["/tags/windows/index.html","2d7a8a4194185982b014456fd295952a"],["/tags/winrm/index.html","803462bde7ea88fff4e145f9f24906f4"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
