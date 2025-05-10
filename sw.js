/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20750ec911975635308d1dcdebdf0949"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","b4e1b3a2acaf49e1c7f17809a27f0c68"],["/archives/2021/09/index.html","01beab30a069d9bb5e16239fa4dfadf4"],["/archives/2021/index.html","e00657053c1b2b286fd3f57232c17bca"],["/archives/2022/02/index.html","fdb147c0a521bb9bbeb0658a38aaaa88"],["/archives/2022/03/index.html","1f41520af7766c10419becf51620483a"],["/archives/2022/04/index.html","706b26c3fba8bbe5b5500938de9b9170"],["/archives/2022/09/index.html","0043d219fe4415623df3a7252455d617"],["/archives/2022/12/index.html","e59742b0dad269708b0dca34ee4be44c"],["/archives/2022/index.html","0b3123bbd98c25c00479cb4e99256509"],["/archives/2023/09/index.html","fe87935dee2c1184842c4a19fca8e634"],["/archives/2023/index.html","04951d254382bca3308ee40c2a283b7c"],["/archives/2025/05/index.html","1690dadb68650fd4067b76c856cd8e4c"],["/archives/2025/index.html","b2d09974c72c62ee62af17a5d391cf7c"],["/archives/index.html","eb552a967d582f2ee84e0c3ab7ee4f38"],["/archives/page/2/index.html","d05b749d23572bc501d30d6558579042"],["/archives/page/3/index.html","48c35f58000c2235ee0289b13ffcd01d"],["/categories/CVE/index.html","e9c119d5bae31ee8f093b2a5e888516e"],["/categories/HackTheBox/index.html","6b40419767bfbb22e1425d0210620253"],["/categories/HackTheBox/page/2/index.html","92d7144ff2ad3b4a36d4f35a9b2e3e39"],["/categories/Tips/index.html","631eff280ca61e1fe7fe5631f20bfe5b"],["/categories/index.html","bacd0d2ce753d401970efbc59d5421cc"],["/categories/pwnable-kr/index.html","a4dbe4b997bb6d741c78a5ff4d0e0cfa"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-nocturnal-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-underpass-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","68d169829864b13cefe122bf7d690066"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","096d9cd455170d73a153fef7d6cf3200"],["/page/3/index.html","e4ad8d4ee3afbfbe625537308a29a37d"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","2304ef6985475918c4dc0a4f3ed2a236"],["/tags/CVE-2022-22965/index.html","c68c1016e12fc71c5e3e3ef5127b456d"],["/tags/Juicy-Potato/index.html","fabf32fcec71faef35e4b338cc8cfeeb"],["/tags/OSCP/index.html","c32eea123db3bf0e5857655b642b346b"],["/tags/SeImpersonatePrivilege/index.html","c4e806a67f09b50bebacf6721c916dc3"],["/tags/android/index.html","cc634c9fb9efb65eb32cda3fb8e05b4a"],["/tags/asp/index.html","e67ac4fe43e0045ea4c87b5d11c446b2"],["/tags/backdrop/index.html","5f7defda873aeb17611e904ad7b157a9"],["/tags/binary/index.html","96bef84a257a8266b609257fd7517b0b"],["/tags/coldfusion/index.html","3eadc9d6ee52f4f131bed97d2e0703fd"],["/tags/ctf/index.html","06bf008ed784d07e0da1c0cad0350af4"],["/tags/cve/index.html","702d00e2f952be1bbd39915cbb3d8026"],["/tags/daloRADIUS/index.html","c375ce9512f0b5635f757638ee132776"],["/tags/docker/index.html","f1c7585c85441d941113b281e1feb109"],["/tags/exploit/index.html","5f8a6723db8c140238a314e9d9c919b2"],["/tags/fail2ban/index.html","15e53fe927bcf1963bca862631f8e996"],["/tags/fileupload/index.html","8a3d8c274bf8e0e4b63a5742e7ae0025"],["/tags/git/index.html","6b4309606f9510a3d6bdf81375ea5860"],["/tags/htb/index.html","f9085c9ba80172a7d9502fe460ba2c46"],["/tags/idor/index.html","2c37d63d9600cc9e6aafc91677cc2bc3"],["/tags/iis/index.html","483daeec3ba4a451d32f971d854a3379"],["/tags/index.html","23f0971df6faaef14b43dadd7e6f38f7"],["/tags/injection/index.html","817aa94bc126768c10eaa74861884694"],["/tags/java/index.html","67ba3369a54288ecf998910d71a65e25"],["/tags/lfi/index.html","69804432e36b6ef5c92c2602e70bae21"],["/tags/metasploit/index.html","532c97825e8075a5abd2426eb928e96c"],["/tags/mosh/index.html","23fdbc5a564301bbe7b2c4aeb7ac0421"],["/tags/payloads/index.html","9de40f4ce74fa84a17abcfb7aedb2f99"],["/tags/port-forwarding/index.html","c0dc0d9fbbd3631009e34d8d8cacd9af"],["/tags/port-tunneling/index.html","abbdcff8226bbfdf4a161065d6bc3fed"],["/tags/powershell/index.html","0f3a2c26f9b8ddd474361ab91a692ec7"],["/tags/pwnable-kr/index.html","e5c421fa32cdf8116b65476513f2e1a2"],["/tags/rce/index.html","ce72c6f537f96e0346bab6de510c02e4"],["/tags/regex/index.html","4a90e4ec64518d3bc8480568c880c92e"],["/tags/reverse-shell/index.html","f76a245a27c179618caff4af64e7d3da"],["/tags/reverse/index.html","6e63909c367e29dafcd0bcd142149891"],["/tags/ruby/index.html","a7edde918271c515fb99142cb1579a19"],["/tags/shell/index.html","3dae52e603740877ce169583d49cfda0"],["/tags/smb/index.html","505cda15962c7d508b04849e2704735b"],["/tags/snmp/index.html","e42a2995fc80868910147ffefbe1904a"],["/tags/spring-core/index.html","e6bddbad7c4a9071e478cf88f51cf5d3"],["/tags/sql/index.html","c7f4f7d5bee3e47fc26f9cb3f162884d"],["/tags/ssti/index.html","09241def3e113068f14ba10847504722"],["/tags/sudo/index.html","337d8af58b421681df1c074e99613a09"],["/tags/tips/index.html","976590af569121261caa7603ed9e3741"],["/tags/tomcat/index.html","0c43604988bdce4528f51c2cde58991f"],["/tags/tty/index.html","b6cb6076dd7aeeddc7a2feb5474c8ecb"],["/tags/tunneling/index.html","41992e2fca38d4945f43028b522da5ca"],["/tags/war/index.html","e74b08ad19ae234cd91e5765edd4d7b0"],["/tags/web/index.html","7b7253382f825275c952a537fc41f776"],["/tags/webdav/index.html","4637acc29a9213328fafae539987a003"],["/tags/windows/index.html","704b26a32dfd030af6991bb8635012b4"],["/tags/winrm/index.html","04e20cd22d1a5701c5462e93e54d8b6e"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
