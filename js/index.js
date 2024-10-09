const width = document.documentElement.clientWidth//获取网页宽度
var prev = document.querySelector('.prev');//获取第一个.prev元素
var next = document.querySelector('.next');

if (width > 800) {
    var left = 0;//定义left
    var timer;//定义timer计时器
    run()//使用run函数
    function run() {
        if (left <= -2400) {
            left = 0;
        }
        imagelist.style.marginLeft = left + "px";
        var n = (left % 800 == 0) ? n = 1200 : n = 10;
        left -= 10;
        timer = setTimeout(run, n);
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

}
if (width <= 800) {
    var left = 0;
    var timer;
    run()
    function run() {
        if (left <= -1800) {
            left = 0;
        }
        imagelist.style.marginLeft = left + "px";
        var n = (left % 600 == 0) ? n = 1200 : n = 10;
        left -= 10;
        timer = setTimeout(run, n);
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