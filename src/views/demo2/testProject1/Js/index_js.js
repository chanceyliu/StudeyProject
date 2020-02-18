$(function () {
    var $box1 = $("#box1");
    var $box2 = $("#box2");
    var index = 0;
    setInterval(fn,5000);
    function fn() {
        index++;
        if(index>5){
            index = 1;
        }
        $box1.animate({opacity:0},700,function() {
            $box1.css({"background-image":"url(images/banner"+index+".jpg)",opacity:1});
        });
        $box2.css("background-image","url(images/banner"+index+".jpg)");
    }
});