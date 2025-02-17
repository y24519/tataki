document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".all button");
    const btnspace1 = document.querySelector(".space1");
    const btnspace2 = document.querySelector(".space2");

    let score = 0; //スコアを初期化
    let timer;
    let countdown;
    let timeLeft = 30; // タイマーの秒数を30に設定
    let isGameActive = false;
    let max=0; //スコアの最大を0に設定

    // ランダムにボタンを表示する関数
    function toggleRandomButtons() {
        // すべてのボタンを一旦非表示にする
        buttons.forEach(button => {
            if (button !== btnspace1 && button !== btnspace2) {
                button.style.display = "none";
            }
        });

        // ランダムに1〜4個のボタンを表示する
        const numButtonsToShow = Math.floor(Math.random() * 4) + 1; // 1〜4のランダムな数
        let shownButtons = [];
        
        while (shownButtons.length < numButtonsToShow) {
            const randomIndex = Math.floor(Math.random() * buttons.length);
            const button = buttons[randomIndex];
            if (button !== btnspace1 && button !== btnspace2 && !shownButtons.includes(button)) {
                button.style.display = "block"; //ボタンを表示
                shownButtons.push(button);
            }
        }
    }
    //30秒経ったらアラートで結果表示
    function showResults() {
        clearInterval(timer);
        clearInterval(countdown);
        isGameActive = false;
        buttons.forEach(button => {
            if (button !== btnspace1 && button !== btnspace2) {
                button.style.display = "none";  //ボタンを非表示
            }
        });
        if(max<score){ //maxよりscoreが大きいときmaxを入れ替える
            max=score;
        }
        alert("ゲーム終了！得点は " + score + " 点です。 これまでの最高得点は"+max+"点です。");
        
    }

    //30秒からのカウントダウンの表示
    function updateTimer() {
        timeLeft--;
        document.querySelector('.time').textContent = timeLeft;
        if (timeLeft <= 0) {
            showResults();
        }
    }
    //ゲームの開始
    function startGame() {
        if (isGameActive) return;
        isGameActive = true;
        score = 0;
        timeLeft = 30; // タイマーをリセット
        document.querySelector('.tokuten').textContent = score;
        document.querySelector('.time').textContent = timeLeft;
        toggleRandomButtons(); // 初期表示
        timer = setInterval(toggleRandomButtons, 1000); // 1秒ごとにランダム表示を更新
        countdown = setInterval(updateTimer, 1000); // 1秒ごとにタイマーを更新
        btnspace1.style.display = "block"; // space1 ボタンは常に表示
        btnspace2.style.display = "block"; // space2 ボタンは常に表示
    }
    //強制終了
    function stopGame() {
        if (!isGameActive) return;
        clearInterval(timer);
        clearInterval(countdown);
        isGameActive = false;
        buttons.forEach(button => {
            if (button !== btnspace1 && button !== btnspace2) {
                button.style.display = "none"; // ボタンを非表示
            }
        });
    }
    //クリックされたら得点追加と非表示
    buttons.forEach(button => {
        if (button !== btnspace1 && button !== btnspace2) {
            button.addEventListener('click', function(event) {
                if (!isGameActive || button.style.display === "none") return;
                score += 1;
                document.querySelector('.tokuten').textContent = score;
                button.style.display = "none"; // クリックされたら非表示に
            });
        }
    });

    btnspace1.addEventListener('click', startGame);
    btnspace2.addEventListener('click', stopGame);
});
