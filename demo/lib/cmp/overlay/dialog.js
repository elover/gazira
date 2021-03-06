/**
 * User: caolvchong@gmail.com
 * Date: 7/9/13
 * Time: 7:39 PM
 */
define(function(require, exports, module) {
    var $ = require('$');
    var Overlay = require('../../../../js/lib/cmp/overlay');
    var Sticky = require('../../../../js/lib/util/dom/sticky');

    var Dialog = Overlay.extend({
        attrs: {
            template: '<div class="widget-dialog"><a href="#" class="close" data-action="close">X</a></div>',
            align: {
                getter: function(val) {
                    console.log(123);
                    return {
                        selfXY: ['50%', '50%'],
                        baseXY: ['50%', '50%']
                    };
                }
            }
        },
        events: {
            'click [data-action="close"]': function() {
                this.hide();
                return false;
            }
        },
        setup: function() {
            Dialog.superclass.setup.call(this);

            var that = this;
            $(this.get('trigger')).click(function() {
                that.show();
            });
            // 需要调用这句话来实现功能
            this._blurHide(this.get('trigger'));

        },
        show: function() {
            if(!this.rendered) {
                this.render();
                Sticky.fix(this.element);
            }
            Dialog.superclass.show.call(this);
            return this;
        }
    });

    module.exports = Dialog;
});