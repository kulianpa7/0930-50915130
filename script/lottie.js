lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // 容器
    renderer: 'svg', // 渲染方式
    loop: true, // 是否循環播放
    autoplay: true, // 自動播放
    path: 'https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json' // JSON 動畫檔案
});

$(document).ready(function () {
    
    $(".lottie_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // 容器
    renderer: 'svg', // 渲染方式
    loop: true, // 是否循環播放
    autoplay: true, // 自動播放
    path: 'https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json' // JSON 動畫檔案
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