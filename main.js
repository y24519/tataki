document.addEventListener("DOMContentLoaded", function(){
    const btn1 = document.querySelector(".button1");
    const btn2 = document.querySelector(".button2");
    const btn3 = document.querySelector(".button3");
    const btn4 = document.querySelector(".button4");
    const btn5 = document.querySelector(".button5");
    const btna = document.querySelector(".buttona");
    const btnd = document.querySelector(".buttond");
    const btne = document.querySelector(".buttone");
    const btnf = document.querySelector(".buttonf");
    const btng = document.querySelector(".buttong");
    const btnq = document.querySelector(".buttonq");
    const btnr = document.querySelector(".buttonr");
    const btns = document.querySelector(".buttons");
    const btnt = document.querySelector(".buttont");
    const btnw = document.querySelector(".buttonw");
    const btny = document.querySelector(".buttony");

    const btnspace1 = document.querySelector(".space1");
    const btnspace2 = document.querySelector(".space2");

    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let img3 = document.querySelector(".img3");
    let img4 = document.querySelector(".img4");
    let img5 = document.querySelector(".img5");
    let imga = document.querySelector(".imga");
    let imgd = document.querySelector(".imgd");
    let imge = document.querySelector(".imge");
    let imgf = document.querySelector(".imgf");
    let imgg = document.querySelector(".imgg");
    let imgq = document.querySelector(".imgq");
    let imgr = document.querySelector(".imgr");
    let imgs = document.querySelector(".imgs");
    let imgt = document.querySelector(".imgt");
    let imgw = document.querySelector(".imgw");
    let imgy = document.querySelector(".imgy");

    let imgspace1 = document.querySelector(".imgspace1");
    let imgspace2 = document.querySelector(".imgspace2");
    let toku = document.querySelector(".tokuten");

    // 初期点数
    let score = 0;

    // ボタンクリック判定
    function handleButtonClick(button, image) {
        button.addEventListener('click', function(event) {
            if (image !== null && button.contains(image)) {
                button.removeChild(image);
            }
            score += 1; // 点数を増やす
            document.querySelector('.tokuten').textContent = score;
            console.log('Click count is ' + score);
            console.log('成功');
            button.style.display = 'none';
        });
    }

    // すべてのボタンにイベントリスナーを割り当てる
    handleButtonClick(btn1, img1);
    handleButtonClick(btn2, img2);
    handleButtonClick(btn3, img3);
    handleButtonClick(btn4, img4);
    handleButtonClick(btn5, img5);
    handleButtonClick(btna, imga);
    handleButtonClick(btnd, imgd);
    handleButtonClick(btne, imge);
    handleButtonClick(btnf, imgf);
    handleButtonClick(btng, imgg);
    handleButtonClick(btnq, imgq);
    handleButtonClick(btnr, imgr);
    handleButtonClick(btns, imgs);
    handleButtonClick(btnt, imgt);
    handleButtonClick(btnw, imgw);
    handleButtonClick(btny, imgy);
    handleButtonClick(btnm1, imgm1);
    handleButtonClick(btnspace1, imgspace1);
    handleButtonClick(btnspace2, imgspace2);
});
