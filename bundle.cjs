(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ToolBundle = {}));
})(this, (function (exports) { 'use strict';

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

    exports.useIsMobile = useIsMobile;
    exports.useRandomInteger = useRandomInteger;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
