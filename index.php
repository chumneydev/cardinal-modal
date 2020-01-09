<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cardinal Modal</title>
    <link rel="stylesheet" href="dist/css/cardinal.css">
    <link rel="stylesheet" href="dist/css/home.css">
    <link rel="stylesheet" href="dist/css/modal.min.css">



</head>

<body>

    <div id="sidebar">
        <ul>
            <li><a href="#starting">Getting Started</a></li>
            <li><a href="#grid">Grid</a></li>
            <li><a href="#colors">Colors</a></li>
            <li><a href="#updating">Updating</a></li>
        </ul>
    </div>






    <!-- containter -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="dist/js/cardinal.modal-min.js"></script>



</body>
<script type="text/javascript">
    var myModal = new Modal({
        autoOpen: false,
        content: 'howdy',
        maxWidth: 600,
    });

    myModal.open();

</script>

</html>