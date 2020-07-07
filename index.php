<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cardinal Modal</title>
    <link rel="stylesheet" href="dist/css/home.css">
    <link rel="stylesheet" href="dist/css/modal.min.css">



</head>

<body>

    <div id="container">

        <p>Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

<a class="btn" data-popup-open="popup-1" href="#">Open Popup #1</a>


    </div>



<!--<div class="popup" data-popup="popup-1">
	<div class="popup-inner">
		<h2>Wow! This is Awesome! (Popup #1)</h2>
		<p>Donec in volutpat nisi. In quam lectus, aliquet rhoncus cursus a, congue et arcu. Vestibulum tincidunt neque id nisi pulvinar aliquam. Nulla luctus luctus ipsum at ultricies. Nullam nec velit dui. Nullam sem eros, pulvinar sed pellentesque ac, feugiat et turpis. Donec gravida ipsum cursus massa malesuada tincidunt. Nullam finibus nunc mauris, quis semper neque ultrices in. Ut ac risus eget eros imperdiet posuere nec eu lectus.</p>
		<p><a data-popup-close="popup-1" href="#">Close</a></p>
		
		<a class="popup-close" data-popup-close="popup-1" href="#">x</a>
	</div>
</div>-->







    <div id="cardinal-offer" class="cardinal-modal">
        <div class="ca-content">
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
    </div>







    <!-- containter -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <!--<script src="src/js/dev-min.js"></script>-->
    <script src="src/js/cardinal.modal.js"></script>



</body>
<script type="text/javascript">
    $('#cardinal-offer').Cardinal({
        title: 'This is a Title',
        subTitle: 'This is just some supporting text..',
        width: 800,
        titleColor: '#FFFFFF',
        headerColor: '#007cf6',
        overlay: true,
        //exitIntent: true,
        autoOpen: true,
        cookieAmount: 0,
        cookieName: 'Hello',
        cookieValue: 'uhsdahuglsjruhgliuhliuh',

        //ajaxURL: 'http://192.168.12.3:8888/internal-projects/demos/content.php'
    });
</script>

</html>