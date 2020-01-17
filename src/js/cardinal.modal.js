/*
 * Louis Stephens: Modal for Chumney
 * based on jquery-modal by Kyle Fox
 * 2019
 * version 0.5
 */
/*
Copyright(c) 2012 Kyle Fox

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and / or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

    The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/





 /*(function (factory) {
     if (typeof module === "object" && typeof module.exports === "object") {
         factory(require("jquery"), window, document);
     }
     else {
        factory(jQuery, window, document);
     }
}*/

/*
 *  jquery-boilerplate - v4.0.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;
(function ($, window, document, undefined) {

    "use strict";

    var className = "cardinal-modal";
    var selector = $(this);
    console.log(selector)
    // Create the defaults once
    var pluginName = "Cardinal",
        defaults = {
            title: '',
            subTitle: '',
            headerColor: '',
            width: '',
            autoOpen: false,
            overlay: true,
            modalID: '',
            ajaxURL: '',
            cookieAmount: 0,
            cookieName: '',
            cookieValue: '',
            exitIntent: false,
            overlay: true,
            overlayDuration: null,
            overlayDelay: 1.0
        };

    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        
        if(this.settings.autoOpen != true) {
            $(element).addClass('ca-hidden')
        }
        
        
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {

            // Place initialization logic here
            this.open();
        },
        open: function () {
            console.log('opening');

            if (this.settings.autoOpen == true) {
                this.create()

                $(this.overlay).css('opacity', 1)
                $(className).css('opacity', 1)
            }





        },
        ajaxContent: function () {

        },
        yourOtherFunction: function (text) {

            $(this.element).text(text);
        },
        create: function () {
            //console.log('hey')
            $(this.element).addClass('cardinal-modal')

            if (this.settings.width != null) {
                $(this.element).css('width', this.settings.width + 'px')
            }

            if (this.settings.overlay != false) {
                this.overlay = document.createElement('div');
                $(this.overlay).attr('id', 'cardinal-overlay');
                $('body').append(this.overlay);
            }
  
            if (this.settings.title != '' || this.settings.subTitle != '') {
                console.log('title');

                this.header = document.createElement('div');
                $(this.header).attr('class', 'header');

            }





        }
    });








    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);




