<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cardinal Modal</title>
    <link rel="stylesheet" href="dist/css/home.css">
    <link rel="stylesheet" href="http://192.168.12.3:8181/internal-projects/cardinal-grid/dist/css/cdl.min.css">
    <link rel="stylesheet" href="dist/css/cdl.min.css">



</head>

<body>

    <div id="container">

        <p>Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

        <!--<a class="btn" data-popup-open="popup-1" href="#">Open Popup #1</a>-->


    </div>

<div class="cdl-modal cdl-show">
    <div class="cdl-header">
        <div class="cdl-close"><!--<i class="fa fa-close"></i>-->X</div>
    </div>
	
    <div class="cdl-body">
        <div class="ca-content ca-container">
            <section>
                <div class="column">
                    <form class="ca-form">
                        <section>
                            <div class="column has-field">
                                <input type="text" name="firstname" id="firstname" required>
                                <label for="firstname" class="is-required">First Name</label>
                            </div>
                            <div class="column has-field">
                                <input type="text" name="lastname" id="lastname" required>
                                <label for="lastname" class="is-required">Last Name</label>
                            </div>
                        </section>
                        <section>
                            <div class="column has-field">
                                <textarea id="" name="" rows="4" cols="50" ></textarea>
                                <label for="" class="is-required">Comments</label>
                            </div>
                        </section>    
                    </form>
                </div>
            </section>
        </div>
    </div>
</div>
<div class="cdl-overlay"></div>







<!--<div class="popup" data-popup="popup-1">
	<div class="popup-inner">
		<h2>Wow! This is Awesome! (Popup #1)</h2>
		<p>Donec in volutpat nisi. In quam lectus, aliquet rhoncus cursus a, congue et arcu. Vestibulum tincidunt neque id nisi pulvinar aliquam. Nulla luctus luctus ipsum at ultricies. Nullam nec velit dui. Nullam sem eros, pulvinar sed pellentesque ac, feugiat et turpis. Donec gravida ipsum cursus massa malesuada tincidunt. Nullam finibus nunc mauris, quis semper neque ultrices in. Ut ac risus eget eros imperdiet posuere nec eu lectus.</p>
		<p><a data-popup-close="popup-1" href="#">Close</a></p>
		
		<a class="popup-close" data-popup-close="popup-1" href="#">x</a>
	</div>
</div>-->









    <!-- containter -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <!--<script src="src/js/dev-min.js"></script>-->
    <script src="src/js/cdl.js"></script>



</body>
<script type="text/javascript">
    $('.cdl-modal').cdl({
        width: 500,
        cookieName: 'Hello',
        cookieValue: 'uhsdahuglsjruhgliuhliuh',

        //ajaxURL: 'http://192.168.12.3:8888/internal-projects/demos/content.php'
    });
</script>

</html>