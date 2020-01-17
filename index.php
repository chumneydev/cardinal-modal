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



    </div>



    <div id="cardinal-offer">
        <div class="content">
            <p>Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
    </div>







    <!-- containter -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="src/js/cardinal.modal.query.js"></script>



</body>
<script type="text/javascript">
    //var content = "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue.";

    //var content = document.getElementById('content');

    /*var content = $.get('http://192.168.12.3:8888/development/projects/password/#', function(data) {
        $('.ca-modal-content').html(data)
    });*/

    /*var caModal = new Modal({
        maxWidth: 580,
        autoOpen: false,
        content: content
    }); 
    caModal.open();*/


    $('#cardinal-offer').Cardinal( {
        title: 'Hey',
        width: '1200',
        overlay: true,
        autoOpen: true,
    });



    /*var myModal = new Cardinal({
        title: 'Welcome Scott!',
        subTitle: 'This is a bit of information',
        overlay: true,
        autoOpen: true,
        //height: 200,
        exitIntent: false,
        ajaxURL: 'http://192.168.12.3:8888/internal-projects/demos/content.php',
        //cookieAmount: 2,
        //cookieName: 'abcd',
        //cookieValue: 'efgh',
    }); */
</script>

</html>