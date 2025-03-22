/**
 * 预缓存资源
 * @param {string} urls 待缓存的资源URL
 */
const addUrlsToCache = async (urls) => {
  // 打开/新建一个Cache对象
  const cache = await caches.open(CACHE_NAME);
  // 批量请求+缓存资源
  await cache.addAll(urls);
  console.log("成功预缓存资源", urls);
};

/**
 * 删除所有旧缓存
 */
const deleteOldCaches = async () => {
  const keyList = await caches.keys();
  const oldCaches = keyList.filter((key) => key !== CACHE_NAME);
  await Promise.all(oldCaches.map((cache) => {
    console.log(`删除旧的缓存 ${cache}`);
    return caches.delete(cache);
  }));
};

const fetchAndPutCache = async (request) => {
  // 如果用户断网，则不在后台更新缓存
  if (!navigator.onLine) {
    return;
  }

  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
    console.log(`成功更新缓存 ${request.url}`);
    return response;
  } catch (error) {
    console.error(`资源 ${request.url} 请求失败: ${error.message}`);
  }
};

/**
 * 优先使用缓存，并在后台重新请求+更新缓存。如果请求不在缓存白名单中，该函数就只是个fetch()
 * @param {RequestInfo | URL} request
 * @returns {Response}
 */
const cacheFirst = async (request) => {
  // 判断资源可被缓存
  if (CACHEABLE_URLS.includes(request.url)) {
    // 判断资源在缓存里
    const response = await caches.match(request);
    if (response && !response.bodyUsed) {
      console.log(`资源 ${request.url} 命中缓存`);
      // 在后台重新请求+更新缓存
      fetchAndPutCache(request);
      // 立即返回缓存
      return response;
    }
  }

  // 如果没有缓存，就做一次fetch
  return fetch(request);
};