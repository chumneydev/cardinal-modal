/**
 * Louis Stephens
 * December 8th, 2020
 * Work in progress modal
 */



// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "cdl",
			defaults = {
                width: 500,
                cookieAmount: 0,
                overlay: false,
                closeButton: false,
                overlayClose: true,
                cookieName: '',
                cookieValue: '',

			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example below
                //this.yourOtherFunction( "jQuery Boilerplate" );


                this.create();

            },
            create: function () {
                this.width();
                this.cookies();

                if (this.settings.autoOpen == true && this.settings.cookieName !==  '') {
                    this.open();
                }

                if (this.settings.overlay == true) {
                    this.overlay();

                }

                if (this.settings.closeButton == true) {
                    this.closeButton();
                    $('.cdl-close').click(function() {
                        this.close();
                    })


                }

                if (this.settings.overlayClose == false) {
                    this.overlay();

                }
            },
            open: function() {
    			$( this.element ).addClass('cdl-open');
    			$( this.element ).addClass('cdl-shadow');
            },
            close: function() {
    			$( this.element ).removeClass('cdl-open');

            },
            overlay: function() {
                var createOverlay = $('<div>').attr('class', 'cdl-overlay');
                $( this.element ).after(createOverlay);
    			$('.cdl-overlay').addClass('cdl-open');
    			$('.cdl-overlay').addClass('cdl-close');
    			$( this.element ).removeClass('cdl-shadow');

    			//$( '.cdl-overlay' ).addClass('cdl-open');
            },
            closeButton: function() {
                /*var createOverlay = $('<div>').attr('class', 'cdl-overlay');
                $( this.element ).after(createOverlay);
    			$('.cdl-overlay').addClass('cdl-open');
    			$('.cdl-overlay').addClass('cdl-close');
                $( this.element ).removeClass('cdl-shadow');
                <a href="#" class="cdl-close">X</a>

                */

                //$( '.cdl-overlay' ).addClass('cdl-open');
                var closeButton = $('<a />', {
                    href: '#',
                    class: 'cdl-close',
                    text: 'X'
                });
                $( '.cdl-header' ).prepend(closeButton);

                console.log('close me')
            },
            width: function() {
    			$( this.element ).css('max-width', this.settings.width + 'px');
            },
            cookies: function () {
                if (this.settings.cookieName) {
                    this.createCookie(this.settings.cookieName, this.settings.cookieValue, this.settings.cookieAmount);
                }
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

            exitIntent: function () {
                document.addEventListener("mouseout", evt => {
                    if (evt.toElement === null && evt.relatedTarget === null) {
                    // An intent to exit has happened
                        $( this.element).addClass('cdl-open');
                        $(this.element).addClass('cdl-open');
                    }
                });

            },

			yourOtherFunction: function() {

				// some logic
				$( this.element ).text( text );
            }
            


		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );









 /************* */

 	/*var modal = '.cdl-modal';
	var open = $(modal).attr('cdl-open');
	var close = $(modal).attr('cdl-close');
	var headerColor = $(modal).attr('cdl-header');
	var overlay = $(modal).attr('cdl-overlay');
	var overlayColor = $(modal).attr('cdl-overlay-color');
	var overlayOpacity = $(modal).attr('cdl-overlay-opacity');
	var cookieName = $(modal).attr('cdl-cookie-name');
	var cookieAmount = $(modal).attr('cdl-cookie-amount');
	var cookieValue = $(modal).attr('cdl-cookie-value');
	var width = $(modal).attr('cdl-width') + 'px';
	var exitIntent = $(modal).attr('cdl-exit-intent');
	var exitButton = $(modal).attr('cdl-exit-button');
	var open = $(modal).attr('data-open');
	
	cdlBuild();



	function cdlBuild() {
		cdlOpen();
		cdlWidth();
		cdlHeader();
		cdlClose();

	}




	function cdlOpen() {

	}

	function cdlWidth() {
		$(modal).css('width', width)

	}

	function cdlClose() {

		$('.cdl-close').on('click', function(){
			$(modal).removeClass('cdl-show')
			$(modal).attr('cdl-open', false)
		});
	}*/




