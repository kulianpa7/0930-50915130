// 假設我們有一張圖片，僅當圖片進入視窗範圍時才載入
const img = document.querySelector('.lazy');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target); // 停止觀察該圖片
        }
    });
});
observer.observe(img);

$(".lazy_toMIDDLE").on("click", function () {
    // 要顯示的程式碼
    const code = `
// 假設我們有一張圖片，僅當圖片進入視窗範圍時才載入
const img = document.querySelector('.lazy');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target); // 停止觀察該圖片
        }
    });
});
observer.observe(img);
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