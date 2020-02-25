$(function () {
    // 返回按钮,返回上一页
    $('header .back').click(function () {
        window.history.back(-1);
    })
    // 获取跳转前的 页面搜索内容
    //获取当前页面的地址栏的地址
    var location1 = location.href;
    //获取地址栏的总长度
    var num1 = location1.length;
    // 找=的位置,返回索引号
    var num2 = location1.indexOf("=");
    // substr截取字符串,参数一是当前位置的索引,参数2是截取的长度
    //取到字符串
    var str1 = decodeURI(location1.substr(num2 + 1, num1 - num2));
    // 获取当前页面搜索框元素并赋值
    var inp1=$('header .search input')
    inp1.val(str1);
    //先调用一下input调整函数
    inpwid();

    // 点击小叉号删除input框内容
    $('header .close1').click(function () {
        // 点击删除后,宽度变为只有两边padding的值30px,同时内容为空
        inp1.css("width", 30 + "px");
        inp1.val('');
    })

    // propertychange监听input里面的字符变化,属性改变事件
    inp1.bind('input propertychange', function () {
       inpwid();
    });
    // 封装一个函数,自动调整input框宽度
    function inpwid(){
        var text_length = inp1.val().length;//获取当前文本框的长度
        var current_width = parseInt(text_length) * 12;//该12是改变前的宽度除以当前字符串的长度,算出每个字符的长度
        if (current_width < 270 && current_width > 24) {
            inp1.css("width", current_width + 30 + "px");
        } else if (current_width >= 0 && current_width <= 24) {
            inp1.css("width", current_width + 30 + "px");
        } else {
            inp1.css("width", 270 + "px");
        }
    }
    /*****根据价格进行排序********** */
    var count = 0 ;
    $('#pricesort').click(function(){
        count++;
        //用于存放数据
        var arr = [];
        // span个数
        var spanlen = $('.product span').length;
        $('.product span').each((index,ele)=>{
            //获取价格并添加到数组里,把类型转换为整型
          arr[index] = parseInt($(ele).html().substring(1));
        })
        if(count % 2 ==0){
            arr.sort((a,b)=>{
                return a - b;
            })
            $('.sanjiao .up').css({
                "border-bottom-color": "#000"
            })
            $('.sanjiao .down').css({
                "border-top-color": "#ccc"
            })
        }else {
            arr.sort((a,b)=>{
                return b - a;
            })
            $('.sanjiao .up').css({
                "border-bottom-color": "#ccc"
            })
            $('.sanjiao .down').css({
                "border-top-color": "#000"
            })
        }
        var spans = $('.product span');
        for(var i = 0 ; i < arr.length;i++){
            for(var j = 0; j <spanlen ;j++){
                //获取span里边的数字与数组里边的进行对比
                var spanpr = spans.eq(j).html().substring(1)
                if(arr[i] == spanpr){
                    //把当前的li全部移除,
                    spans.eq(j).parents('li').remove();
                    //然后把拍好顺序的li添加在ul里边
                    $('.product ul').append(spans.eq(j).parents('li'));
                }
            }
        }


    })

})