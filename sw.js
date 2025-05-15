/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","2dc342e9c15ac97616fd847f6bf7d09d"],["/about/index.html","697de475dc81aab1bdfa065f06106f98"],["/archives/2021/09/index.html","fd4779458cc0da260571ee1ff899b08a"],["/archives/2021/index.html","a3782ed1d17a172df2dc6d6d9322dd7e"],["/archives/2022/02/index.html","4ab79cfc95bb61ec70e296e16b7b05bd"],["/archives/2022/03/index.html","00929e7097ceaedbfeefde5e06ce1b92"],["/archives/2022/04/index.html","4aabc25580c3d7850b70699193bda862"],["/archives/2022/09/index.html","ffb1fefa6ad67c5e05a75b8dbb7e422d"],["/archives/2022/12/index.html","b87cd8fe46dc9d4eb0d892bab463f9ae"],["/archives/2022/index.html","a03d56d542b085ef41bfb26803712274"],["/archives/2023/09/index.html","a083770ca8b868d3a4e7344d30fc55b0"],["/archives/2023/index.html","e38c4a34b274e9cc857ed13767edd912"],["/archives/2025/05/index.html","d6ac0454853949162e38ef8cd6810d91"],["/archives/2025/index.html","314e0453980c03af1edc0bb78d547d4e"],["/archives/index.html","8e0af99af33a489a8f841513475a7e41"],["/archives/page/2/index.html","af0385d41c56b66187c7ebe2ff5221f4"],["/archives/page/3/index.html","85d462064f5bd8bd24c3ac65b62ea3db"],["/categories/CVE/index.html","2e81bf874bfb5629a355dbfd16472dcc"],["/categories/HackTheBox/index.html","f67ab54ea6817ea7b16a43565bf2f7af"],["/categories/HackTheBox/page/2/index.html","e1f71f6f638dd477f6fb982fc590bad9"],["/categories/Tips/index.html","f18204c90fa43eed314b569a4cc5222e"],["/categories/index.html","b3756e7d94dc1ec289841da7b4e404ac"],["/categories/pwnable-kr/index.html","a39fbe430d1764c2e928cf2bc1940cc6"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","7d5500c1cddb01daf90f693c0e70bcd1"],["/htb/hackthebox-arctic-walkthrough/index.html","72c904b8caa5feb0313a6ada90b3a026"],["/htb/hackthebox-bounty-walkthrough/index.html","e9634418b2c0d7ac9b65c48a513512cf"],["/htb/hackthebox-dog-walkthrough/index.html","bc380c035cb6f2aa978200e3f7412fe4"],["/htb/hackthebox-jerry-walkthrough/index.html","e2e6cae7f80acc863b5b8f5bc96fb854"],["/htb/hackthebox-lame-writeup/index.html","6ac70e5b5f46f7922e3a3759f64d0006"],["/htb/hackthebox-late-writeup/index.html","6dd98dc8be4260f44abe4f136ecb541f"],["/htb/hackthebox-luanne-writeup/index.html","5a1e6e41021559284fdffe754eeb0c67"],["/htb/hackthebox-neonify-writeup/index.html","77118078e59b456e60d49dd3f128012c"],["/htb/hackthebox-nocturnal-walkthrough/index.html","ebfaae9999bd0a6d01d2bd9d64894668"],["/htb/hackthebox-passage-writeup/index.html","d3bdf5b0fdc24c3ee24ada0368ca04a6"],["/htb/hackthebox-routerspace-writeup/index.html","8dc16d8510e2491039039b5211df20eb"],["/htb/hackthebox-timelapse-writeup/index.html","45b89fc59b532e2f93434ca6d86cea99"],["/htb/hackthebox-titanic-walkthrough/index.html","cd8dac641479d0bf2516e8f948b96e78"],["/htb/hackthebox-trick-writeup/index.html","76f3fcb494ce50d0d9cd9557fdc90162"],["/htb/hackthebox-underpass-walkthrough/index.html","57cdbf57098eba0fb243cfa501a4f12a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","310eb296365b530ae31d5b701c32bcfb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","b22091105ad00933132c3af56456c1b2"],["/note/setup-docker-for-ctf/index.html","fa2776c24628964a288fe19aa0c273e8"],["/note/spawning-tty-shell/index.html","ae7c297a398116729512830ea9998b94"],["/note/tunneling-and-port-forwarding/index.html","fee0e1c7bbb46e8e039037d847d507db"],["/page/2/index.html","ca9dad25209b0c307a58e6db8d328918"],["/page/3/index.html","51847044a941192ee70667ff7f9ff5ff"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","1ae937688b341021870abed2fb84eb6d"],["/sw-register.js","145d43bd5df1eed3ea645e50634aa015"],["/tags/CVE-2022-22965/index.html","666d3df1478cfaca42cc221792e8b0d5"],["/tags/Juicy-Potato/index.html","49cfdd801ef3878391c0ccc78335b704"],["/tags/OSCP/index.html","e3286ed4c7ce3e0c96df2554eeaa1533"],["/tags/RCE/index.html","c98c81a451fb1d4c16ab7a3ca83244eb"],["/tags/SeImpersonatePrivilege/index.html","ca5864ff8f77ad5609e2ad7be11419ea"],["/tags/android/index.html","16df4643fd3729d21d0f9e1213afa04c"],["/tags/asp/index.html","576279089b97e8df1dac711ed0a0f2bd"],["/tags/backdrop/index.html","7c8123508f0c1094c8a4eedf7b28fa8e"],["/tags/binary/index.html","60ba7021661191dd33fb9be634dd3271"],["/tags/coldfusion/index.html","c896bd516b2f741fe370f71517ab4534"],["/tags/ctf/index.html","5a8a3e7b092249e6db72bbdc48450257"],["/tags/cve/index.html","a5c4242a0079dc0727626d6a0050dcd8"],["/tags/daloRADIUS/index.html","b4fd800ef79b241aea76e31eac243974"],["/tags/docker/index.html","df1d712ef200d751e15a9a975fb67472"],["/tags/exploit/index.html","464d381b8d1f9120c374cbac60829831"],["/tags/fail2ban/index.html","8356f0c03b3ba586297a56936c90a925"],["/tags/fileupload/index.html","db06c9f7b1f2703ba6725e74f4ec2fb8"],["/tags/git/index.html","41d37557a47c889dced12022f7b3d58a"],["/tags/gitea/index.html","e61bd10880391ae3109785f3c69fcf0b"],["/tags/htb/index.html","2e9d8d19027741e8d8519a7b90e748a5"],["/tags/idor/index.html","aac716b4fc13a06a8a2fa9c72705b4bf"],["/tags/iis/index.html","75e6eea0086d81b1302f60e0cbb84006"],["/tags/image/index.html","d05de71d26538ebfda9ed55132413e30"],["/tags/index.html","044ce4144a040bde0351050a48d4b576"],["/tags/injection/index.html","8d81f97f249441be9d1aef76d040eebd"],["/tags/java/index.html","92fbcc5671a26b1fa4a03558f8fe130c"],["/tags/lfi/index.html","305374ac7a1a406f8fb9cfce97f1beae"],["/tags/metasploit/index.html","511741c499e003fefe19ee9d00d6c0a4"],["/tags/mosh/index.html","1be6259e79513a7c6e197c7a6244b0ef"],["/tags/payloads/index.html","e1a8d803289193d69b7502f8ba28cbf3"],["/tags/port-forwarding/index.html","736b507f42c7d7d9c3be43901cfb788f"],["/tags/port-tunneling/index.html","8d2bf42251b339b136638b3930643269"],["/tags/powershell/index.html","2a993ccb2154b54df5fe128c493dd383"],["/tags/pwnable-kr/index.html","0dfbcd05684b20aed96e312c51c5ff50"],["/tags/regex/index.html","b469310d27d961422f6bf6a761497071"],["/tags/reverse-shell/index.html","a0f0aafa4ecb287f024c8b539cecc0ac"],["/tags/reverse/index.html","5a22292071ab40ea81ce7d252815d4e6"],["/tags/ruby/index.html","f3e0182f1e8cb683cba842db8e1e019f"],["/tags/shell/index.html","2a86016a5816a4b0e26934f89e8b0da3"],["/tags/smb/index.html","27bc3284667ebdd3231c583f94908f89"],["/tags/snmp/index.html","91a44b9c0a8d9969c3704ed7b6fec5ac"],["/tags/spring-core/index.html","52f72ff2a3574c0df005b1fc2465530d"],["/tags/sql/index.html","7fb0ffc332b24c17f4a1dd154e29679e"],["/tags/ssti/index.html","d65de73e3c20ff18231d09458c11dc15"],["/tags/sudo/index.html","c23a901bfe0e377e9569186edbb5f81d"],["/tags/tips/index.html","067bcfcffb89b0490ad8f1f3875e8f1f"],["/tags/tomcat/index.html","9d23ae4b9616cf1c0f631990d86d4ef9"],["/tags/tty/index.html","255c450a2d16cdb8ea0a0f3f7503f0a0"],["/tags/tunneling/index.html","f937703e0719d188f8fabc6a64f1cf87"],["/tags/war/index.html","43d6c870c8e84234052f147308e6e475"],["/tags/web/index.html","8ed048cab0a220a7993afb703fef8007"],["/tags/webdav/index.html","37ab45b8ca80491ff723b5d544011ef0"],["/tags/windows/index.html","051a52f1103bcd29467b152a2ee379da"],["/tags/winrm/index.html","fd295aaf5e124c5e464a6fd297bc1527"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
