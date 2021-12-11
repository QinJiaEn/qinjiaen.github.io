window.addEventListener("load", function () {
    // 给钢琴白键添加data-index自定义属性
    var whiteKey = document.querySelectorAll(".element");
    for (var i = 0, j = 1; i < whiteKey.length; i++) {

        whiteKey[i].setAttribute("index", i);
        if (j > 7) { j = 1 };
        whiteKey[i].setAttribute("data-index", j);
        j++;
        // 简单区分当前是电脑端还是移动端
        if (window.innerWidth > 1024) {
            whiteKey[i].addEventListener("mousedown", function () {
                var index = this.getAttribute("data-index");
                var n = this.getAttribute("index");
                fwl(index,n);

            });
            whiteKey[i].addEventListener("mouseup", function () {
                this.style.background = '';
                // this.querySelector("audio").pause();
            });
        } else {
            // 移动端设计
            whiteKey[i].addEventListener("touchstart", function () {
                var index = this.getAttribute("data-index");
                var n = this.getAttribute("index");
                fwl(index,n);
            })
            
            whiteKey[i].addEventListener("touchend", function () {
                this.style.background = '';
                // this.querySelector("audio").pause();
            });
        }
      
    }
    function fwl(index,i) {
        switch (index,i) {
            case '0':
                whiteKey[i].style.background = 'url(images/white_r.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '1':
                whiteKey[i].style.background = 'url(images/white_m.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '2':
                whiteKey[i].style.background = 'url(images/white_l.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '3':
                whiteKey[i].style.background = 'url(images/white_r.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '4':
                whiteKey[i].style.background = 'url(images/white_m.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '5':
                whiteKey[i].style.background = 'url(images/white_m.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '6':
                whiteKey[i].style.background = 'url(images/white_l.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
            case '7':
                whiteKey[i].style.background = 'url(images/white_r.png) no-repeat center';
                whiteKey[i].querySelector("audio").load();
                whiteKey[i].querySelector("audio").play();
                break;
        };
    }
    

    // // 获取钢琴黑键并绑定事件
    // var blackKey = document.querySelectorAll(".b-ele");
    // for (var i = 0; i < blackKey.length; i++) {
    //     // 给黑键添加点击效果
    //     if(window.innerWidth > 1024) {
    //         blackKey[i].addEventListener("mousedown", function() {
    //             this.style.background = ' url(images/black.png) no-repeat center';
    //             this.querySelector("audio").load();
    //             this.querySelector("audio").play();
    //         });
    //         blackKey[i].addEventListener("mouseup", function() {
    //             this.style.background = '';
    //         });
    //     } else {
    //         blackKey[i].addEventListener("touchstart", function() {
    //             this.style.background = ' url(images/black.png) no-repeat center';
    //             this.querySelector("audio").load();
    //             this.querySelector("audio").play();
    //         });
    //         blackKey[i].addEventListener("touchend", function() {
    //             this.style.background = '';
    //         });
    //     }
    // }
    

});






















