$(function(){
    $('header .back2').click(function(){
        window.history.back(-1);
    })



    $('.footer .addcar').click(function(){
        $('.mark').show();
        $('.goumai').show();
    })
    $('.goumai .close01').click(function(){
        $('.mark').hide();
        $('.goumai').hide();
    })

    // 点击收藏星星点量
    var flag = true;
    $('.footer .collect img').click(function(){
        
        if(flag){
            $(this).attr('src','../llyImages/收藏星星图标.png');
            flag = false;
        }else {
            $(this).attr('src','../llyImages/未选中星星.png');
            flag = true;
        }
        

    })
})