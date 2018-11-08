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
import { ChangeDetectionStrategy } from '../change_detection/constants';
import { NG_BASE_DEF } from '../render3/fields';
import { compileComponent as render3CompileComponent, compileDirective as render3CompileDirective } from '../render3/jit/directive';
import { compilePipe as render3CompilePipe } from '../render3/jit/pipe';
import { makeDecorator, makePropDecorator } from '../util/decorators';
import { noop } from '../util/noop';
import { fillProperties } from '../util/property';
/**
 * Type of the Directive decorator / constructor function.
 * \@publicApi
 * @record
 */
export function DirectiveDecorator() { }
/** *
 * Type of the Directive metadata.
 *
 * \@publicApi
  @type {?} */
export var Directive = makeDecorator('Directive', function (dir) {
    if (dir === void 0) { dir = {}; }
    return dir;
}, undefined, undefined, function (type, meta) { return SWITCH_COMPILE_DIRECTIVE(type, meta); });
/**
 * Component decorator interface
 *
 * \@publicApi
 * @record
 */
export function ComponentDecorator() { }
/** *
 * Component decorator and metadata.
 *
 * \@usageNotes
 *
 * ### Using animations
 *
 * The following snippet shows an animation trigger in a component's
 * metadata. The trigger is attached to an element in the component's
 * template, using "\@_trigger_name_", and a state expression that is evaluated
 * at run time to determine whether the animation should start.
 *
 * ```typescript
 * \@Component({
 *   selector: 'animation-cmp',
 *   templateUrl: 'animation-cmp.html',
 *   animations: [
 *     trigger('myTriggerName', [
 *       state('on', style({ opacity: 1 }),
 *       state('off', style({ opacity: 0 }),
 *       transition('on => off', [
 *         animate("1s")
 *       ])
 *     ])
 *   ]
 * })
 * ```
 *
 * ```html
 * <!-- animation-cmp.html -->
 * <div \@myTriggerName="expression">...</div>
 * ```
 *
 * ### Preserving whitespace
 *
 * Removing whitespace can greatly reduce AOT-generated code size, and speed up view creation.
 * As of Angular 6, default for `preserveWhitespaces` is false (whitespace is removed).
 * To change the default setting for all components in your application, set
 * the `preserveWhitespaces` option of the AOT compiler.
 *
 * Current implementation removes whitespace characters as follows:
 * - Trims all whitespaces at the beginning and the end of a template.
 * - Removes whitespace-only text nodes. For example,
 * `<button>Action 1</button>  <button>Action 2</button>` becomes
 * `<button>Action 1</button><button>Action 2</button>`.
 * - Replaces a series of whitespace characters in text nodes with a single space.
 * For example, `<span>\n some text\n</span>` becomes `<span> some text </span>`.
 * - Does NOT alter text nodes inside HTML tags such as `<pre>` or `<textarea>`,
 * where whitespace characters are significant.
 *
 * Note that these transformations can influence DOM nodes layout, although impact
 * should be minimal.
 *
 * You can override the default behavior to preserve whitespace characters
 * in certain fragments of a template. For example, you can exclude an entire
 * DOM sub-tree by using the `ngPreserveWhitespaces` attribute:
 *
 * ```html
 * <div ngPreserveWhitespaces>
 *     whitespaces are preserved here
 *     <span>    and here </span>
 * </div>
 * ```
 *
 * You can force a single space to be preserved in a text node by using `&ngsp;`,
 * which is replaced with a space character by Angular's template
 * compiler:
 *
 * ```html
 * <a>Spaces</a>&ngsp;<a>between</a>&ngsp;<a>links.</a>
 * <!-->compiled to be equivalent to:</>
 *  <a>Spaces</a> <a>between</a> <a>links.</a>
 * ```
 *
 * Note that sequences of `&ngsp;` are still collapsed to just one space character when
 * the `preserveWhitespaces` option is set to `false`.
 *
 * ```html
 * <a>before</a>&ngsp;&ngsp;&ngsp;<a>after</a>
 * <!-->compiled to be equivalent to:</>
 *  <a>Spaces</a> <a>between</a> <a>links.</a>
 * ```
 *
 * To preserve sequences of whitespace characters, use the
 * `ngPreserveWhitespaces` attribute.
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var Component = makeDecorator('Component', function (c) {
    if (c === void 0) { c = {}; }
    return (tslib_1.__assign({ changeDetection: ChangeDetectionStrategy.Default }, c));
}, Directive, undefined, function (type, meta) { return SWITCH_COMPILE_COMPONENT(type, meta); });
/**
 * Type of the Pipe decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function PipeDecorator() { }
/** *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var Pipe = makeDecorator('Pipe', function (p) { return (tslib_1.__assign({ pure: true }, p)); }, undefined, undefined, function (type, meta) { return SWITCH_COMPILE_PIPE(type, meta); });
/**
 * \@publicApi
 * @record
 */
