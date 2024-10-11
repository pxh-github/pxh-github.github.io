const width = document.documentElement.clientWidth//获取网页宽度
var prev = document.querySelector('.prev');//获取第一个.prev元素
var next = document.querySelector('.next');
var dot = document.getElementById('dots').getElementsByTagName('li');
var dotlist = document.querySelector('#dots');
function dotchange(p) {
    for (i = 0; i < dot.length; i++) {
        dot[i].style.backgroundColor = '';
    }
    if (p < dot.length) {
        dot[p].style.backgroundColor = 'red';
    }
}
if (width > 785) {
    var left = 0;//定义left
    var timer;//定义timer计时器
    run()//使用run函数
    function run() {
        if (left <= -2400) {
            left = 0;
        }
        var t = Math.floor(-left / 800);
        imagelist.style.marginLeft = left + "px";
        var n = (left % 800 == 0) ? n = 1200 : n = 10;
        left -= 10;
        timer = setTimeout(run, n);
        dotchange(t);
    }//定义run函数
    function change(x) {
        let y = -x * 800;
        imagelist.style.marginLeft = y + "px";
        left = y;
    }
    let num = Math.floor(-left / 800);
    prev.onclick = function () {
        let z = Math.floor((-left / 800) - 1);
        if (z == -1) {
            z = 2;
        }
        change(z);
    }
    next.onclick = function () {
        let z = Math.floor((-left / 800) + 1);
        if (z == 4) {
            z = 0;
        }
        change(z);
    }
    // dotlist.addEventListener("click", function (event) {
    //     var ev = event.target;
    //     let x = parseInt(ev.innerHTML, 10) - 1;
    //     change(x);
    //     dotchange(x);
    // })

}
if (width <= 785) {
    var left = 0;
    var timer;
    run()
    function run() {
        if (left <= -1800) {
            left = 0;
        }
        var t = Math.floor(-left / 600);
        imagelist.style.marginLeft = left + "px";
        var n = (left % 600 == 0) ? n = 1200 : n = 10;
        left -= 10;
        timer = setTimeout(run, n);
        dotchange(t);
    }
    function change(x) {
        let y = -x * 600;
        imagelist.style.marginLeft = y + "px";
        left = y;
    }
    prev.onclick = function () {
        let z = Math.floor((-left / 600) - 1);
        if (z == -1) {
            z = 2;
        }
        change(z);
    }
    next.onclick = function () {
        let z = Math.floor((-left / 600) + 1);
        if (z == 4) {
            z = 0;
        }
        change(z);
    }
}