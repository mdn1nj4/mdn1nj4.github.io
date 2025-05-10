/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20750ec911975635308d1dcdebdf0949"],["/CVE/cve-2022-22965-build-and-attack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","d6c512d095a8b8564e64efe0bff2d600"],["/archives/2021/09/index.html","878e22038b45faee6836d5ea15cac3ec"],["/archives/2021/index.html","1d8a8e4384b28222632ec1108ea67a5c"],["/archives/2022/02/index.html","0052508e0c5b406c4b576c15fa6e4c31"],["/archives/2022/03/index.html","16403db107a078d62bab23a6aa5af936"],["/archives/2022/04/index.html","6cebb0f912880374a70e1b7b08f328e6"],["/archives/2022/09/index.html","3c3b261cc84a3d4f1729d4562647ec1b"],["/archives/2022/12/index.html","e25f170af9683d90db22f6e9ff9b7699"],["/archives/2022/index.html","2a103b088b05f2b651da0e0ca817a881"],["/archives/2023/09/index.html","93cf53e67a6fe84a3b7401b9908108c2"],["/archives/2023/index.html","36e783db85758296a43499e60719bd07"],["/archives/2025/05/index.html","947cca46e20b2ae7dfad869d85c97beb"],["/archives/2025/index.html","08283644912f43ccaa94dea2c288db3d"],["/archives/index.html","85744b83c75febc51d14e2ed81eaa18d"],["/archives/page/2/index.html","8a53d16f1843d6e2f3a171c9ce4f2100"],["/archives/page/3/index.html","dc566e8aa2871311af8262163955e114"],["/categories/CVE/index.html","59e5b0243de4bd20df28843dfb6d0f4b"],["/categories/HackTheBox/index.html","cf232f88bde4417744a74eb07a07d8bf"],["/categories/HackTheBox/page/2/index.html","a56c6ef358d699d048ecb3cc617b5147"],["/categories/Tips/index.html","2046cc13127284bf9ad2af8135de004a"],["/categories/index.html","6afc3a82b558456012b1df44f9db8916"],["/categories/pwnable-kr/index.html","5348aaea56494f85ccd48da8d5d3ef61"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-arctic-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-bounty-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-dog-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-jerry-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-lame-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-late-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-luanne-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-neonify-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-nocturnal-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-passage-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-routerspace-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-timelapse-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-trick-writeup/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/htb/hackthebox-underpass-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1a841fd02314f80fc80ac64b9e8793eb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/setup-docker-for-ctf/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/spawning-tty-shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/note/tunneling-and-port-forwarding/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","463c15cef2ac02a638ed331ec4ea3984"],["/page/3/index.html","76e9b221bb69c53356300888e5ed867c"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","ef97a22a2a6b9e52386c7357a13d0f7d"],["/tags/CVE-2022-22965/index.html","bb1aa19d078680a513c11371e874b6a5"],["/tags/Juicy-Potato/index.html","9653c29a3401688176fbac637f2291be"],["/tags/OSCP/index.html","babe22b9153b1f783e6db5cd5ab955e7"],["/tags/SeImpersonatePrivilege/index.html","3ec1cf2eb7c56927eae5109a56305939"],["/tags/android/index.html","c4570be5cbab11f535e019b0522bcb51"],["/tags/asp/index.html","ad8baaab07d4f2a80b3a3e40aead4300"],["/tags/backdrop/index.html","240c41151c7bcd82a746c6f6c25093a1"],["/tags/binary/index.html","61de2af87104b974c88861818249316d"],["/tags/coldfusion/index.html","c4a4cdca9ed18e47521b2e4d92dc47cb"],["/tags/ctf/index.html","b555c5813e9259a4de8b8b729bd2a9cc"],["/tags/cve/index.html","ec76e99a4ac0f770e71f6fb0e28a165b"],["/tags/daloRADIUS/index.html","6d3427df989f333e14f1541f6dceb9a9"],["/tags/docker/index.html","fb02fde8550c455cb9ea48783bd521c1"],["/tags/exploit/index.html","21b93aa2c682e3fe5945b776a26b9d27"],["/tags/fail2ban/index.html","de48686a7c6fd36e5385fda37169eaa8"],["/tags/fileupload/index.html","e2bbf05ef9ef00c2a838b55e949cfff8"],["/tags/git/index.html","793d4b7afdda26d0feee3b5bef669067"],["/tags/htb/index.html","44ce9a81c7acdb9d869491b5c7f0f3ec"],["/tags/idor/index.html","d884ce4c6934b9c485b976704d36995c"],["/tags/iis/index.html","67fde1f5d59cbba2a36a98dc128bfcbb"],["/tags/index.html","9b279223544180a834488658f0fb4699"],["/tags/injection/index.html","f6fe35cc2a9899bda46e2a8d30efcd50"],["/tags/java/index.html","c3c24721419f523c7b2c0882607d6e8e"],["/tags/lfi/index.html","9d4649db4790562571a426e05568fb25"],["/tags/metasploit/index.html","680ea6a3a082348f037d2fcb4c6b8c4d"],["/tags/mosh/index.html","0f0901ad9ae4914393c077bc7b27f253"],["/tags/payloads/index.html","116856f6a1da3805e001e56a54187dd6"],["/tags/port-forwarding/index.html","49f66fc42b36cacd23d5543eff00707c"],["/tags/port-tunneling/index.html","eb98ade975bc42124b4d5e1b8d5f3b89"],["/tags/powershell/index.html","7ba56e68f59a90e0a1bebd4bb861e008"],["/tags/pwnable-kr/index.html","05d4e725cc55b1347ea3da309deac70b"],["/tags/rce/index.html","ebea199ba7428f30a2aec5ac3acb74da"],["/tags/regex/index.html","be687702db04f10b894318b9e34b7856"],["/tags/reverse-shell/index.html","5629c169b19480819e297efcce6d7a0a"],["/tags/reverse/index.html","a4fadcb826a59c1569126dd6b10af367"],["/tags/ruby/index.html","788ab9225b86823d85cfa7eee4f5ec1b"],["/tags/shell/index.html","079e62ffd03833603210fc55860ad3f7"],["/tags/smb/index.html","7f843a16c5d453654de20dff3b6c7116"],["/tags/snmp/index.html","cfb5c436c47dff3fee1759b982ab0ed5"],["/tags/spring-core/index.html","782dc1f5c4200985250c7a8d4d2be20d"],["/tags/sql/index.html","54fe728c917a6d7b68019229a36c6ff6"],["/tags/ssti/index.html","3f2d830930cdbe86221e79102a997bbd"],["/tags/sudo/index.html","00530b4be84103387ef9caafa8f22bd6"],["/tags/tips/index.html","402f48d21be1afda5c08920ee85c7395"],["/tags/tomcat/index.html","1322f67a5253157231e79bcd89a2c48d"],["/tags/tty/index.html","b090b2c2de81049af5860085b137cee4"],["/tags/tunneling/index.html","4d8d7f9d714d47e9445fc55a2f8744ca"],["/tags/war/index.html","0e55a34dd0505d5c0ad416610f05e1ea"],["/tags/web/index.html","d07c522cd801c3410e0603a55cf5f234"],["/tags/webdav/index.html","d562051b5bcaf7ab99c870bdd8db690e"],["/tags/windows/index.html","f9b6f7f28bee0f1fa7c55cad61b0e1c2"],["/tags/winrm/index.html","07210ec4e69e57df117bd575e2379410"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
