/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","2b001fa0258b1325422e0a60b017cec8"],["/archives/2021/09/index.html","99e951b71e6918881bfaacf5ec802972"],["/archives/2021/index.html","cd9a7e8338673d28564635238266e0b4"],["/archives/2022/02/index.html","d8f9aa1c3046614f432d7530a960825e"],["/archives/2022/03/index.html","988abc63e9cf8af5865cbb3f35095deb"],["/archives/2022/04/index.html","7e84285d20096eef939faf76744c6655"],["/archives/2022/09/index.html","e3833d589e27aa9362ae2063d9de9d1b"],["/archives/2022/12/index.html","8746ff56665ea4f680bf1d5635904042"],["/archives/2022/index.html","7fcfcd786ef1ffa6ed191ea11bc8e282"],["/archives/2023/09/index.html","14c0f0546c3a76d46f6b8c55b966875f"],["/archives/2023/index.html","b12348fd35d6fcfd16c625d9f1f5e398"],["/archives/2025/05/index.html","a161fa54afea8c677f3f7141a3e7adf8"],["/archives/2025/index.html","84074060afad16d3e3b6fdfd663d762e"],["/archives/index.html","4164ecd3c66effce9ab3906d18a26cd9"],["/archives/page/2/index.html","6f14c8b37659a74efac230c2204b2f95"],["/categories/CVE/index.html","0b579643b37a7fc23036398a5b1a04d9"],["/categories/HackTheBox/index.html","95cb0914a71d57086f9d2dd4cbd56d72"],["/categories/HackTheBox/page/2/index.html","28c7e70cd6fcfeb1f8552d7535c04e38"],["/categories/Tips/index.html","b5c19517f707df1a27a784b5f8bcb271"],["/categories/index.html","f9d6335be4f159fb0e76a9e5b4ea22ce"],["/categories/pwnable-kr/index.html","cb46a7884394978d8db77720c2712776"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0f18067a07df23bc7d970ad0029da3b9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","e88f18785cf5618db95c703ccc9d24dc"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","2a7168406bb58f3fd7f7d3e980403a30"],["/tags/CVE-2022-22965/index.html","e54bdb3271339394812e12090d5ba058"],["/tags/Juicy-Potato/index.html","cb1f575080f0d1431565838731ca9806"],["/tags/OSCP/index.html","0640dd52c802e46f731e2d9db22c6580"],["/tags/SeImpersonatePrivilege/index.html","c4e7f8418e697e11c3c03f4781ed1cc4"],["/tags/android/index.html","28bef9bf0277c04235a2e8e373c83a02"],["/tags/asp/index.html","51ef8bb9fc17761829d77c762e54828e"],["/tags/backdrop/index.html","69bf6bbbd81291a8392d93b377453718"],["/tags/binary/index.html","7b7fe95c9d19b1e615a9780e788b5658"],["/tags/coldfusion/index.html","6b6b14fe3c2925f6e8dc3338777136f9"],["/tags/ctf/index.html","214249533544b8c33dfd7dbb9f4593ce"],["/tags/cve/index.html","31ffb148f76a0766c808a286c5cec4bc"],["/tags/docker/index.html","f50191e6b2652498908d45e4e2605f26"],["/tags/exploit/index.html","97e14950caa688647ac5306a1a73fa0a"],["/tags/fail2ban/index.html","6f3911cdc45fc885511feb999d222a84"],["/tags/fileupload/index.html","9d24052ebf5c7c0e91cb459428b6f4ba"],["/tags/git/index.html","721a9cbd0397b58599efc0aae5edccbb"],["/tags/htb/index.html","d0567a5fc197aa5512047d4b6964a60e"],["/tags/iis/index.html","1d54d49f5b6b160c832a1828d34be521"],["/tags/index.html","abc94114544109ec6a77e196eda4372c"],["/tags/java/index.html","3dedf909b3c8400a02f1ee0a0a58bc7f"],["/tags/lfi/index.html","5596b3198398e710d7497cd78248c710"],["/tags/metasploit/index.html","3f9b28fa61b05489c010d7802bd1bef2"],["/tags/payloads/index.html","bd5448a2652d8de5986ba3b8486ba918"],["/tags/port-forwarding/index.html","81efab1bfbbdaa5aa138144030ff536a"],["/tags/port-tunneling/index.html","4e271f1ddb8262b74c701f2eda0aa3e4"],["/tags/powershell/index.html","e8f93663883fc0bd7eef9305b464fd79"],["/tags/pwnable-kr/index.html","ad54601a1cc1f295bf5e5a134da4e5b9"],["/tags/rce/index.html","9a8417ccc8e91e37f18c1bd7370a17c8"],["/tags/regex/index.html","86a1af6389d8a5746c1efddee207bd2d"],["/tags/reverse-shell/index.html","bd37f833f4e90a8692f6107f22b654c9"],["/tags/reverse/index.html","1aa10d76edfba8e0544076bb8da80647"],["/tags/ruby/index.html","d5cd47fe0bdf9c3dd3fc40846e48b961"],["/tags/shell/index.html","3ccd93a515c07e329f63366ca99233ba"],["/tags/smb/index.html","2df93a8bb187091e1aedb7c4000bc108"],["/tags/spring-core/index.html","907cad46f6ac9e61ef42aeeffc132b47"],["/tags/sql/index.html","b3a55095ee351cf4badf99a4331050c8"],["/tags/ssti/index.html","88165b0173bc3eee708425078f01c9f8"],["/tags/sudo/index.html","71012d6a85fb53ee380b529055ee1f10"],["/tags/tips/index.html","50106a26df05b17abc8dabe119dbd784"],["/tags/tomcat/index.html","c6a2640c1f7b57d3c4d05aa8c4362de9"],["/tags/tty/index.html","d892e961c7819cb8212956cb59583344"],["/tags/tunneling/index.html","3d02cfe54694656ab709fe87636f3695"],["/tags/war/index.html","bcdf08b48444fc173315de54475c882c"],["/tags/web/index.html","605c2fbcca9dda5123bf04685cf59f21"],["/tags/webdav/index.html","e3f0c892c40d23f9fe1d475a03f8200c"],["/tags/windows/index.html","d752ced9056af63e3a8eeb878579948d"],["/tags/winrm/index.html","3e1b2463c6fbf45ce57072ef96b2212a"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
