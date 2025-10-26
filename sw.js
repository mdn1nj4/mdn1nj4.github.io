/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a752eb2e7f22e098cf99f804bc1b824"],["/CVE/cve-2022-22965-build-and-attack/index.html","2dc342e9c15ac97616fd847f6bf7d09d"],["/about/index.html","8289fae3ed9411e9c9df20a88ce22be3"],["/archives/2021/09/index.html","8099ce3fa3561fc629795c027f2a36f2"],["/archives/2021/index.html","2e1d4e57ecaa1e183aa8dc495da4da84"],["/archives/2022/02/index.html","a29f51c44e252b9654f624097cf4163f"],["/archives/2022/03/index.html","d2449d134ed59bdc11eacc22878f85a6"],["/archives/2022/04/index.html","5623667d01d4b612f3d1420fb0a72597"],["/archives/2022/09/index.html","5753546cadc7562b1e372de24d6623c8"],["/archives/2022/12/index.html","40f687790d410d8fae34f6fd5aa02e8f"],["/archives/2022/index.html","43b8f001d1a31a1e4d5a38bf1db45fda"],["/archives/2023/09/index.html","51c7b5133be66a8f8d51512530526717"],["/archives/2023/index.html","1f5bed8bd6f3171f92398552fb7c7c11"],["/archives/2025/05/index.html","c2c0d9cd42811e36bef9afefb8305c80"],["/archives/2025/index.html","ac578197b14137a200e6d0401e142d38"],["/archives/index.html","36bb06f41a359a501980b82dee4436aa"],["/archives/page/2/index.html","865cc576964ffb29a0b6768b347adc17"],["/archives/page/3/index.html","d7eebe2ec4e44891518cca8a9419a5c7"],["/categories/CVE/index.html","e0a6f0af6bdc18c21d48a69387e36a89"],["/categories/HackTheBox/index.html","5f5d9914ff292356e0a30a28d49fb1da"],["/categories/HackTheBox/page/2/index.html","c0803df6ce829f72f676c0724f266be7"],["/categories/Tips/index.html","c7f13324e1bdf194c6f2da453a530756"],["/categories/index.html","eaf157552af6c7de695b5d6acfae755c"],["/categories/pwnable-kr/index.html","c3d202b2f689cb6078482fa5b0dbf182"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8bc32639f09d508722cc54802f986f2c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/htb/HackTheBox-Granny-Walkthrough/index.html","d0dfa7471fe1775d383adf47ece5ed19"],["/htb/hackthebox-arctic-walkthrough/index.html","72c904b8caa5feb0313a6ada90b3a026"],["/htb/hackthebox-bounty-walkthrough/index.html","e9634418b2c0d7ac9b65c48a513512cf"],["/htb/hackthebox-dog-walkthrough/index.html","2c179d502aa458dc6fe3e526d223d647"],["/htb/hackthebox-jerry-walkthrough/index.html","e2e6cae7f80acc863b5b8f5bc96fb854"],["/htb/hackthebox-lame-writeup/index.html","e5cf130a54f99b06a5654ba847b251a9"],["/htb/hackthebox-late-writeup/index.html","2b55e5e96ddc6ec618de05805b889642"],["/htb/hackthebox-luanne-writeup/index.html","7a16d9d6779d8cffd8808de8fc117273"],["/htb/hackthebox-neonify-writeup/index.html","77118078e59b456e60d49dd3f128012c"],["/htb/hackthebox-nocturnal-walkthrough/index.html","089bbc8c2a44376753a7da1ba2420584"],["/htb/hackthebox-passage-writeup/index.html","470ee93cac5bbe0b627816735ba14faa"],["/htb/hackthebox-routerspace-writeup/index.html","392467d7a4489337623ce41ba9d2dbb0"],["/htb/hackthebox-timelapse-writeup/index.html","8506ffd62687fc008ebc470b0206522e"],["/htb/hackthebox-titanic-walkthrough/index.html","630910dacdcb75029d4fc2b1dfaef1b3"],["/htb/hackthebox-trick-writeup/index.html","ee8b60ed6807bae5aaed085ea7a4ca72"],["/htb/hackthebox-underpass-walkthrough/index.html","5b2301033e5284e4ec46ed548e0ce2dd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ca04f73e81a8627aa78456e13b8032c9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/note/reverse-shell-cheat-cheat/index.html","9781d565664d6c2a616682dee6ab9fa0"],["/note/setup-docker-for-ctf/index.html","fa2776c24628964a288fe19aa0c273e8"],["/note/spawning-tty-shell/index.html","69fb67a926f1420f7449c1dc0247f36a"],["/note/tunneling-and-port-forwarding/index.html","53233eade01550b5007f6aeda2553964"],["/page/2/index.html","cfa1aa59c71c8de54518d8d14dca4513"],["/page/3/index.html","a53d11b8f5fcd3aa95934b3204e4931b"],["/pwnable.kr/pwnable.kr-fd-walkthrough/index.html","c7e15974aaf9b403174ab3264d0dc962"],["/sw-register.js","1157ea04e7dc6a2398bda9ed9fc66886"],["/tags/CVE-2022-22965/index.html","23cccd5bb7a17db1427d4d581a889afe"],["/tags/Juicy-Potato/index.html","3833db9667c44c36bb04b4c8323e3268"],["/tags/OSCP/index.html","13d29ade8a33e91a0f2d7fb3c30d0d5d"],["/tags/SeImpersonatePrivilege/index.html","748224fd901de319349f9c3798a86e5a"],["/tags/android/index.html","12618ac214075cef05f4106500b0d60c"],["/tags/asp/index.html","d40f35d47c430b3ed310be3bfe4a77f2"],["/tags/backdrop/index.html","055b2fa9c7f797d4e56b113f9411943a"],["/tags/binary/index.html","c16f908306d2db04ef50d7b935cb0a50"],["/tags/coldfusion/index.html","df4993cec5abae6043d0223107193af4"],["/tags/ctf/index.html","781def9f069f78db7f1603b21ff28fe5"],["/tags/cve/index.html","0b68480b46958b3fe98a971b1e9f0097"],["/tags/daloRADIUS/index.html","02a15bdf484c16c4df486a679c0260a3"],["/tags/docker/index.html","8593841b3992263b23842c854e8ef63f"],["/tags/exploit/index.html","57db109e28c32dd3d2489b523657376d"],["/tags/fail2ban/index.html","0ab78d85dd515ee12d6a02d968e0742a"],["/tags/fileupload/index.html","f533ba450a9f2097dfe2b981a573beaa"],["/tags/git/index.html","033150f16abc5da459716c317f8448f7"],["/tags/gitea/index.html","9b7d99ab437dd16ee2c0788f70293009"],["/tags/htb/index.html","b63a7b988323e05732df485b6881a698"],["/tags/idor/index.html","7524505ea6b41d8554a65f36f8d784be"],["/tags/iis/index.html","0d6b9c1532f115621bc220acbb9463c8"],["/tags/image/index.html","84edc54d7f9a51e4fda186c4d3d7363b"],["/tags/index.html","0ebd622d96784bf50eee968bb4d27a71"],["/tags/injection/index.html","e5d049b60bd77ea11d2da20db50d7746"],["/tags/java/index.html","d80dfb4b0ac712ff76dd91b514849853"],["/tags/lfi/index.html","460995c40e1f6b7ebeb72444a5fafeb3"],["/tags/metasploit/index.html","3c8a3a6015fda512b694c0ca661299ba"],["/tags/mosh/index.html","573d1ee8d1f7cd3be72d2a65a6a12d39"],["/tags/payloads/index.html","87653b9dbe866d6bd1e566411c4c1851"],["/tags/port-forwarding/index.html","9fc608fbcddebdcae19bf9599e8f206b"],["/tags/port-tunneling/index.html","57113d266d2332dc213cc9ab31728c0c"],["/tags/powershell/index.html","a8abab31983be56290927dd157f15263"],["/tags/pwnable-kr/index.html","2aed0867bad3f7d7c66d0059c6bd8904"],["/tags/rce/index.html","90534f9e2327cf6cdbf543bffd365b99"],["/tags/regex/index.html","fb196d1fea19732cf0f5bc92d6052130"],["/tags/reverse-shell/index.html","05c3682d789d6d1186ce14d955fd920c"],["/tags/reverse/index.html","3b3327f293806103207abec0ed538597"],["/tags/ruby/index.html","e91180c4d1efc220a2f64abde9671e2b"],["/tags/shell/index.html","bb8191bfc086852a49c2ff0fb3827415"],["/tags/smb/index.html","6bd84f08bb04ed69e978284e9f8530df"],["/tags/snmp/index.html","dd87399b9525ca08afee1b2cd176652c"],["/tags/spring-core/index.html","a458a8b2dce30ff7019d9e80ede6bef5"],["/tags/sql/index.html","b854070106a71e4cc3ffe1b503bc024c"],["/tags/ssti/index.html","8c6f5bbd8f469d471baa88df25f298a5"],["/tags/sudo/index.html","1d233ceac0006eb8679d38012de4be0a"],["/tags/tips/index.html","86f6af4cf030cae82086f010ef174d11"],["/tags/tomcat/index.html","7e7c038560f4a1c1d0b26dd866890687"],["/tags/tty/index.html","0b271ff22aaeb5dfb61089e2b917c98c"],["/tags/tunneling/index.html","36a6183776cfb76c509907260e75fa43"],["/tags/war/index.html","96273e47ed12cc907a0adacef55e2393"],["/tags/web/index.html","3c2bedb99c844a198a0ba650b7ac4d6b"],["/tags/webdav/index.html","9de443d6595cecd0734811f7ba2ce132"],["/tags/windows/index.html","10d4a1c5d4b58476da34bc8e9bed6084"],["/tags/winrm/index.html","338374ac1b086ac0703846b08d724a64"],["/uploads/avatar.jpg","63e08440da3ed839ea63594976e22dd0"]];
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
