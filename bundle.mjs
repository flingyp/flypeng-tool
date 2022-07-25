function useIsMobile() {
    if (typeof window !== 'undefined' &&
        window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 生成随机整数 [min, max]
 * @param min
 * @param max
 * @returns
 */
function useRandomInteger(min, max) {
    if (min > max) {
        const swap = min;
        min = max;
        max = swap;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { useIsMobile, useRandomInteger };
