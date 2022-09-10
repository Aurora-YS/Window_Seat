$(document).ready(function(){

    var $arr_01 = [
        ["창가 쪽 좌석",
        "아마도 기차를 탔을때 일차원적으로 떠난다는 기분을 들게끔 해주는 자리일 것입니다.", "어린아이부터 백발이 되신 노인분들까지 이자리에 앉은 사람들은 들떠있습니다.", "이 좌석 칵테일은 때마침 창문넘어 떠있는 구름을 한입 머금습니다."],
        ["A Window Seat", "It's probably a seat that makes you feel like you're leaving one-dimensional when you're on a train.", "From children to gray-haired elderly people, the people sitting here are excited.", "This seat cocktail just in time takes a bite of the floating cloud over the window."]
	];

    var $PF_main = `
        <div class="contents">
            <h4 class="title"></h4>
            <p class="txt01"></p>
            <p class="txt02"></p>
            <p class="txt03"></p>
        </div>
    `;

    for(i in $arr_01){
        $("#PF_main .cover").append($PF_main);
    }

    $("#PF_main .cover .contents").each(function(n){
        $(this).find("h4").text($arr_01[n][0]);
        $(this).find(".txt01").text($arr_01[n][1]);
        $(this).find(".txt02").text($arr_01[n][2]);
        $(this).find(".txt03").text($arr_01[n][3]);
    });
    
    $("#PF_main .box button").click(function(){
        var $open = $(this).hasClass("open");
        var $idx = $(this).index();

        $("#PF_main .contents").slideUp();

        if($open == false){
            $("#PF_main .box button").removeClass("open");
            $(this).addClass("open");
            $("#PF_main .contents").eq($idx).slideDown();
        }else{
            $(this).removeClass("open");
            $("#PF_main .contents").eq($idx).slideUp();
        };
    });

});