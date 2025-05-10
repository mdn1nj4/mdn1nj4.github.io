/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","08a76b551094ef5f2200bdb7cf611e94"],["/CVE/cve-2022-22965-build-and-attack/index.html","4acd9a05141ae1f0dfaa407ae9c47740"],["/about/index.html","60c899f9fb1d1295c5bd4cb25de11414"],["/archives/2021/09/index.html","b40a2bbd00b718011f30dd28498a0fb1"],["/archives/2021/index.html","6f6eef679232b5a209730544c7cf0783"],["/archives/2022/02/index.html","3c491884ec3045a252dca14afbdb20b5"],["/archives/2022/03/index.html","fb3c6dd05fdce270e4fd05524ea08c23"],["/archives/2022/04/index.html","66e58eac57d07d5d78ea4d9800de23bc"],["/archives/2022/09/index.html","935ad9e4434a3489c1dcb5f644c9391f"],["/archives/2022/12/index.html","88dc48253823301fa7a9be2a1ceab19d"],["/archives/2022/index.html","5bb99f8a4c6bf9d26f2d53c51b56bcb9"],["/archives/2023/09/index.html","18014437b01b0f40ba4c47916eeb8109"],["/archives/2023/index.html","10a23861c9b3752907e229bfd18eebde"],["/archives/2025/05/index.html","b79aa06b6a89c3062d08ae25078f4f16"],["/archives/2025/index.html","3ce644580734b2b6fa0ea5b212d7e75b"],["/archives/index.html","fb7a6a5a998774d75ce962ee8ba1f7e3"],["/archives/page/2/index.html","03a964acc0b8bf0684b5fa0a4c0bf1bf"],["/archives/page/3/index.html","f9de05d57d95f223d9f9ac1da3c3619e"],["/categories/CVE/index.html","2cd5a01821696dd24be32fe5816553a8"],["/categories/HackTheBox/index.html","e7548fe9346d08d223a646ecab7521f2"],["/categories/HackTheBox/page/2/index.html","e4ddd9f8f4e7f8fd81687cff60a3741f"],["/categories/Tips/index.html","972ccd1c704540cfff0462039d8653f0"],["/categories/index.html","fbe82c7c6f9d9ffb03d6a9117845aa16"],["/categories/pwnable-kr/index.html","c4ae4f049ccf62b26d66a5c5c9c3eb5f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","99527d822cb0e684a80aad43ff0c522c"],["/htb/hackthebox-arctic-walkthrough/index.html","08801dfa8ad593a5dbab7df3a32483a3"],["/htb/hackthebox-bounty-walkthrough/index.html","c302520f057d7cee69ad9e39ca275e1a"],["/htb/hackthebox-dog-walkthrough/index.html","00d33d80828518f66dd62a33f481c6a5"],["/htb/hackthebox-jerry-walkthrough/index.html","02214060df107c12ee393f00fd32f433"],["/htb/hackthebox-lame-writeup/index.html","974b5021072c70a0c341694d3524a8ed"],["/htb/hackthebox-late-writeup/index.html","8eef27e93e6d400ecb129b704f6bbe53"],["/htb/hackthebox-luanne-writeup/index.html","a2fb1624ad72d07b52bb320065df3b07"],["/htb/hackthebox-neonify-writeup/index.html","04d5c3a82218d00296d107fd9835d89d"],["/htb/hackthebox-nocturnal-walkthrough/index.html","1e9b9091de8726ffbe4222e86c112a18"],["/htb/hackthebox-passage-writeup/index.html","98eb2b318d8174f3c9e068e52b8509e2"],["/htb/hackthebox-routerspace-writeup/index.html","23a968785450b5096ce97f10a2a48953"],["/htb/hackthebox-timelapse-writeup/index.html","d6ddf0aeaf18f18137d65c829d432747"],["/htb/hackthebox-trick-writeup/index.html","76df328413686d0d23eca765f54a4cc8"],["/htb/hackthebox-underpass-walkthrough/index.html","8ff1e0d1942e3ea95e2c2ed7378696bb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","561bd75dacfe972f35774eb93e0524c1"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","2a8a4e8b892734f8085f1711a0114af9"],["/note/setup-docker-for-ctf/index.html","a4f691018b8f73fbf7a97552f0ec2d66"],["/note/spawning-tty-shell/index.html","71a9f775fee1d4a108b150833dce6655"],["/note/tunneling-and-port-forwarding/index.html","b276f3b0b95d2d6e270104bfa6b108d1"],["/page/2/index.html","9120b679f84a59fc29c6ea28ff664bad"],["/page/3/index.html","d33117737ae487d6aa8725f4f328b797"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","daf904f098809cdce6dac896b5654855"],["/sw-register.js","b9a9a86fee532894efcba4ef5e5a06a7"],["/tags/CVE-2022-22965/index.html","6c0f4a14ef22558e8a83539313508bf1"],["/tags/Juicy-Potato/index.html","4191de4bfe8912d3deb04f946b4a0a1a"],["/tags/OSCP/index.html","f3f13266e7cb1d511356189d58315fb0"],["/tags/RCE/index.html","04dea9a7d98f9d4f123b51c1ebfb997e"],["/tags/SeImpersonatePrivilege/index.html","8f8f97bbdd25f6430a731fc500334c4f"],["/tags/android/index.html","869136ed1d9a4a02f72adc6fa5674d38"],["/tags/asp/index.html","0a6ffaff490439c8377fb8f72eee0a8f"],["/tags/backdrop/index.html","ce4b6097d5adb7aa487ad1bc838322ac"],["/tags/binary/index.html","328f472f5a3ff25e373cb92ca08add34"],["/tags/coldfusion/index.html","7da5be94685efa6218f47aa2e1157d11"],["/tags/ctf/index.html","c4695b0fbe6b51b422daa084edff29cc"],["/tags/cve/index.html","f212c4b5f22118028e94c12d86d15194"],["/tags/daloRADIUS/index.html","e08759c11749a7e2a39b794896f4f506"],["/tags/docker/index.html","91f1d1d070a490e1ed19966b8f0985f5"],["/tags/exploit/index.html","068e8a2cffeedb2375e9ea9d9b96b6d5"],["/tags/fail2ban/index.html","b964bf3dacf7a44abc921cd31ec9a17e"],["/tags/fileupload/index.html","11d7f32cbb52bf2234e8fd566b4f4fcb"],["/tags/git/index.html","d7b5746ccfc1a659b44ace021beb21e5"],["/tags/htb/index.html","abdf1ea9ed3851b68f1814aa6766d405"],["/tags/idor/index.html","b5b02890e50dfe9d06be1db2432512aa"],["/tags/iis/index.html","c61b045d517a1a4e4bf5428b9a7da53a"],["/tags/index.html","04c523453b24e800c4d503c8ee369ba5"],["/tags/injection/index.html","8c32c2bafe1295daf50c918381a1ce9a"],["/tags/java/index.html","94f173664891a3559914f15e3dfe9162"],["/tags/lfi/index.html","5b4f4b30539e08bfda0da710f6514ad7"],["/tags/metasploit/index.html","83a4133247b87e63933d60438731c7b9"],["/tags/mosh/index.html","cf29782491f8d1fc34585f5f83dad622"],["/tags/payloads/index.html","86843a6661e4c2c8ca7ec83ac7b52036"],["/tags/port-forwarding/index.html","7a972a2315095d8e507a825f961b810e"],["/tags/port-tunneling/index.html","14ef27300ae62fd0f1a53e5649d91020"],["/tags/powershell/index.html","e5ac0b68d319795d60e0b51234250d1d"],["/tags/pwnable-kr/index.html","98511c56e5db47b17c1f8e8c1088e3f3"],["/tags/regex/index.html","9d6e72b0043525882ab124b742fa0410"],["/tags/reverse-shell/index.html","b92b96f61f534b4986b5b06be0c46146"],["/tags/reverse/index.html","7f3c5bc31293a7a11d9224487a07a580"],["/tags/ruby/index.html","e056898a5fe370ba18abfc3677cfc4fa"],["/tags/shell/index.html","9f667d174dbf8b90799878b34cba47c4"],["/tags/smb/index.html","38707548699d4b12eac07c98a9391a82"],["/tags/snmp/index.html","fe9bd43bc4d7b2aac0d4557b4c42ab82"],["/tags/spring-core/index.html","64bac9249840343010e4aad7d6f5e432"],["/tags/sql/index.html","c256c520a5dc45f1e6a8dbc839762334"],["/tags/ssti/index.html","44415aa8bb07d5df40c70155398de75c"],["/tags/sudo/index.html","d28bcdd86134b3bd200329da3042aee9"],["/tags/tips/index.html","8fc0eb52f3eb2d1b50d22c3b5ab03bf1"],["/tags/tomcat/index.html","68ab477d7af97bbdefe31f4ae3b4c46c"],["/tags/tty/index.html","863bd97c4c1296cf8c165e7c9f0bd0bb"],["/tags/tunneling/index.html","38da9d555bf8922b223a84eb40957543"],["/tags/war/index.html","246dc1907ec3f2108d4c2998172e29a3"],["/tags/web/index.html","fc61b024cd2aef71ed031eec876571df"],["/tags/webdav/index.html","ae561b7af9c60ce304e9ad09b2bb22e2"],["/tags/windows/index.html","ea02bb7089aac74debe82ceab0ee5f4d"],["/tags/winrm/index.html","50a83283ce5515e7197c57f151d22572"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
