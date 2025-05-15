/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","696a7e016f275d32e4c0653a1a541554"],["/about/index.html","5c8d9825fd1e809af98004ac26858799"],["/archives/2021/09/index.html","5cfcc95c170f5e72404446e7621d688b"],["/archives/2021/index.html","4d71fac440a01cd5af235f7b7643417f"],["/archives/2022/02/index.html","f2d576f546cd2bffc3cfcedf86f8add5"],["/archives/2022/03/index.html","39878d597a5a7dfb3f81bbf08d5b5a19"],["/archives/2022/04/index.html","2e61de6ca1b2b0d9ee623ef78b58e605"],["/archives/2022/09/index.html","ac2d82b7788d3c6bf5d56a403f189192"],["/archives/2022/12/index.html","5540465b430c42235627f8068d5ad51c"],["/archives/2022/index.html","40a5a2ac2695837403e33a75ef27301c"],["/archives/2023/09/index.html","1570eaea7b235aac6ee4eda7a5ac2c49"],["/archives/2023/index.html","f97deae1e6f89c5f0cb4634f79d4c325"],["/archives/2025/05/index.html","915324dda8f2fff34964977cb2c9aaa6"],["/archives/2025/index.html","0ea93a2f3037151251ffd340adcf3fbd"],["/archives/index.html","92747399ba987e7429d0005ec40b9095"],["/archives/page/2/index.html","6f6a5bc1032a01d7347b2a4b648fd0fe"],["/archives/page/3/index.html","c4c8a07927b71a91bf6db19c64468830"],["/categories/CVE/index.html","a280380a252ce04f467d2c304c44ded8"],["/categories/HackTheBox/index.html","34d6c55733f1791d27274d204f0ad469"],["/categories/HackTheBox/page/2/index.html","da71fee2fcb4d9ef6abfd431187e606a"],["/categories/Tips/index.html","f0c09f70765fe3e7d5695571d466fa04"],["/categories/index.html","45234b59a8d87be1094f3e19c75583c1"],["/categories/pwnable-kr/index.html","9cdfd0457b42bfc206b9b47f8238c73f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","c10303e0e54fd4d5d7eda6ab41ab7675"],["/htb/hackthebox-arctic-walkthrough/index.html","83a834d59f9f2cd0964c343297ad5d90"],["/htb/hackthebox-bounty-walkthrough/index.html","96e5858b8d9d5af2e68085fe683dbe37"],["/htb/hackthebox-dog-walkthrough/index.html","13797430e4cc53c84768d90ade386740"],["/htb/hackthebox-jerry-walkthrough/index.html","3dcabf8fe272f41ee5b950a47daa894b"],["/htb/hackthebox-lame-writeup/index.html","6ac70e5b5f46f7922e3a3759f64d0006"],["/htb/hackthebox-late-writeup/index.html","9ba0e2d69f146e837cf7ac8d17e1bc16"],["/htb/hackthebox-luanne-writeup/index.html","9d9397948924c44710710ff8b4fc3c98"],["/htb/hackthebox-neonify-writeup/index.html","8590ee5449e1c0579aa27e080bb59d41"],["/htb/hackthebox-nocturnal-walkthrough/index.html","fea28b37948a63adfb47f02504fd29f9"],["/htb/hackthebox-passage-writeup/index.html","d223200987a4b118ffd4578c2c764e89"],["/htb/hackthebox-routerspace-writeup/index.html","9a01a63214fc9f212a04a162f52b90fa"],["/htb/hackthebox-timelapse-writeup/index.html","2e86d917af0b6e8fa75be13b4ef9dca0"],["/htb/hackthebox-titanic-walkthrough/index.html","e6f9d31acaa82af0c54ec815d0c98d45"],["/htb/hackthebox-trick-writeup/index.html","3383acdcf1ec733a24cfbcc6e7d4204c"],["/htb/hackthebox-underpass-walkthrough/index.html","374a93ed4ccea3d5482f1d5c37d6c5fe"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","50f6b36813b14c3844f8054408022939"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","e623b69e526b252161dda1c1edf8f05c"],["/note/setup-docker-for-ctf/index.html","fa2776c24628964a288fe19aa0c273e8"],["/note/spawning-tty-shell/index.html","b3e664302453b78119fef7d763067161"],["/note/tunneling-and-port-forwarding/index.html","fee0e1c7bbb46e8e039037d847d507db"],["/page/2/index.html","c9b0158533c7358fa8024bfd9e792928"],["/page/3/index.html","972ad2c06fc81e1760408030fd8e1e54"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","ed2b6f7839db06e89063e53e07eb602e"],["/sw-register.js","9e860eac9ff29dd58cd91f617d290031"],["/tags/CVE-2022-22965/index.html","25aaec8af3759c3e874b331ab745bb5f"],["/tags/Juicy-Potato/index.html","7d690101d18f02452ceef25338eac776"],["/tags/OSCP/index.html","878e801ad3d145bace95f8d716f2bc31"],["/tags/SeImpersonatePrivilege/index.html","4b2700e6ca8726f6d81f56d9a5761477"],["/tags/android/index.html","78950661a16fff3698a0519149026bfd"],["/tags/asp/index.html","3453dd788bb1e786a7e2d9ab02daa9bf"],["/tags/backdrop/index.html","020a3556d32755f827e13662ef4b20b2"],["/tags/binary/index.html","9bd61946f3e8dbbf71c76d822ea9d2e5"],["/tags/coldfusion/index.html","337551d154e14f7a6a8eff40fc465677"],["/tags/ctf/index.html","5ae9c534a3d234276adfbd6c7a241fdd"],["/tags/cve/index.html","5fc986d2f2278c47231baca0d735e528"],["/tags/daloRADIUS/index.html","5364d13c7ee7ce1b3c8330ecca36b688"],["/tags/docker/index.html","7a716afa351c84c0ed70089dd6f029c5"],["/tags/exploit/index.html","35aa40ec5353b786d08f332840a8d4f7"],["/tags/fail2ban/index.html","ee760c8d42f21f02e482c527d433639f"],["/tags/fileupload/index.html","b9c3aa366d66b7b7dd87e0e1f88a66df"],["/tags/git/index.html","6599a9bac96383cfd15f9d26c7b738f2"],["/tags/gitea/index.html","a4391e1201f665a1dca520ceeeccf906"],["/tags/htb/index.html","00345b83e855c016d24ec69d9602a521"],["/tags/idor/index.html","e44e38f42128b0496e09fac3176132ab"],["/tags/iis/index.html","dc93e6cc76f78241f198e19d490cc7ce"],["/tags/image/index.html","b5856251d0e3dcbc2f89aa876b9a2485"],["/tags/index.html","2a8dd9681119f1a32ee3a889eab3acfa"],["/tags/injection/index.html","7e2e2249839d9a273889930c046f23bf"],["/tags/java/index.html","549796e40d1e8a2e0d094a2cdf36a280"],["/tags/lfi/index.html","7f929673e449c4d09af42d01919ba459"],["/tags/metasploit/index.html","d3458cee393ba627e0d8138288109f35"],["/tags/mosh/index.html","577ec0c193056187c77911bf6c5ca159"],["/tags/payloads/index.html","503e87c4e91df226373c0d7f11abdb98"],["/tags/port-forwarding/index.html","b04f90e038b5d44635b8e58b2f24bec7"],["/tags/port-tunneling/index.html","8f03e37489bbdfd4895bec48c3e135db"],["/tags/powershell/index.html","9a897154f59eb0664f3bc5f16c8e00eb"],["/tags/pwnable-kr/index.html","be14625d424b854daf52b7252d45cda1"],["/tags/rce/index.html","3454575748904204260577a460efdd26"],["/tags/regex/index.html","f2bead6dc35958b3a742a3c44a95ebaa"],["/tags/reverse-shell/index.html","b106bfc6ffa9a11f8236388fd3a0d6cd"],["/tags/reverse/index.html","5005855da15cf23549f19a2f921add44"],["/tags/ruby/index.html","310cc764c0b6fa1f3c38b2ef06e9caab"],["/tags/shell/index.html","ee69549749a0afbb5bd0c274041ff15c"],["/tags/smb/index.html","03b853b9822bd899ca84476fee58cf80"],["/tags/snmp/index.html","3d52ec587ab09aac19436a642c97d615"],["/tags/spring-core/index.html","16c3b98c8fdb08bde32091d0540a91c7"],["/tags/sql/index.html","c105f75f66f4037f47451619614a648c"],["/tags/ssti/index.html","1089af2b73aefea9f8fe9ed4cccd27c8"],["/tags/sudo/index.html","fe3e968da4a8c3ffd9fe0fdb3be1f53c"],["/tags/tips/index.html","dd9b645071aad3c5168fced3bf62a8b2"],["/tags/tomcat/index.html","d147d363faaa4e5acc37952d746a6c9b"],["/tags/tty/index.html","5efe7f07d8ffd07a06f0f5a6cdec928c"],["/tags/tunneling/index.html","157463cf4ef68043889ff9644c775827"],["/tags/war/index.html","ac07f05861708e74b17af049e32e8c08"],["/tags/web/index.html","e3d1d00db368484052e6a83d750054e7"],["/tags/webdav/index.html","0898e7838b29722b69ca757fa5f54a03"],["/tags/windows/index.html","d6156220b7f63527b25ba9eb6c20ca25"],["/tags/winrm/index.html","1e20152b2bc4400688236da6c57c2b43"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
