/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","aea32d434fe937607c543aef5bdadfb0"],["/archives/2021/09/index.html","c528dce3f221d95bd79eaf3cf8c76c4f"],["/archives/2021/index.html","78cd7719324edeb6a3a5f0e2dcd5458a"],["/archives/2022/02/index.html","7f4f86ba4f471736896daa851ff37bbd"],["/archives/2022/03/index.html","27c32543da787ab4a248c1716854aa4e"],["/archives/2022/04/index.html","62d993b019386bbc602343f8f2b9f114"],["/archives/2022/09/index.html","1b2adcf8284c070b5073009ef95250af"],["/archives/2022/12/index.html","f7957674ed0ff6f2821ec19fb419ec0d"],["/archives/2022/index.html","e5c19f0c05c76e2ab87b110d78f06435"],["/archives/2023/09/index.html","990d06b2f91c8ded64339e2bb62a1d23"],["/archives/2023/index.html","32786ce973c99945a3452fa89a641100"],["/archives/2024/05/index.html","ecfb635eb5298d318247939927954955"],["/archives/2024/index.html","63e423d74a8cfe482025a45337d8e21c"],["/archives/index.html","9694c69441eeaa3a2193ca122bea2ad5"],["/archives/page/2/index.html","f60a28e91121370a45a35d79023007ba"],["/categories/CVE/index.html","33319e005eea2e7d606946b1e3613e69"],["/categories/HackTheBox/index.html","72427eda11b266fb3d2977b5f249f7bf"],["/categories/HackTheBox/page/2/index.html","d2a91c2d983b0c724dfc6e589be792aa"],["/categories/Tips/index.html","5e88c3af764e7d773583d391a176bd62"],["/categories/index.html","7b1efb3ab9b77048d38187a36b24b05c"],["/categories/pwnable-kr/index.html","25d4bda5a1ca4e376f54515edd93117f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c17b2009cdb0825c19e6d1793a332542"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","a0cc6d7811588a5d5aa0efacf2299176"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","5642ba78c2ad75da00604584aac98d3e"],["/tags/CVE-2022-22965/index.html","060aa59df43c4904f444f37899c617e7"],["/tags/Juicy-Potato/index.html","f958446d8b211ba855b23ab0ee5e6b86"],["/tags/OSCP/index.html","97249ab257e0f903938c6705fd97c954"],["/tags/SeImpersonatePrivilege/index.html","d8f833b55edff8ef613f7b9977d6ef6a"],["/tags/android/index.html","dd9c3fc3d5b910eb3d3399649b9fc44d"],["/tags/asp/index.html","294614fa183cfb9a9120b68150230457"],["/tags/backdrop/index.html","c956ca1ce588e7d750800d5e09aec3f2"],["/tags/binary/index.html","5f229fc95bd565344cd42c11bc0a579e"],["/tags/coldfusion/index.html","8dd620643bc950ead964cfe36399d9c1"],["/tags/ctf/index.html","18ccb73a86e91f46a65a4f7c4c0c1c77"],["/tags/cve/index.html","e5b505399c9fb20bf3c1adfe3ae16925"],["/tags/docker/index.html","e81fb8717632617b20c6b07b5e213f11"],["/tags/exploit/index.html","d0a2fd95881c7772254362cf5c518dce"],["/tags/fail2ban/index.html","31f8d6a63997957f03954dbb955ae7dc"],["/tags/fileupload/index.html","fd3349535de2f8f4dc376af40e159214"],["/tags/git/index.html","cc627a377dfa9275e0a399295a896eb2"],["/tags/htb/index.html","634ca79c98810ca03cab7018df792288"],["/tags/iis/index.html","534a3532b0f9e3052411ad4910a6136d"],["/tags/index.html","e7dc67db280ef83c30ffac065d82d4a0"],["/tags/java/index.html","0db511e5f4c857d370fa9fbf1f697184"],["/tags/lfi/index.html","8102615db28cbac055c2d164c73b8576"],["/tags/metasploit/index.html","85eb88c2da7bb5316d8349db6443d845"],["/tags/payloads/index.html","eea12d7c8657dcbea6e0b38f2a99a639"],["/tags/port-forwarding/index.html","babc09a03ec660c3794b0d526d2854d8"],["/tags/port-tunneling/index.html","d8500ce9b876828541a4b760fc36f4ec"],["/tags/powershell/index.html","9dfcf5ba72fffbfc9f03f79405b76b2f"],["/tags/pwnable-kr/index.html","9ae8fee48835d5159afde02c6bcdab4f"],["/tags/rce/index.html","af6935e6607a0dd004c64e07c6a1e82f"],["/tags/regex/index.html","f734f8e2c066f3c4cb8f7d91e4c76b0d"],["/tags/reverse-shell/index.html","d55b75d043251f2e80fdba3f59f378a1"],["/tags/reverse/index.html","592ec303c6ce4aa7691b159c416848a2"],["/tags/ruby/index.html","a358f4a9c3ea7f374b437206ba67a35f"],["/tags/shell/index.html","ce81dce58125964682f1f3cbfd1a2027"],["/tags/smb/index.html","da018da503b1c4ee004156a7b82f180c"],["/tags/spring-core/index.html","07b506491f81fc0f42726ea0495bca32"],["/tags/sql/index.html","5b5ac51dd563fc03f8778b8b0b09e2f0"],["/tags/ssti/index.html","5077de893c172cc95249be5562dc59e2"],["/tags/sudo/index.html","5b5ac33ca28d02a27efd04e8672f3b09"],["/tags/tips/index.html","1e61ba77ca6362cb93de6a368114c867"],["/tags/tomcat/index.html","7f53b92c36fb5d4b405c7d79656ef33e"],["/tags/tty/index.html","2e58390af134aeccc124d135352fd659"],["/tags/tunneling/index.html","1621c8f94fa23d7c3c670ec496245837"],["/tags/war/index.html","3246e385e79105d6a3e8d8619197bd3e"],["/tags/web/index.html","6118dcf52f5edbfe3803b4c49cf9a763"],["/tags/webdav/index.html","1289fe80e0b767389f4c27497a993fcf"],["/tags/windows/index.html","68b395ab108b4464bf13c854b025de3b"],["/tags/winrm/index.html","0f893751447c1ad9a99c9fbd4d5eac13"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
