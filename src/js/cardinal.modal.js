// Create an immediately invoked functional expression to wrap our code
(function () {

    // Define our constructor 
    this.Cardinal = function () {

        // Create global element references
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;

        // Determine proper prefix
        this.transitionEnd = transitionSelect();

        var _ = this;



        // Define option defaults 
        var defaults = {
            autoOpen: false,
            className: 'fade-and-drop',
            closeButton: true,
            content: "",
            maxWidth: 600,
            minWidth: 280,
            height: 0,
            overlay: true,
            ajaxURL: "",
            cookieAmount: 0,
            cookieName: '',
            cookieValue: '',
            exitIntent: false,
            onOpening: function () {}, // function for ajax url
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        if (this.options.autoOpen === true) {
            this.open()
            console.info('Chumney & Associates: Modal has opened')

        }

        // If exit intent is true, delay modal
        if (this.options.exitIntent === true) {

            var invokeModal = true;
            document.addEventListener("mouseout", evt => {
                if (evt.toElement === null && evt.relatedTarget === null) {
                    if (invokeModal) {
                        // An intent to exit has happened
                        console.log("Chumney & Associates")
                        this.open();
                        invokeModal = false;
                    }
                }
            });
            console.log('Chumney & Associates: exit intent engaged');
        }


        /*if (this.options.cookie.cookieActive === true) {
            console.log(this.options.cookie.cookieAmount)
            createCookie(this.options.cookie.cookieName, this.options.cookie.cookieValue, this.options.cookie.cookieAmount);
            //console.log(getCookie(this.options.cookie.cookieName))
            console.log(accessCookie(this.options.cookie.cookieName))

            // If cookie is set, then dont open
            if (checkCookie(this.options.cookie.cookieName)) {


            }

            else {
                removeCookie(this.options.cookie.cookieName)
            }
        }*/


        // Ajax driven content
        if (this.options.onOpening && typeof (this.options) === 'function') {
            this.options.onOpening(this);
        }


    }

    // Public Methods

    Cardinal.prototype.close = function () {
        var _ = this;
        this.modal.className = this.modal.className.replace(" ca-modal-open", "");
        this.overlay.className = this.overlay.className.replace(" ca-modal-open",
            "");
        this.modal.addEventListener(this.transitionEnd, function () {
            _.modal.parentNode.removeChild(_.modal);
        });
        this.overlay.addEventListener(this.transitionEnd, function () {
            if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);

        });
        console.log('Chumney Modal has closed')

    }

    Cardinal.prototype.open = function () {
        buildOut.call(this);
        initializeEvents.call(this);
        window.getComputedStyle(this.modal).height;
        this.modal.className = this.modal.className +
            (this.modal.offsetHeight > window.innerHeight ?
                " ca-modal-open ca-modal-anchor" : " ca-modal-open");
        this.overlay.className = this.overlay.className + " ca-modal-open";

        this.setCookie()
        this.allCookies()
        this.checkCookie()
        this.ajaxLoadContent()
    }

    // Load Content via ajax
    Cardinal.prototype.ajaxLoadContent = function () {
        var _ = this;

        if (_.options.ajaxURL != '') {
            _.options.content = $.get(_.options.ajaxURL, function(data) {
                $('.ca-modal-content').html(data)
                console.log('The content has been loaded into the html')
            });
        }

    }


    Cardinal.prototype.allCookies = function() {
        var _ = this;

        if (_.options.cookieAmount != 0) {
            _.close();
            console.log("liusehisuh")
            console.log(_.checkCookie(_.options.cookieName))

        }

    }

    Cardinal.prototype.setCookie = function (cookieAmount) {
        var _ = this;

        if (_.options.cookieAmount) {
            createCookie(_.options.cookieName, _.options.cookieValue, _.options.cookieAmount, )
            console.log("Hello!")
        }
    }


    Cardinal.prototype.checkCookie = function (cookieName) {
        var _ = this;

        if (document.cookie.indexOf(_.options.cookieName) > -1) {
            console.log('Cookie Name is: ' + _.options.cookieName);
        }


    }




    // Private Methods

    function buildOut() {

        var content, contentHolder, docFrag;

        /*
         * If content is an HTML string, append the HTML string.
         * If content is a domNode, append its content.
         */

        if (typeof this.options.content === "string") {
            content = this.options.content;
        } else {
            content = this.options.content.innerHTML;
        }

        // Create a DocumentFragment to build with
        docFrag = document.createDocumentFragment();

        // Create modal element
        this.modal = document.createElement("div");
        this.modal.className = "ca-modal " + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + "px";
        this.modal.style.maxWidth = this.options.maxWidth + "px";


        // height
        // this.modal.style.height = this.options.height + "px";


        // If closeButton option is true, add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "ca-modal-close ca-modal-close-button";
            this.closeButton.innerHTML = "&times;";
            this.modal.appendChild(this.closeButton);
        }

        // If overlay is true, add one
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "ca-modal-overlay " + this.options.className;
            docFrag.appendChild(this.overlay);
        }


        // Create content area and append to modal
        contentHolder = document.createElement("div");
        contentHolder.className = "ca-modal-content";
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);

        // Append modal to DocumentFragment
        docFrag.appendChild(this.modal);

        // Append DocumentFragment to body
        document.body.appendChild(docFrag);

    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;

    }



    // Create a Cookie
    function createCookie(cookieName, cookieValue, daysToExpire) {
        var date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toUTCString();
    }

    // Access a Cookie
    function accessCookie(cookieName) {
        var name = cookieName + "=";
        var allCookieArray = document.cookie.split(';');
        for (var i = 0; i < allCookieArray.length; i++) {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name) == 0)
                return temp.substring(name.length, temp.length);
        }
        return "";
    }

    function removeCookie(name) {
        document.cookie = name;
    }

    function checkCookie(cookieName) {
        var cookieCheck = accessCookie(cookieName);

        if (cookieCheck = "") {
            this.close();
        } else if (cookieCheck != "") {
            this.close();

        } else {}
    }


    function exitIntent() {
        document.addEventListener("mouseout", evt => {
            if (evt.toElement === null && evt.relatedTarget === null) {
                // An intent to exit has happened
                console.log("Dont leave!")
                this.open();

            }
        });
    }



    function initializeEvents() {

        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }

        // Exit Intent

        if (this.exitIntent) {
            this.exitIntent.addEventListener('mouseleave', this.open.bind(this));
            console.log('Chumney')
        }

    }

    function transitionSelect() {
        var el = document.createElement("div");
        if (el.style.WebkitTransition) return "webkitTransitionEnd";
        if (el.style.OTransition) return "oTransitionEnd";
        return 'transitionend';
    }

    function cookie() {
        var cookie = document.cookie;
    }

}());
