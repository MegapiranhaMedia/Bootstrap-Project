//Wrap everything in $(document).ready (function () {}

$(document).ready(function () {
    $("#datepicker").datepicker();
    $('.parallax-window').parallax({
        imageSrc: 'SmithPremier.jpg'
    });
    $("#myForm").validate();
    $(function () {
        $("#datepicker").datepicker();
    });
    //not sure what to do with this yet
    $(function () {
        $("#dialog").dialog();
    });

});