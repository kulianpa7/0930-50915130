let aosAnimations = [
    "fade", "fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right",
    "fade-up-left", "fade-down-right", "fade-down-left", "flip-up", "flip-down",
    "flip-left", "flip-right", "slide-up", "slide-down", "slide-left", "slide-right",
    "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right",
    "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-left", "zoom-out-right"
];
let aosAnimationsChinese = [
    "淡入", "自下而上淡入", "自上而下淡入", "自左向右淡入", "自右向左淡入",
    "自下右方淡入", "自下左方淡入", "自上右方淡入", "自上左方淡入", "自下而上翻轉",
    "自上而下翻轉", "自左向右翻轉", "自右向左翻轉", "向上滑入", "向下滑入",
    "向左滑入", "向右滑入", "向內縮放", "向內縮放並向上移動", "向內縮放並向下移動",
    "向內縮放並向左移動", "向內縮放並向右移動", "向外放大", "向外放大並向上移動", "向外放大並向下移動",
    "向外放大並向左移動", "向外放大並向右移動"
];
let $aos = $(".aos_example");

$(".aos-frame").on("click", function () {
    // 隱藏元素，準備重新觸發動畫
    $aos.css("opacity", 0); // 確保元素隱藏，以便新動畫能顯示效果

    // 移除當前的 data-aos 屬性，暫時停用動畫
    $aos.removeAttr("data-aos");

    // 強制刷新 AOS（去除動畫）
    AOS.refresh();

    // 添加新的 data-aos 屬性，應用新的動畫效果
    $aos.attr("data-aos", aosAnimations[0]);
    $(".aos_example_chinese").text(aosAnimationsChinese[0]);

    // 將當前動畫移至陣列末尾，以便下一次點擊時使用下一個動畫
    aosAnimations.push(aosAnimations.shift());
    aosAnimationsChinese.push(aosAnimationsChinese.shift());

    // 等待短暫時間後顯示元素，以觸發新的動畫
    setTimeout(() => {
        $aos.css("opacity", 1); // 顯示元素
        AOS.refresh(); // 強制刷新 AOS，使新的動畫立即生效
        // 清空 data-aos 屬性，這裡使用 attr() 來確保能生效
        $aos.attr("data-aos", "");
        // 再次刷新 AOS
        AOS.refresh();
    }, 200);

});


$(document).ready(function () {

    $(".aos_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
let aosAnimations = [
    "fade", "fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right",
    "fade-up-left", "fade-down-right", "fade-down-left", "flip-up", "flip-down",
    "flip-left", "flip-right", "slide-up", "slide-down", "slide-left", "slide-right",
    "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right",
    "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-left", "zoom-out-right"
];
let aosAnimationsChinese = [
    "淡入", "自下而上淡入", "自上而下淡入", "自左向右淡入", "自右向左淡入",
    "自下右方淡入", "自下左方淡入", "自上右方淡入", "自上左方淡入", "自下而上翻轉",
    "自上而下翻轉", "自左向右翻轉", "自右向左翻轉", "向上滑入", "向下滑入",
    "向左滑入", "向右滑入", "向內縮放", "向內縮放並向上移動", "向內縮放並向下移動",
    "向內縮放並向左移動", "向內縮放並向右移動", "向外放大", "向外放大並向上移動", "向外放大並向下移動",
    "向外放大並向左移動", "向外放大並向右移動"
];
let $aos = $(".aos_example");

$(".aos-frame").on("click", function () {
    // 隱藏元素，準備重新觸發動畫
    $aos.css("opacity", 0); // 確保元素隱藏，以便新動畫能顯示效果

    // 移除當前的 data-aos 屬性，暫時停用動畫
    $aos.removeAttr("data-aos");

    // 強制刷新 AOS（去除動畫）
    AOS.refresh();

    // 添加新的 data-aos 屬性，應用新的動畫效果
    $aos.attr("data-aos", aosAnimations[0]);
    $(".aos_example_chinese").text(aosAnimationsChinese[0]);

    // 將當前動畫移至陣列末尾，以便下一次點擊時使用下一個動畫
    aosAnimations.push(aosAnimations.shift());
    aosAnimationsChinese.push(aosAnimationsChinese.shift());

    // 等待短暫時間後顯示元素，以觸發新的動畫
    setTimeout(() => {
        $aos.css("opacity", 1); // 顯示元素
        AOS.refresh(); // 強制刷新 AOS，使新的動畫立即生效
        // 清空 data-aos 屬性，這裡使用 attr() 來確保能生效
        $aos.attr("data-aos", "");
        // 再次刷新 AOS
        AOS.refresh();
    }, 200);

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