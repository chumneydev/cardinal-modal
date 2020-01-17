/*
 * Louis Stephens: Modal for Chumney
 * 2019
 * version 0.5
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
            titleColor: '#000000',
            width: 500,
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
            this.create()
            this.ajaxContent();




        },
        ajaxContent: function () {
            if(this.settings.ajaxURL != null) {
                console.log(this.settings.ajaxURL);
                $.get(this.settings.ajaxURL, function(data) {
                    $('.ca-content').html(data);

                    console.log('.content');
                })

            }
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
            } else {
                $(this.element).addClass('no-overlay')
            }


  
            if (this.settings.title != '' || this.settings.subTitle != '') {
                console.log('title');

                this.header = document.createElement('div');
                $(this.header).attr('class', 'ca-header');
                $(this.element).prepend(this.header);
             
                





                if (this.settings.headerColor !== null) {
                    $(this.header).css('background', this.settings.headerColor)
                }

                if (this.settings.title !== null) {
                    var title = document.createElement('h1');
                    this.header.appendChild(title);

                    var titleNode = document.createTextNode(this.settings.title);
                    title.appendChild(titleNode);
                }

                if (this.settings.subTitle !== null) {
                    var subTitle = document.createElement('h2');
                    this.header.appendChild(subTitle);

                    var subTitleNode = document.createTextNode(this.settings.subTitle);
                    subTitle.appendChild(subTitleNode);
                    
                }

                if (this.settings.titleColor !== null) {
                    $(title).css('color', this.settings.titleColor);
                    $(subTitle).css('color', this.settings.titleColor);
                }


                

            }

            if (this.settings.autoOpen === true) {
                $(this.overlay).addClass('is-opened').fadeIn(30000);
                $(this.element).addClass('is-opened').fadeIn(30000);

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




