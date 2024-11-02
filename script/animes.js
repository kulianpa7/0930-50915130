let tug = true;
$(".anime").on('click', function() {
    if (tug) {
        anime({
            targets: '.box',
            translateX: 250,    // 水平方向移動 250px
            scale: 2,           // 將方塊放大 2 倍
            rotate: '1turn',    // 方塊旋轉一圈
            duration: 2000,     // 動畫持續時間為 2000ms (2 秒)
            easing: 'easeInOutQuad' // 動畫緩動效果
        });
    } else {
        anime({
            targets: '.box',
            translateX: 0,   
            scale: 1,           // 回到原始尺寸
            rotate: '+=1turn',  // 累積旋轉效果
            duration: 2000,     // 動畫持續時間為 2000ms (2 秒)
            easing: 'easeInOutQuad' // 動畫緩動效果
        });
    }
    tug = !tug;
});

$(document).ready(function () {
    
    $(".anime_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
let tug = true;
$(".anime").on('click', function() {
    if (tug) {
        anime({
            targets: '.box',
            translateX: 250,    // 水平方向移動 250px
            scale: 2,           // 將方塊放大 2 倍
            rotate: '1turn',    // 方塊旋轉一圈
            duration: 2000,     // 動畫持續時間為 2000ms (2 秒)
            easing: 'easeInOutQuad' // 動畫緩動效果
        });
    } else {
        anime({
            targets: '.box',
            translateX: 0,   
            scale: 1,           // 回到原始尺寸
            rotate: '+=1turn',  // 累積旋轉效果
            duration: 2000,     // 動畫持續時間為 2000ms (2 秒)
            easing: 'easeInOutQuad' // 動畫緩動效果
        });
    }
    tug = !tug;
});
        `;

        // 使用 SweetAlert2 顯示程式碼
        Swal.fire({
            title: '程式碼示例',
            html: `<pre><code>${code}</code></pre>`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '好',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: 'Thumbs down',
            customClass: {
                popup: 'swal2-custom-width' // 自定義類
            }
        });
    });
});