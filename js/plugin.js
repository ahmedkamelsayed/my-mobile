$(document).ready(function(){
    $(".click").click(function(){ /**** لما ادوس علي الزرار الرئيسي يوديني للقايمة الرئيسية *********/
        $(".background").show();
        $(".number").hide();
        $(".names").hide();
        $(".messages").hide();
        $(".menuoo").hide()
    })
    
    $(".call").click(function(){ /*********** زرار الاتصال ***********/
        $(".background").hide();
        $(".number").show()
    })
    
    $(".contact").click(function(){ /*********** زرار الاسماء ***********/
        $(".background").hide();
        $(".names").show()
    })
    $(".message").click(function(){
        $(".background").hide();
        $(".messages").show()
    })
    $(".menu").click(function(){
        $(".background").hide();
        $(".menuoo").show()
    })
})