export function InputDecorator() { }
/** @type {?} */
var initializeBaseDef = function (target) {
    /** @type {?} */
    var constructor = target.constructor;
    /** @nocollapse @type {?} */
    var inheritedBaseDef = constructor.ngBaseDef;
    /** @type {?} */
    var baseDef = constructor.ngBaseDef = {
        inputs: {},
        outputs: {},
        declaredInputs: {},
    };
    if (inheritedBaseDef) {
        fillProperties(baseDef.inputs, inheritedBaseDef.inputs);
        fillProperties(baseDef.outputs, inheritedBaseDef.outputs);
        fillProperties(baseDef.declaredInputs, inheritedBaseDef.declaredInputs);
    }
};
var ɵ0 = initializeBaseDef;
/** *
 * Does the work of creating the `ngBaseDef` property for the \@Input and \@Output decorators.
 * \@param key "inputs" or "outputs"
  @type {?} */
var updateBaseDefFromIOProp = function (getProp) {
    return function (target, name) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        /** @type {?} */
        var constructor = target.constructor;
        if (!constructor.hasOwnProperty(NG_BASE_DEF)) {
            initializeBaseDef(target);
        }
        /** @nocollapse @type {?} */
        var baseDef = constructor.ngBaseDef;
        /** @type {?} */
        var defProp = getProp(baseDef);
        defProp[name] = args[0];
    };
};
var ɵ1 = updateBaseDefFromIOProp;
/** *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var Input = makePropDecorator('Input', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); }, undefined, updateBaseDefFromIOProp(function (baseDef) { return baseDef.inputs || {}; }));
/**
 * Type of the Output decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function OutputDecorator() { }
/** *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var Output = makePropDecorator('Output', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); }, undefined, updateBaseDefFromIOProp(function (baseDef) { return baseDef.outputs || {}; }));
/**
 * Type of the HostBinding decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function HostBindingDecorator() { }
/** *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var HostBinding = makePropDecorator('HostBinding', function (hostPropertyName) { return ({ hostPropertyName: hostPropertyName }); });
/**
 * Type of the HostListener decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function HostListenerDecorator() { }
/** *
 * Binds a CSS event to a host listener and supplies configuration metadata.
 * Angular invokes the supplied handler method when the host element emits the specified event,
 * and updates the bound element with the result.
 * If the handler method returns false, applies `preventDefault` on the bound element.
 *
 * \@usageNotes
 *
 * The following example declares a directive
 * that attaches a click listener to a button and counts clicks.
 *
 * ```
 * \@Directive({selector: 'button[counting]'})
 * class CountClicks {
 *   numberOfClicks = 0;
 *
 * \@HostListener('click', ['$event.target'])
 *   onClick(btn) {
 *     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 *  }
 * }
 *
 * \@Component({
 *   selector: 'app',
 *   template: '<button counting>Increment</button>',
 * })
 * class App {}
 * ```
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export var HostListener = makePropDecorator('HostListener', function (eventName, args) { return ({ eventName: eventName, args: args }); });
/** @type {?} */
export var SWITCH_COMPILE_COMPONENT__POST_R3__ = render3CompileComponent;
/** @type {?} */
export var SWITCH_COMPILE_DIRECTIVE__POST_R3__ = render3CompileDirective;
/** @type {?} */
export var SWITCH_COMPILE_PIPE__POST_R3__ = render3CompilePipe;
/** @type {?} */
var SWITCH_COMPILE_COMPONENT__PRE_R3__ = noop;
/** @type {?} */
var SWITCH_COMPILE_DIRECTIVE__PRE_R3__ = noop;
/** @type {?} */
var SWITCH_COMPILE_PIPE__PRE_R3__ = noop;
/** @type {?} */
var SWITCH_COMPILE_COMPONENT = SWITCH_COMPILE_COMPONENT__PRE_R3__;
/** @type {?} */
var SWITCH_COMPILE_DIRECTIVE = SWITCH_COMPILE_DIRECTIVE__PRE_R3__;
/** @type {?} */
var SWITCH_COMPILE_PIPE = SWITCH_COMPILE_PIPE__PRE_R3__;
export { ɵ0, ɵ1 };
//# sourceMappingURL=directives.js.map