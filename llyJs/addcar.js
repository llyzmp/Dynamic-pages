$(function () {
    // 规格部分 点击自己添加背景,去掉隔壁的背景
    $('.guige span').eq(0).click(function () {
        $(this).siblings('span').removeClass('curt')
        $(this).toggleClass('curt');


    })
    $('.guige span').eq(1).click(function () {
       
            $(this).toggleClass('curt');
            $(this).siblings('span').removeClass('curt')
    })
    
    // 加减个数
    var index = $('.jiajian input').val();
    $('.jiajian span').eq(0).click(function(){
        if(index > 0){
            index--;
        }else{
            index = 0;
        }
        $('.jiajian input').val(index);
    })
    $('.jiajian span').eq(1).click(function(){
        index++;
        $('.jiajian input').val(index);
    })

})