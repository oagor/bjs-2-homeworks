//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args);
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value);
			return "Из кеша: " + objectInCache.value;
		}

		let result = func(...args);
		cache.push({
			hash: hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCount++;
		if (timeoutId === null) {
			func(...args);
			wrapper.count++;
		}
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}