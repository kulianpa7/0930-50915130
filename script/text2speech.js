// 使用 Web Speech API 將文字轉換為語音
function speakText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}
$(".text2speech").on("click",function(){
    speakText($(".T2S").val());
})

$(document).ready(function () {
    
    $(".text2speech_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
function speakText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}
$(".text2speech").on("click",function(){
    speakText($(".T2S").val());
})
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