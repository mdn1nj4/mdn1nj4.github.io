/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","896e65280490e64b43569b77a365c862"],["/CVE/cve-2022-22965-build-and-attack/index.html","21cc41abfb7e7e6bab06e452e3b333ee"],["/about/index.html","eda8925549732c06ad18aa964c706a40"],["/archives/2021/09/index.html","8e2bc8b7da1b934d31cc713fa2a2b7d1"],["/archives/2021/index.html","0bee08d0357b934ac425190b8b92bc1d"],["/archives/2022/02/index.html","c1ca5f5cb63517b873ac8f1a8d40dd05"],["/archives/2022/03/index.html","6b8b8d41373f31550c99f115904ae1a9"],["/archives/2022/04/index.html","892e8d7b78516e625959527676ab5114"],["/archives/2022/09/index.html","158024ad8c249e641f84492214202fae"],["/archives/2022/index.html","66b58fefba780691c72a47df34c3012f"],["/archives/index.html","946911485d3f79f9bab707a04bd8dd58"],["/archives/page/2/index.html","46a3feed345e4a73429701d42aae7b2e"],["/categories/CVE/index.html","f5bee7de4852203482f0cbb447f0d082"],["/categories/HackTheBox/index.html","a3533ab90c706fb87930e2ac98acd81b"],["/categories/Tips/index.html","0199cae9adfeab39f1206c18eea95c46"],["/categories/index.html","7e0c3045055396b855e15fc19ba00b75"],["/categories/pwnable-kr/index.html","a93ffe59646d4bcf917db742f22e4b57"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","8b11a438a8f37de9f4eeace9c1c366ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","9e2e40c8b0d611445db047961554ea55"],["/htb/hackthebox-late-writeup/index.html","aaf2dc58df311cf40765b706ff16e5d0"],["/htb/hackthebox-luanne-writeup/index.html","beebbaefbcd5f174eefe61aa898ed43f"],["/htb/hackthebox-passage-writeup/index.html","004e4b92b101f4a06570940f2630ad01"],["/htb/hackthebox-routerspace-writeup/index.html","050442765d9de1dd64fcbece09bbad52"],["/htb/hackthebox-timelapse-writeup/index.html","cedccf7deab62a5e4cfa1c4b9d108b15"],["/htb/hackthebox-trick-writeup/index.html","234b61d5838fa7a1997a5acaf29195bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ef0db9efc0c1b78433c398e8aad83ffa"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/note/reverse-shell-cheat-cheat/index.html","e4ebaee8214cfa5990bae40979c63498"],["/note/setup-docker-for-ctf/index.html","c8ff9885b971a73b252c6e9867132146"],["/note/spawning-tty-shell/index.html","cabb1c33ef0843611513b1e834fb0783"],["/note/tunneling-and-port-forwarding/index.html","a80964f5e383a4d9fd2a0e2935c2a4b0"],["/page/2/index.html","164f65ba9fdcb91f0036b00f6cba6ee8"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","97efee1ada25f5af51859be5b57d86f4"],["/sw-register.js","405d14d448018835cc84f0d752bb996f"],["/tags/CVE-2022-22965/index.html","e4b236ec8a4eb18195ad8b0a79ee13ad"],["/tags/android/index.html","70e240a8864230e2a085f951eb107ad8"],["/tags/binary/index.html","ba7e36b073428a1577968a222aeaf9cb"],["/tags/ctf/index.html","1e918a379cf743212e4f4f4a3dd8b825"],["/tags/cve/index.html","c7e05768377575212c943d4880d0174b"],["/tags/docker/index.html","c7892cb9614bd488c09b7b64e9784ab5"],["/tags/exploit/index.html","7d5b5af974efdf84ae13719d433747bf"],["/tags/fail2ban/index.html","8c6df36ce99c1399f617fd1faae4786e"],["/tags/htb/index.html","4e30a95772066fbe9bc129262bc46094"],["/tags/index.html","808419eaf023695255e23246bcaaefd3"],["/tags/java/index.html","9348c541f3363b156131cd629cdc7a0d"],["/tags/lfi/index.html","81282a9f5cea29d8ba24b1ebde504198"],["/tags/payloads/index.html","ba35a22f4e5e338068f8d87be5b65231"],["/tags/port-forwarding/index.html","b80fc3d74b00972df6556a3fa583cfb2"],["/tags/port-tunneling/index.html","657944d3543a7959c8590f326467af38"],["/tags/powershell/index.html","dff0a43c59deda157ddf5bbe0487fbb1"],["/tags/pwnable-kr/index.html","1e4c92e46462c07bdb7f8efe0933eb5d"],["/tags/rce/index.html","9a65b09114dafb043f4e3d67b458c57b"],["/tags/reverse-shell/index.html","568d84c4c5ba4273d7d68ecee3be1d54"],["/tags/reverse/index.html","a83ef44b78d8c6640ac0d1db64769644"],["/tags/shell/index.html","93084e787dd235c1c3a324b90bc34297"],["/tags/smb/index.html","472d506981b8ce6d86aa545e700b22b1"],["/tags/spring-core/index.html","efb94461d8b1468a0abaa7d4c53c886f"],["/tags/sql/index.html","26dce2e561a2ab66c438a3bb08950d5b"],["/tags/ssti/index.html","3b9bfa665e9aadda25f94330008c0ec9"],["/tags/tips/index.html","235af39b6fe6db1945cf663869f98222"],["/tags/tty/index.html","a0a423d7973db5588a9c67326fd03986"],["/tags/tunneling/index.html","8b6e4c56a14dcee6d74e6f4ef445e94c"],["/tags/winrm/index.html","2a525fb5370a2612c67c33e6a94136a4"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
