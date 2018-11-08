/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
var EventListener = /** @class */ (function () {
    function EventListener(name, callback) {
        this.name = name;
        this.callback = callback;
    }
    return EventListener;
}());
export { EventListener };
if (false) {
    /** @type {?} */
    EventListener.prototype.name;
    /** @type {?} */
    EventListener.prototype.callback;
}
/**
 * \@publicApi
 */
var /**
 * \@publicApi
 */
DebugNode = /** @class */ (function () {
    function DebugNode(nativeNode, parent, _debugContext) {
        this.nativeNode = nativeNode;
        this._debugContext = _debugContext;
        this.listeners = [];
        this.parent = null;
        if (parent && parent instanceof DebugElement) {
            parent.addChild(this);
        }
    }
    Object.defineProperty(DebugNode.prototype, "injector", {
        get: /**
         * @return {?}
         */
        function () { return this._debugContext.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "componentInstance", {
        get: /**
         * @return {?}
         */
        function () { return this._debugContext.component; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () { return this._debugContext.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "references", {
        get: /**
         * @return {?}
         */
        function () { return this._debugContext.references; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "providerTokens", {
        get: /**
         * @return {?}
         */
        function () { return this._debugContext.providerTokens; },
        enumerable: true,
        configurable: true
    });
    return DebugNode;
}());
/**
 * \@publicApi
 */
export { DebugNode };
if (false) {
    /** @type {?} */
    DebugNode.prototype.listeners;
    /** @type {?} */
    DebugNode.prototype.parent;
    /** @type {?} */
    DebugNode.prototype.nativeNode;
    /** @type {?} */
    DebugNode.prototype._debugContext;
}
/**
 * \@publicApi
 */
var /**
 * \@publicApi
 */
DebugElement = /** @class */ (function (_super) {
    tslib_1.__extends(DebugElement, _super);
    function DebugElement(nativeNode, parent, _debugContext) {
        var _this = _super.call(this, nativeNode, parent, _debugContext) || this;
        _this.properties = {};
        _this.attributes = {};
        _this.classes = {};
        _this.styles = {};
        _this.childNodes = [];
        _this.nativeElement = nativeNode;
        return _this;
    }
    /**
     * @param {?} child
     * @return {?}
     */
    DebugElement.prototype.addChild = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        if (child) {
            this.childNodes.push(child);
            child.parent = this;
        }
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DebugElement.prototype.removeChild = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var childIndex = this.childNodes.indexOf(child);
        if (childIndex !== -1) {
            child.parent = null;
            this.childNodes.splice(childIndex, 1);
        }
    };
    /**
     * @param {?} child
     * @param {?} newChildren
     * @return {?}
     */
    DebugElement.prototype.insertChildrenAfter = /**
     * @param {?} child
     * @param {?} newChildren
     * @return {?}
     */
    function (child, newChildren) {
        var _this = this;
        var _a;
        /** @type {?} */
        var siblingIndex = this.childNodes.indexOf(child);
        if (siblingIndex !== -1) {
            (_a = this.childNodes).splice.apply(_a, [siblingIndex + 1, 0].concat(newChildren));
            newChildren.forEach(function (c) {
                if (c.parent) {
                    c.parent.removeChild(c);
                }
                c.parent = _this;
            });
        }
    };
    /**
     * @param {?} refChild
     * @param {?} newChild
     * @return {?}
     */
    DebugElement.prototype.insertBefore = /**
     * @param {?} refChild
     * @param {?} newChild
     * @return {?}
     */
    function (refChild, newChild) {
        /** @type {?} */
        var refIndex = this.childNodes.indexOf(refChild);
        if (refIndex === -1) {
            this.addChild(newChild);
        }
        else {
            if (newChild.parent) {
                newChild.parent.removeChild(newChild);
            }
            newChild.parent = this;
            this.childNodes.splice(refIndex, 0, newChild);
        }
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.query = /**
     * @param {?} predicate
     * @return {?}
     */
    function (predicate) {
        /** @type {?} */
        var results = this.queryAll(predicate);
        return results[0] || null;
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.queryAll = /**
     * @param {?} predicate
     * @return {?}
     */
    function (predicate) {
        /** @type {?} */
        var matches = [];
        _queryElementChildren(this, predicate, matches);
        return matches;
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    DebugElement.prototype.queryAllNodes = /**
     * @param {?} predicate
     * @return {?}
     */
    function (predicate) {
        /** @type {?} */
        var matches = [];
        _queryNodeChildren(this, predicate, matches);
        return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ (this.childNodes.filter(function (node) { return node instanceof DebugElement; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} eventName
     * @param {?} eventObj
     * @return {?}
     */
    DebugElement.prototype.triggerEventHandler = /**
     * @param {?} eventName
     * @param {?} eventObj
     * @return {?}
     */
    function (eventName, eventObj) {
        this.listeners.forEach(function (listener) {
            if (listener.name == eventName) {
                listener.callback(eventObj);
            }
        });
    };
    return DebugElement;
}(DebugNode));
/**
 * \@publicApi
 */
export { DebugElement };
if (false) {
    /** @type {?} */
    DebugElement.prototype.name;
    /** @type {?} */
    DebugElement.prototype.properties;
    /** @type {?} */
    DebugElement.prototype.attributes;
    /** @type {?} */
    DebugElement.prototype.classes;
    /** @type {?} */
    DebugElement.prototype.styles;
    /** @type {?} */
    DebugElement.prototype.childNodes;
    /** @type {?} */
    DebugElement.prototype.nativeElement;
}
/**
 * \@publicApi
 * @param {?} debugEls
 * @return {?}
 */
export function asNativeElements(debugEls) {
    return debugEls.map(function (el) { return el.nativeElement; });
}
/**
 * @param {?} element
 * @param {?} predicate
 * @param {?} matches
 * @return {?}
 */
function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function (node) {
        if (node instanceof DebugElement) {
            if (predicate(node)) {
                matches.push(node);
            }
            _queryElementChildren(node, predicate, matches);
        }
    });
}
/**
 * @param {?} parentNode
 * @param {?} predicate
 * @param {?} matches
 * @return {?}
 */
function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
        parentNode.childNodes.forEach(function (node) {
            if (predicate(node)) {
                matches.push(node);
            }
            if (node instanceof DebugElement) {
                _queryNodeChildren(node, predicate, matches);
            }
        });
    }
}
/** @type {?} */
var _nativeNodeToDebugNode = new Map();
/**
 * \@publicApi
 * @param {?} nativeNode
 * @return {?}
 */
export function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode) || null;
}
/**
 * @return {?}
 */
export function getAllDebugNodes() {
    return Array.from(_nativeNodeToDebugNode.values());
}
/**
 * @param {?} node
 * @return {?}
 */
export function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
}
/**
 * @param {?} node
 * @return {?}
 */
export function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
}
/**
 * A boolean-valued function over a value, possibly including context information
 * regarding that value's position in an array.
 *
 * \@publicApi
 * @record
 * @template T
 */
export function Predicate() { }
//# sourceMappingURL=debug_node.js.map