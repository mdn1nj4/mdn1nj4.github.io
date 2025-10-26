/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","2dc342e9c15ac97616fd847f6bf7d09d"],["/about/index.html","a9355ebe6c594e518e641e9a5e4870b1"],["/archives/2021/09/index.html","7ad7e684185f98b47a2309c1f3a808f1"],["/archives/2021/index.html","b0e486e695a91fabf30ba4ae82fb4aee"],["/archives/2022/02/index.html","824a36f2a5f8e4eb4be1a3515ca6904a"],["/archives/2022/03/index.html","4bec240906e6bd9406ce8df56df5589a"],["/archives/2022/04/index.html","acdd9c4b096afb528bfaa03e62606318"],["/archives/2022/09/index.html","591f2dbc972e6cb0b7ff7cca5762bbfb"],["/archives/2022/12/index.html","26eb973fde9ec2ae20176682369e65b8"],["/archives/2022/index.html","a6c704da53ef9ae8ceef4076ac50e157"],["/archives/2023/09/index.html","7e9e25db1f31cfddaa2f60ed1190ca3d"],["/archives/2023/index.html","d1d84557c61be0c51f73b8f2210670fe"],["/archives/2025/05/index.html","e9c86ea4a49537f31be8aa4445a3c1be"],["/archives/2025/index.html","ef40b4204bb3c027e145c83bc5d70fc4"],["/archives/index.html","1a819310c736463da92bb127b3f16302"],["/archives/page/2/index.html","9f20de456e54390d40c2e4521e68d039"],["/archives/page/3/index.html","8e71c80b47adf5465d60e2b13dcbdfa3"],["/categories/CVE/index.html","66add8e4ecd6e50368f811de4e4eeabb"],["/categories/HackTheBox/index.html","c6ebb6b7f3464eed685b8dbbe9f676a1"],["/categories/HackTheBox/page/2/index.html","fc359ecdfce9f6de5bd8dd8a657e0373"],["/categories/Tips/index.html","4dae59e4294c266169fb2bd4e911aea3"],["/categories/index.html","c5b0113248c05352132084edb0176b85"],["/categories/pwnable-kr/index.html","edd020172dcc4f20e100b083d412baac"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","40a42118fd04eb17c3e34633d3cbfbdd"],["/htb/hackthebox-arctic-walkthrough/index.html","104ee692890b69613995572b77bd6229"],["/htb/hackthebox-bounty-walkthrough/index.html","86a38eaf852c72729d15483bf391ed87"],["/htb/hackthebox-dog-walkthrough/index.html","d4ae1c7affc4da3641205cd983a79166"],["/htb/hackthebox-jerry-walkthrough/index.html","bf02ed0d2e2d1f784c73b6d6826eef8b"],["/htb/hackthebox-lame-writeup/index.html","e5cf130a54f99b06a5654ba847b251a9"],["/htb/hackthebox-late-writeup/index.html","f03e6262b26b475ca6620f2bf67706c8"],["/htb/hackthebox-luanne-writeup/index.html","f4d0be4a8be0470e02e66840a427e477"],["/htb/hackthebox-neonify-writeup/index.html","77118078e59b456e60d49dd3f128012c"],["/htb/hackthebox-nocturnal-walkthrough/index.html","bcf179cb626392339c68d8d6d147d781"],["/htb/hackthebox-passage-writeup/index.html","411962a1b50979c50dbf263a11305ab8"],["/htb/hackthebox-routerspace-writeup/index.html","2dde2a3dca81b42b9a37113df378fbc4"],["/htb/hackthebox-timelapse-writeup/index.html","73bbdb95d368d06b8706ec3659d77583"],["/htb/hackthebox-titanic-walkthrough/index.html","7c87a3c3124e242f5a4862c6007f6c5f"],["/htb/hackthebox-trick-writeup/index.html","e837cfc1137b060c5b758de89cdf8b8b"],["/htb/hackthebox-underpass-walkthrough/index.html","3d5ee9e75e90cb8a3f04fd23b24b6c55"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e7246b5c3acf9d56a83f2cb5bcf9911e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","9781d565664d6c2a616682dee6ab9fa0"],["/note/setup-docker-for-ctf/index.html","fa2776c24628964a288fe19aa0c273e8"],["/note/spawning-tty-shell/index.html","e413cec531d1504b18cd1a28fcfffaa7"],["/note/tunneling-and-port-forwarding/index.html","53233eade01550b5007f6aeda2553964"],["/page/2/index.html","6ae6dfe6d5e4dcf3e26a99e76e836830"],["/page/3/index.html","1ccabddd2f5b9316bc3e27db036349a5"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","ac40f3ede6dc52b15e4e5fd3856b9c53"],["/sw-register.js","a7aa4710b36d910dac80d2715340e766"],["/tags/CVE-2022-22965/index.html","545c3abc2cefcf051cf05d7262d6997b"],["/tags/Juicy-Potato/index.html","539ce758e8e35054069e71bd2135bf16"],["/tags/OSCP/index.html","3f826a56dee1d428c608c98e8cb15301"],["/tags/RCE/index.html","58981a6c528cb5f185355d3c29df5264"],["/tags/SeImpersonatePrivilege/index.html","5617df68af2e901afdad82968980b4cd"],["/tags/android/index.html","61a65fa919f6efb91e22b77215ebe45e"],["/tags/asp/index.html","ec0e7cfb43f93db5f9d2f8e36e8cea9e"],["/tags/backdrop/index.html","5b7d5725c989ebb753b1507ab84ae47b"],["/tags/binary/index.html","2e609e28204817475c644a99060e6b4d"],["/tags/coldfusion/index.html","a235115284c28bdb9295b4a2a75a53dc"],["/tags/ctf/index.html","a592daff1aa6d292a77515f96f21a11e"],["/tags/cve/index.html","e97c95679de45ef654be1e7a95453d42"],["/tags/daloRADIUS/index.html","5003268195ec5928ba96ab6cb23c2c10"],["/tags/docker/index.html","8e24be63a8d3b62ef346c5d22ff40aed"],["/tags/exploit/index.html","ee09ea6abf4db70582a83f98a7885b39"],["/tags/fail2ban/index.html","9f39d9c1183a9ca1c9f6e12bd6d7edb7"],["/tags/fileupload/index.html","88ddd9b0bf65a13fc3e98443d580bfb8"],["/tags/git/index.html","3f545922e6d3c44592434d0a6bff742d"],["/tags/gitea/index.html","f113286019163fa10c1f746cfe8a49fb"],["/tags/htb/index.html","87f745e8a280d1a07a2d2fef299f90af"],["/tags/idor/index.html","b20607582d6eb8da0038044353c5974a"],["/tags/iis/index.html","8290272096cebe56963d56fc1a2d7339"],["/tags/image/index.html","3c4dbcb5621b1684a851719097677617"],["/tags/index.html","992942419b2d2ab63abd98b92bea5182"],["/tags/injection/index.html","c4f1ae0b318ae881e3a2f53f05f5ac5c"],["/tags/java/index.html","cbf2a3fb4268248fddfb2c3a48cd814f"],["/tags/lfi/index.html","8df7781b0155290fc5a63b505e1cd5a1"],["/tags/metasploit/index.html","f919ef1fb6ec5e4b657f3f7121809d4d"],["/tags/mosh/index.html","36729d8910f397c118bc4790720c9c97"],["/tags/payloads/index.html","557e54262e6bd77d2c127ec41d216f0c"],["/tags/port-forwarding/index.html","bc612ea1b11a3de308b2ccd2fbb91cd5"],["/tags/port-tunneling/index.html","2dd9534031fc40f7cb56e639ed23583b"],["/tags/powershell/index.html","e3fb454931103e591623f273bc7168de"],["/tags/pwnable-kr/index.html","fbc4e2c00ac352f19db25bfeeb0ba46c"],["/tags/regex/index.html","f8587b3d392248a229aae01edac692db"],["/tags/reverse-shell/index.html","64a48f234aeb7c6afb6bf7e2f8102a44"],["/tags/reverse/index.html","a143efa017c33a5a00970d356430ca00"],["/tags/ruby/index.html","3c4ee9645f8d0c141ead5dad91427127"],["/tags/shell/index.html","fb86004e5aea8f9e99afbf675b49be45"],["/tags/smb/index.html","e4243fdaa7b9c9cf2412c7e55147ce58"],["/tags/snmp/index.html","9cf4f03896823d9773c182bd5c078971"],["/tags/spring-core/index.html","5bdd2f7686c3a40e61a5b69650c087eb"],["/tags/sql/index.html","83a979049ccb5b339f14495027ca32cd"],["/tags/ssti/index.html","21b1b7a0d5906fdf8b9f40a35fdf822a"],["/tags/sudo/index.html","701cfdf12e638299d2836db0d405ed7c"],["/tags/tips/index.html","f4983974dac0661c3e270bf1d59bb4b7"],["/tags/tomcat/index.html","5896a55a923c5872be78fa5ee04cabe7"],["/tags/tty/index.html","c8073183bf2d939238900086526d75de"],["/tags/tunneling/index.html","66275282b8a8a833aec695165d0e6e68"],["/tags/war/index.html","1627173c71969930dca3a2811d4ce20c"],["/tags/web/index.html","ec8085bd32dc9f2bbcb690e4ae5a7ca4"],["/tags/webdav/index.html","30798ced0033d3729027dc2b889bb7a7"],["/tags/windows/index.html","6baa48008cd6fb8b2d870219e4b340d8"],["/tags/winrm/index.html","52f6966d09572d7f60cecb00b65aa10f"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
