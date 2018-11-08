/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { global } from '../util';
import { getComponent, getDirectives, getHostComponent, getInjector, getRootComponents } from './discovery_utils';
/** *
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 *
  @type {?} */
export var GLOBAL_PUBLISH_EXPANDO_KEY = 'ng';
/** @type {?} */
var _published = false;
/**
 * @return {?}
 */
export function publishDefaultGlobalUtils() {
    if (!_published) {
        _published = true;
        publishGlobalUtil('getComponent', getComponent);
        publishGlobalUtil('getHostComponent', getHostComponent);
        publishGlobalUtil('getInjector', getInjector);
        publishGlobalUtil('getRootComponents', getRootComponents);
        publishGlobalUtil('getDirectives', getDirectives);
    }
}
/**
 * Publishes the given function to `window.ngDevMode` so that it can be
 * used from the browser console when an application is not in production.
 * @param {?} name
 * @param {?} fn
 * @return {?}
 */
export function publishGlobalUtil(name, fn) {
    /** @type {?} */
    var w = /** @type {?} */ ((global));
    if (w) {
        /** @type {?} */
        var container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
        if (!container) {
            container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
        }
        container[name] = fn;
    }
}
//# sourceMappingURL=publish_global_util.js.map