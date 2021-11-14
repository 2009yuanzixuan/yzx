function bottomalert(n) {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show",n); }, 3000);
}
function is_Form()
{
    var score=0;
    var a=fm.one.value;
    var b=fm.two.value;
    var c=fm.three.value;
    var d=fm.four.value;
    var e=fm.five.value;
    var f=fm.six.value;
    var g=fm.seven.value;
    var h=fm.eight.value;
    
    alert("点击确定以用来提交");

    if(a=="A"){
        score+=12.5;
    }
    if(b=="B"){
        score+=12.5;
    }
    if(c=="B"){
        score+=12.5;
    }
    if(d=="B"){
        score+=12.5;
    }
    if(e=="A"){
        score+=12.5;
    }
    if(f=="B"){
        score+=12.5;
    }
    if(g=="B"){
        score+=12.5;
    }
    if(h=="B"){
        score+=12.5;
    }
    
    if(score==100){
        alert("您本次默契测试得分为"+score+"分,CONGRATULATIONS!");
        var path='../../static/images/gwf.jpg'
        document.getElementById('caidan').innerHTML='<img src="'+path+'" />';;
    }
    else{
        alert("您本次默契测试得分为"+score+"分,TRY AGAIN!");
    }
}