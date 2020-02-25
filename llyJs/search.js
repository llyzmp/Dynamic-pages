$(function(){
    
    // 返回上一级
    $('header img').click(function(){
        window.history.back(-1);
    })

    // 手指放在搜索框获得焦点事件
    $('.search2 input').focus(function(){
        // 清空里边的内容
        $(this).val('');
    })
    // 失去焦点事件
    $('.search2 input').blur(function(){
        $(this).attr('placeholder','面膜');
    })

    // 点击搜索
    $('.search2 img').click(function(){
        if($('.search2 input').val() == ''){
            alert('输入商品')
        }else{
            // 先获取本地的数据
            var local = getData();
            // 在数据后边追加数据
            local.push($('.search2 input').val());
            // 保存到本地
            saveDate(local);
            // 加载页面
            load();
            // 跳转页面
            document.location.href="../llyHtml/searchResultStyle.html?"+"value="+encodeURI($('.search2 input').val()) ;
        }
    })
    //删除历史记录
    $('.history p').click(function(){
        // 获取本地数据
        var data = getData();
        // 清空数组
        data = [];
        // 再次保存到本地
        saveDate(data);
        // 渲染页面
        load();
    })
    // 声明一个函数getData()获取本地存储的数据放在数组里
    function getData() {
        var data = localStorage.getItem("history");
        if (data != null) {
            // 本地存储里面的数据是字符串格式,需要转换为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地数据
    function saveDate(data) {
        localStorage.setItem('history', JSON.stringify(data));
    }
    // 加载页面
    load();
    function load(){
        // 先获取本地保存的数据
        var data = getData();
        // 先清空数据,否则会重叠
        $('.history ul').empty();
        $.each(data,function(i,n){
            var li = $('<li><a href="#">'+ n +'</a></li>');
            $('.history ul').append(li);
        })
    }
    // 点击热门搜索的每一个都可以
    // 获取每一个li并注册事件  搜索框里内容会变,并且a标签里地址跳转到另一个页面
    $('.hotsearch li').each(function(ind,ele){
       $(ele).click(function(){
        $('.search2 input').val($(this).text());
       })
    })
    // 如果历史记录里边的ul内容不为空
    if($('.history ul').text().length != 0){
        // 遍历里边的所有li 注册点击事件
        $(".history li").each(function(ind,ele){
            $(ele).click(function(){
                //把内容添加到input框 并且li里边的a也会跳转页面
                $('.search2 input').val($(this).text());
            })
        })
    }
    

})