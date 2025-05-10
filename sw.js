/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","08a76b551094ef5f2200bdb7cf611e94"],["/CVE/cve-2022-22965-build-and-attack/index.html","8de00431da7927ff5faba11d06c28caf"],["/about/index.html","9769af25a3ced98b8e4a1581201f2198"],["/archives/2021/09/index.html","cdd1a3224398684cb415c8032a970ce5"],["/archives/2021/index.html","b4592f99ea33bc982572a094bc79d6e3"],["/archives/2022/02/index.html","a4c04a95e1874eba0fa2d1efcf89e0b7"],["/archives/2022/03/index.html","5f9c7d4452de54007bad51c7689c3d7f"],["/archives/2022/04/index.html","dab286b5e20d2c4de42a30939a27df55"],["/archives/2022/09/index.html","3471f6916aa665918f111feb3bd76bcd"],["/archives/2022/12/index.html","ae108c3e9fd019f7cc30eb6e14ed9eab"],["/archives/2022/index.html","21e0dc63399ea97de5ff9b0a3fd84ba6"],["/archives/2023/09/index.html","0c40548d07406d4325e972070a116830"],["/archives/2023/index.html","24a3f08544592e0d7e9b584defd12783"],["/archives/2025/05/index.html","cabafa6c36ff40ab16433d102940a9c1"],["/archives/2025/index.html","34fd45e1d4b7b928213380c72b81dc18"],["/archives/index.html","d70b12384aafe7561c7e22d1d6cab120"],["/archives/page/2/index.html","fb1693191bb7e767a2aa857d8400f664"],["/archives/page/3/index.html","223e5b956f4cc195368a735700cc23e4"],["/categories/CVE/index.html","273d81212815512f4495566a32b37d31"],["/categories/HackTheBox/index.html","64e5a6ac7d992b678b1e3a8fa45d385b"],["/categories/HackTheBox/page/2/index.html","af586d5ee12154c0702f29a588cdc441"],["/categories/Tips/index.html","ba8197d44dbbe4addc623f029dce6927"],["/categories/index.html","89e45c8d44a8effeebd6baa97f97722f"],["/categories/pwnable-kr/index.html","d8a4c162a89949e13f6d35bcda8b373c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","38691a2e5644a42c94ca3446c8d3ca96"],["/htb/hackthebox-arctic-walkthrough/index.html","b29b27cb86ebd9ae39e0845811096b02"],["/htb/hackthebox-bounty-walkthrough/index.html","e67a88519f61a46238d4cd411aae4316"],["/htb/hackthebox-dog-walkthrough/index.html","1e3b5a8e955ac34b153049177744bba2"],["/htb/hackthebox-jerry-walkthrough/index.html","3a75ca7b92a0978d717f128c93b94d74"],["/htb/hackthebox-lame-writeup/index.html","e6536f809d1253b2a8e472eebb4b207c"],["/htb/hackthebox-late-writeup/index.html","daa41c7c482e74e70f4b1b7830bca3cf"],["/htb/hackthebox-luanne-writeup/index.html","1e26b3326a6ad27039432d1d8b2afbdb"],["/htb/hackthebox-neonify-writeup/index.html","deff4f6b46cd98b5b2b942a205c43915"],["/htb/hackthebox-nocturnal-walkthrough/index.html","fb5c84f7fd7480f9c61c94720caa42ec"],["/htb/hackthebox-passage-writeup/index.html","3d0d5d8b50a833b162bdd75c000a1799"],["/htb/hackthebox-routerspace-writeup/index.html","45ef7828a18b24b3026457143128bd48"],["/htb/hackthebox-timelapse-writeup/index.html","5179074a74e9c0c874a249fc1d34ad38"],["/htb/hackthebox-trick-writeup/index.html","e846c1ef0cf78125de9d3f4363fe3c25"],["/htb/hackthebox-underpass-walkthrough/index.html","cc5e8cb1e49f4829203a1998752a2df3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","16683cd3eb2dcc5a1369693f02de4fce"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","08818f42076be0d1f2f4cf021ea2c973"],["/note/setup-docker-for-ctf/index.html","f190cd2087c842d63cc80d923d98b864"],["/note/spawning-tty-shell/index.html","c0f403f507c66721b4b22a89a87fa33d"],["/note/tunneling-and-port-forwarding/index.html","c3eefb0cb8a4f2146eb1a3a7cbbd370b"],["/page/2/index.html","362320e27b346ad456d22015f4a1644b"],["/page/3/index.html","da2c5c5d2487931b45b6526f66b8b234"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","7ba8904aa54730c73ccaaf5f60ee903f"],["/sw-register.js","67d88994c15a966ed99807b5ca51e748"],["/tags/CVE-2022-22965/index.html","006bb44ecb40ae6fb3eb008704b0935b"],["/tags/Juicy-Potato/index.html","2d1918311b29b9b29050c2569f75979a"],["/tags/OSCP/index.html","a18add80ee6a4f424f37c24615e4292b"],["/tags/SeImpersonatePrivilege/index.html","1d6032bb5b7f19df5e7ac700329383d2"],["/tags/android/index.html","2bf3cc6d1cebbdb38412357ec90f6d09"],["/tags/asp/index.html","85e78829998834b879794eee52cd7b2e"],["/tags/backdrop/index.html","683ca31c4bf2e302b2008271bb0c0147"],["/tags/binary/index.html","b092591202be188f17812419b63d33cf"],["/tags/coldfusion/index.html","49d0b3481942e94ed2d685ca4d293ce5"],["/tags/ctf/index.html","4b47c05ddaa4dbb5a7de1412cade31df"],["/tags/cve/index.html","1853ab2f79c365396af904f38dd7b62a"],["/tags/daloRADIUS/index.html","eabf1642c359f9f3c82f89b63a3efacf"],["/tags/docker/index.html","1b38510a742c5c2376d8319a3531bb26"],["/tags/exploit/index.html","193c0cf5f4470468fd25ea3e686aee27"],["/tags/fail2ban/index.html","c19e4ff23fbd19fe6abba1bb4f0813b1"],["/tags/fileupload/index.html","ddfeea8b491c892e3829991541b0eeea"],["/tags/git/index.html","d5d63c0a8aa1cc3da4a8c62951b68d52"],["/tags/htb/index.html","1f4b6fb88a952baf5192719b3a3424ff"],["/tags/idor/index.html","59627d2213fb4301c1e4d54b5414bfc6"],["/tags/iis/index.html","4b0a736bab5ad1978af2a32dac27a812"],["/tags/index.html","6af84bba0e6b04cba176c103b5cf0260"],["/tags/injection/index.html","15d64d078398ed92e6ff1f0ebc369a12"],["/tags/java/index.html","d9589bf70ea6c5916392588ba4966e66"],["/tags/lfi/index.html","472c7b4e5e1be124b872a37806720b8a"],["/tags/metasploit/index.html","fbe49f35b57a5d525d41ff1c36a61a64"],["/tags/mosh/index.html","bc44d4dd7b5036c2bc91154878067856"],["/tags/payloads/index.html","6afcfd97abb02059e2a14ff2f79fb246"],["/tags/port-forwarding/index.html","81a04c938944aee3c88263bc2f66fd7a"],["/tags/port-tunneling/index.html","a142bb43cb5585329389aa0b3f3a4227"],["/tags/powershell/index.html","0c2b9036d193eb262857c35e3a61d030"],["/tags/pwnable-kr/index.html","dc6c42e8c32091bbf027cd6657d9cd81"],["/tags/rce/index.html","f648a8cff883c7eb52e50e44f294a179"],["/tags/regex/index.html","ef04c791ae6a9898af67f89f887d0855"],["/tags/reverse-shell/index.html","93326154c2bb12b4b994cddc963d4f2f"],["/tags/reverse/index.html","1d736ac8e0a0d5984d16e07b37ab7afc"],["/tags/ruby/index.html","c262c8bd93627dcc818c7813532ca53c"],["/tags/shell/index.html","a759acadb63f5cd0374d730da5ece781"],["/tags/smb/index.html","8dbee50baf3b5bb50c6dbda213105591"],["/tags/snmp/index.html","92ceb0531a9c3a15af32b038efc92177"],["/tags/spring-core/index.html","f8553b397d50ab03f0cfcab53918b634"],["/tags/sql/index.html","d1c727aaf4f45d00e01094a73dd4b391"],["/tags/ssti/index.html","78652ab11709f0d0c7bde0997d9443ca"],["/tags/sudo/index.html","b2e8886d0d5aa5e45d6888f6d651c5de"],["/tags/tips/index.html","8b316275f1643aca94acc5114268683a"],["/tags/tomcat/index.html","44087a1d9bff4b36ade9490762ef9730"],["/tags/tty/index.html","a0176954c0fe058676217155b43860e9"],["/tags/tunneling/index.html","47e7759bf90dfcbda844407365189d4e"],["/tags/war/index.html","253678bba077950a3d9c07c1ac4280e8"],["/tags/web/index.html","8017dd08a77ada081130ea1903d56a6d"],["/tags/webdav/index.html","9a9798d0c0fca96a1ba8e743127f910c"],["/tags/windows/index.html","9d4493ad6e38288cf14506cdf409e709"],["/tags/winrm/index.html","3235833fddf87e30670d8ae5baa3ab73"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
