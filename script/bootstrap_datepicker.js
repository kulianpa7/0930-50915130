$(document).ready(function() {
    $("#datepicker").datepicker({
        changeMonth: true, // 允許選擇月份
        changeYear: true // 允許選擇年份
    });
});

$(document).ready(function () {
    
    $(".datepicker_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
$(document).ready(function() {
    $("#datepicker").datepicker({
        changeMonth: true, // 允許選擇月份
        changeYear: true // 允許選擇年份
    });
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
        });
    });


    $(".web_toMIDDLE").on("click", function () {
        const code = `
            <input type="date" class="form-control" id="date" name="date" style="user-select: none;">
        `;
        Swal.fire({
            title: '程式碼示例',
            text: `${code}`,
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
    })
});
