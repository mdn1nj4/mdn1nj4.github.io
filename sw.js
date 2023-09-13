/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","425ef2c14c3faa62a48e5dbadcb6c1ed"],["/CVE/cve-2022-22965-build-and-attack/index.html","34db8217f62f4f3f4c1aec4b3281282d"],["/about/index.html","8cf23f299cbd29b21a8a42c32399f29c"],["/archives/2021/09/index.html","191ea9329854fea08e9d8ce3d90c93be"],["/archives/2021/index.html","ebe2042345aa605cb574db744e8afe0a"],["/archives/2022/02/index.html","0a823bee303dcd691bbc1f4a6252c159"],["/archives/2022/03/index.html","ebd03c565f08becec43cbee44beaea3c"],["/archives/2022/04/index.html","132c7129eb890b54f85df895ca4dac22"],["/archives/2022/09/index.html","c956e2fd5a94f4c5c961ece85d225761"],["/archives/2022/12/index.html","ddf827a046a716518c43b25afcc63960"],["/archives/2022/index.html","7164daf3803b9fe6da7c4a7c25c30156"],["/archives/2023/09/index.html","1b6947c6b56a5739b8ee9e4abe254122"],["/archives/2023/index.html","1af501848626ddc73616e2239a4a20e5"],["/archives/index.html","f11b33a7e9fc8092e978c342c65d0d8d"],["/archives/page/2/index.html","e97c219c59dc640253b0aa41b80229ff"],["/categories/CVE/index.html","f2bc26e956672d20cd1033e7801163e3"],["/categories/HackTheBox/index.html","4a00e0f458aa107811525bb2fabd773b"],["/categories/HackTheBox/page/2/index.html","7bb0c3a7be6ec288432f7c9bebe71be2"],["/categories/Tips/index.html","b9d87cea9507c2abc367a1055f758e07"],["/categories/index.html","83921e3075682a3c9f8e561ea9180d8e"],["/categories/pwnable-kr/index.html","4fdf639e962d500a01a5e9ee36e3a3ac"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","a41b4c8b186dd077d29737619806c6d9"],["/htb/hackthebox-arctic-walkthrough/index.html","cbc8469bc4781f5f9c904e2f3b81444a"],["/htb/hackthebox-bounty-walkthrough/index.html","2884c87eff5de1c0a658e5eb4baeb377"],["/htb/hackthebox-lame-writeup/index.html","3745d45146906044b882402a6646b4bd"],["/htb/hackthebox-late-writeup/index.html","5473a695bd12aac61041cdd4a7b59ad9"],["/htb/hackthebox-luanne-writeup/index.html","0d207638be5d69afccd50b65247f605f"],["/htb/hackthebox-neonify-writeup/index.html","42dc843e5fb4ec36c581917c7eb308de"],["/htb/hackthebox-passage-writeup/index.html","f0984e54ef74c9327fa4ae10f4bf8e0a"],["/htb/hackthebox-routerspace-writeup/index.html","214c1465930cb5ec16997fbb74e3f083"],["/htb/hackthebox-timelapse-writeup/index.html","877d15eaf0d77f0624ad23562a970c33"],["/htb/hackthebox-trick-writeup/index.html","169bf1f0e1303d584aeb10ab4e66e67a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1ec7d23ef7ac4cb2bd4a73fdfa516594"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","6fd1a75863924521957ea6104bf29a55"],["/note/setup-docker-for-ctf/index.html","fd5f26ced3aace4a6262495b3bfafdf6"],["/note/spawning-tty-shell/index.html","a54d557d995ee00f5b5d8a3fb6f910cb"],["/note/tunneling-and-port-forwarding/index.html","7e6a94aeecf6750e53561be37db62f96"],["/page/2/index.html","2528813975e2658d9e21a23085820bf8"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","3884fe53bdee1f57267d046c057bb99a"],["/sw-register.js","4ea0966a5e5e44839e95fbf3f6bf1f7c"],["/tags/CVE-2022-22965/index.html","795d4d1a6f3285e5c876aa1ff4f70898"],["/tags/Juicy-Potato/index.html","62a297bfb640e44b75da3fecc8757c25"],["/tags/RCE/index.html","dd1d98b70597b6cc947f5b46e7bdaccd"],["/tags/SeImpersonatePrivilege/index.html","156a4826c2a9827a9df9a6d4bbd1b964"],["/tags/android/index.html","3718b0247ba516ff4ac2650d7db55aad"],["/tags/asp/index.html","30476abeb2c3b0155294360050697821"],["/tags/binary/index.html","1265db920c0eeefc3b1146a9ccee8fbf"],["/tags/coldfusion/index.html","7fc6d2c907ac9ba5bff9609f4c00ce42"],["/tags/ctf/index.html","265680670940d9234949785628650131"],["/tags/cve/index.html","534f026e5b92f40f00027ff4c61ad486"],["/tags/docker/index.html","f50286f1f4fc6893a6b9fa1933b5320e"],["/tags/exploit/index.html","6754fa302ee3d89eef3e7d5fdd581ea9"],["/tags/fail2ban/index.html","789019bfb664be60b67851648bc5e8f5"],["/tags/fileupload/index.html","aaca4810ea68210f5930cd7c677b94ac"],["/tags/htb/index.html","129c0f2cb9ca6add77dc6fc05c7bf7ec"],["/tags/iis/index.html","d23e1cf4b53f532f3cca2a04574ea363"],["/tags/index.html","34d1ae2e7e5da599f6efaca7a1bc57dc"],["/tags/java/index.html","edd503180fda60471855e8e0754f1e86"],["/tags/lfi/index.html","376098c6bf40430a06619e2edfbae452"],["/tags/metasploit/index.html","2a55360a1a8b29c4ce7806acad50d32b"],["/tags/payloads/index.html","5ad12be47c26e645384081a73209279c"],["/tags/port-forwarding/index.html","3777143eaab17f5a2445937536c0153a"],["/tags/port-tunneling/index.html","481fe769f1be51053d768783b9aa98c4"],["/tags/powershell/index.html","ee7840214aab3402621da0f8f5f95091"],["/tags/pwnable-kr/index.html","732a6bd975f3b1d9cfc63d165d52499c"],["/tags/rce/index.html","869697d43c760184a44de3d8cf124408"],["/tags/regex/index.html","0f8465e095a4ee54af69cfea6dc64f6c"],["/tags/reverse-shell/index.html","591270f32d98a06142265fb81c482f16"],["/tags/reverse/index.html","1ee8da80d53ea902be8b0f42386a5c15"],["/tags/ruby/index.html","a1025c6c01db1e03e7317812c34b52cd"],["/tags/shell/index.html","5cba5242bf815f859da01a10539431d4"],["/tags/smb/index.html","d80c69d1d0f4e1b9b1f36a982194be4f"],["/tags/spring-core/index.html","b9b59ef826b7c65be10e58cdb7591547"],["/tags/sql/index.html","858526c938f05ef0cc7865160dd96fc5"],["/tags/ssti/index.html","014955c3f5df07086d03cef3cebd45e8"],["/tags/tips/index.html","76420f14e9a723ce2a5badcd89742b13"],["/tags/tty/index.html","ddb10a2b6dfa69f94a783c76a9fbce8f"],["/tags/tunneling/index.html","7583102bcd0548767619017434d6e84f"],["/tags/webdav/index.html","b6d311118a961c746145198180bf5f15"],["/tags/windows/index.html","00757a4b878ce765872ec8242d1f782f"],["/tags/winrm/index.html","c5b3f44d9e00660a6068b62c318d5fd2"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
