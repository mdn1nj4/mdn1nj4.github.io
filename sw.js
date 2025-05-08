/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10193a6f39817f9f46201ffc960cadaf"],["/CVE/cve-2022-22965-build-and-attack/index.html","e76c9a1ece3f996efe1c4c6634cb0b64"],["/about/index.html","af0df26bc9099cf71bc9992addc886ab"],["/archives/2021/09/index.html","a2f453c91eefca51d0a75314422bbbd6"],["/archives/2021/index.html","c038745ea08030ae134386aa4dbfeced"],["/archives/2022/02/index.html","78e48309c62b87c273577f532d5448fd"],["/archives/2022/03/index.html","b153f1a839751d7224bf89a8f8c81e83"],["/archives/2022/04/index.html","51363200eaeefecd4b6f6f51386ed25e"],["/archives/2022/09/index.html","8f46950d4ca8abf57217694858087172"],["/archives/2022/12/index.html","e51f147ed5c2ecc087beb38ef1e0ecfb"],["/archives/2022/index.html","0d8a47332352710f9164c8ead2914199"],["/archives/2023/09/index.html","d4e997ce708adda1584b26b7b5f658a0"],["/archives/2023/index.html","29c6ed29670420e2aee29e7fcc44bba4"],["/archives/2025/05/index.html","d594c171457daf900c9bb1a735fe0bb5"],["/archives/2025/index.html","6eef096c0b139ed8e91bee3a805d7785"],["/archives/index.html","2efc0c7aab84238486933db2ecc40b9f"],["/archives/page/2/index.html","9a612d25ed057c1b8a7d06a9cdba0d58"],["/categories/CVE/index.html","a07658d9f27fd63fcc9337db60983094"],["/categories/HackTheBox/index.html","e69796890fa7896e32933486ad485e03"],["/categories/HackTheBox/page/2/index.html","28260b52e5ac2b86b9f85b7dad6ea8a9"],["/categories/Tips/index.html","2dfa60cde13ca98d527080194b51c241"],["/categories/index.html","cb68457b16cec3fd5014ee6aa5adf583"],["/categories/pwnable-kr/index.html","edd11c3d370f86dbb9ac2fe9ecbed472"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b7588979e0fead0239c44f7cce026c69"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","432c3d0d7a72788d8d4e154c0c815522"],["/htb/hackthebox-arctic-walkthrough/index.html","66b77255ec958c2baf7c1cb89b9c017f"],["/htb/hackthebox-bounty-walkthrough/index.html","0c0ed1799f059060742e356025a9a2dd"],["/htb/hackthebox-dog-walkthrough/index.html","0eb342e386e63b121baaf01cf4537e2c"],["/htb/hackthebox-jerry-walkthrough/index.html","3d047a26e2f8815f515fa7aa4fa3a50c"],["/htb/hackthebox-lame-writeup/index.html","832a7835de976f1149a34e0848d146d6"],["/htb/hackthebox-late-writeup/index.html","776f650e9db64a4c8cebff785c43541c"],["/htb/hackthebox-luanne-writeup/index.html","59712bdf2da7a6795636c9e1f43770b6"],["/htb/hackthebox-neonify-writeup/index.html","8e8e8cd1fb85b8f6023f8d4c66f45de9"],["/htb/hackthebox-passage-writeup/index.html","593955e8e77477bb4525dbc09643e3fb"],["/htb/hackthebox-routerspace-writeup/index.html","4270222a3d7236e000e5ea0e24f84b33"],["/htb/hackthebox-timelapse-writeup/index.html","af7eb916fd9c5f699e85c5b12d41d256"],["/htb/hackthebox-trick-writeup/index.html","9d252d7217910c0c73d42a23d4500f08"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c7a0f20eb16d3227be959d18e8450487"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","c5478fa630bf328b64b88e039e5f7008"],["/note/setup-docker-for-ctf/index.html","760548687930c1e51589412b8582c2d1"],["/note/spawning-tty-shell/index.html","595e963953f8bb768444bf09d127cd35"],["/note/tunneling-and-port-forwarding/index.html","ee14a53fa74e7bd2da137ed066b86f50"],["/page/2/index.html","7e2ce403140a98d20672394ae98ad994"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","bfde6ddec9a632b60850c8e4836d276a"],["/sw-register.js","333df771f6e8ace7f189138fc9414637"],["/tags/CVE-2022-22965/index.html","b05224f553ad6b1272c1a839a6dc9eae"],["/tags/Juicy-Potato/index.html","8cf1d958a26df0a0991faf6055d42008"],["/tags/OSCP/index.html","9dc50f54db6db7d223f88b414c219c26"],["/tags/SeImpersonatePrivilege/index.html","0d143f5d3f66adfd20ce3686881dc0b8"],["/tags/android/index.html","0512e67f702c03bdeb169b8237729349"],["/tags/asp/index.html","2048275a2fa9d0ad8da56e4574d02230"],["/tags/backdrop/index.html","6792b30f4de5a25d6daf71ffa3449825"],["/tags/binary/index.html","de9f649e2e21ea523eb1683230ec3ea1"],["/tags/coldfusion/index.html","1f3aeb6c5c2ecf59adc267a4edd20799"],["/tags/ctf/index.html","4a9b57429f588c6192a22d18f40785bf"],["/tags/cve/index.html","4a9c69bcb3608d2923f857779af35ff1"],["/tags/docker/index.html","929c03b38ca848bb934677429951c5a5"],["/tags/exploit/index.html","eb317d041448f1f1371e4fa6d5e32022"],["/tags/fail2ban/index.html","120ee4f2a2eb718986ba132570fd163e"],["/tags/fileupload/index.html","cd9b0bfb64fa8d86ae0356868363feb6"],["/tags/git/index.html","cd15af6d7a5704eb131639e6093688b3"],["/tags/htb/index.html","c61d81c782009caf9ddb29892f696950"],["/tags/iis/index.html","f0427f31a2494840e3e1ad5270ac5c2f"],["/tags/index.html","5b9fb25b123edf473f1e73c8efc6dd2e"],["/tags/java/index.html","a7836230d4caa6b8651580eeff1bbac3"],["/tags/lfi/index.html","81074b5be2f786257f3d27d9382c00dc"],["/tags/metasploit/index.html","6614b58bcda919929bb64bd09588807e"],["/tags/payloads/index.html","ea7c7a450a4389ca254ab488a894e3d8"],["/tags/port-forwarding/index.html","f8014d315fe259b88eda35d723998459"],["/tags/port-tunneling/index.html","98ca34cfd592f8d543d95baff969fc39"],["/tags/powershell/index.html","4ca4c69211502688a25a1609d310e790"],["/tags/pwnable-kr/index.html","7ebd0e2bb2ba9689ef0e7b3bec6b4bf8"],["/tags/rce/index.html","c621275eb8ca896419f68f5cfac65bf6"],["/tags/regex/index.html","d71ea9b1c7cf3f4889729b2d06717ae5"],["/tags/reverse-shell/index.html","9d0c9dc5975f8e7e72829c2036bf6bff"],["/tags/reverse/index.html","4670fe1068499d961edaf183b41da87c"],["/tags/ruby/index.html","b67a8bc5ecde8871963ede994bbf8974"],["/tags/shell/index.html","ed0172366f6c72dd61cdc9d118166214"],["/tags/smb/index.html","ca2349d2cbc8de018eea645a5f0074b7"],["/tags/spring-core/index.html","7ed32b9b3ec3e28beb4509ad8929581d"],["/tags/sql/index.html","ebeb795b928080ec98aa513c02c515cc"],["/tags/ssti/index.html","a9c76ca0df99102c6c11e5874db8c211"],["/tags/sudo/index.html","a6af2b3104fdf5033a97bf30184a170d"],["/tags/tips/index.html","dcdb415eb2f7ced4cbc4d0222377cb82"],["/tags/tomcat/index.html","4c07c61760be1def4d8a6bbeb60106bb"],["/tags/tty/index.html","354b04466ad3294b098079ca319837a2"],["/tags/tunneling/index.html","a28b48380a534bcc463672cb21a67303"],["/tags/war/index.html","7bad58fc5c9e83e594bace859c4f4f37"],["/tags/web/index.html","fd12d644c55cda1e75cd38e16ce3b22c"],["/tags/webdav/index.html","267403a6666374f6643a12a80a41a59a"],["/tags/windows/index.html","4a751cf9b0577f97b443723bb3d0c69f"],["/tags/winrm/index.html","06b7151cfc82e565e677a13c1c2226ba"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
