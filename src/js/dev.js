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

	// Create the defaults once
    var pluginName = "Cardinal",
        defaults = {
            title: '',
            subTitle: '',
            headerColor: '',
            titleColor: '#000000',
            includeCloseButton: true,
            width: 500,
            autoOpen: false,
            overlay: true,
            overlayClose: true,
            modalID: '',
            ajaxURL: '',
            cookieAmount: 0,
            cookieName: '',
            cookieValue: '',
            exitIntent: false,
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

            if (this.closeButton) {
                this.closeButton.addEventListener('click', this.close.bind(this));
            }

            if (this.overlay) {
                this.overlay.addEventListener('click', this.close.bind(this));
            }

            if (this.closeButton) {
                this.closeButton.addEventListener('click', this.close.bind(this));
                this.readCookie('hellllooooo')

            }

            if (this.overlay) {
                this.overlay.addEventListener('click', this.close.bind(this));
            }





        },
        open: function () {
            this.create()
            this.ajaxContent();
            this.closeButton();
            
			//console.log('Chumney & Associates: Modal Opening');




        },
        createCookie: function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toUTCString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";

        },
        readCookie: function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ' ) c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        deleteCookie: function (name) {
            createCookie(name, "", -1);

        },
        close: function () {
            $(this.element).removeClass('is-opened');
            $(this.overlay).removeClass('is-opened');
        },
        closeButton: function () {
            if(this.settings.includeCloseButton != false) {
                this.closeButton = document.createElement('button');
                $(this.closeButton).attr('class', 'ca-close-button');
                $(this.closeButton).html('&times');
                $(this.element).prepend(this.closeButton);
            }
        },
        ajaxContent: function () {
            if(this.settings.ajaxURL !== '') {
                $.get(this.settings.ajaxURL, function(data) {
                    $('.ca-content').html(data);
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
                $(this.element).css('max-width', this.settings.width + 'px')
            }

            if (this.settings.overlay != false) {
                this.overlay = document.createElement('div');
                $(this.overlay).attr('id', 'cardinal-overlay');
                $('body').append(this.overlay);
            } else {
                $(this.element).addClass('no-overlay')
            }


  
            if (this.settings.title != '' || this.settings.subTitle != '') {
                this.header = document.createElement('div');
                
				// console.log('title');


				
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

                $(this.overlay).addClass('is-opened').fadeIn(30000).delay(30000);
                $(this.element).addClass('is-opened').fadeIn(30000).delay(30000);

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




// https://www.youtube.com/watch?v=GxjNOv5QPzM