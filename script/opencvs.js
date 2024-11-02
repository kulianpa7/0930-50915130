// 等待 OpenCV.js 加載完成
let cv = null;
function onOpenCvReady() {
    cv = window.cv;
    document.getElementById('upload').addEventListener('change', loadImage);
}

// 加載並處理圖像
function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.onload = function () {
            // 獲取 canvas 的大小
            const canvas = document.getElementById('opencv_canvas');
            canvas.width = imgElement.width; // 設置 canvas 寬度
            canvas.height = imgElement.height; // 設置 canvas 高度
            
            // 創建一個新的 Mat 物件，並調整大小
            const mat = cv.imread(imgElement);
            const resizedMat = new cv.Mat();
            cv.resize(mat, resizedMat, new cv.Size(canvas.width, canvas.height)); // 調整大小
            
            const grayMat = new cv.Mat();
            cv.cvtColor(resizedMat, grayMat, cv.COLOR_RGBA2GRAY); // 轉換為灰階
            cv.imshow('opencv_canvas', grayMat); // 在 canvas 上顯示結果
            
            // 釋放內存
            mat.delete(); 
            resizedMat.delete();
            grayMat.delete();
        };
    };
    reader.readAsDataURL(file);
}
$(document).ready(function () {
    
    $(".opencv_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
// 等待 OpenCV.js 加載完成
let cv = null;
function onOpenCvReady() {
    cv = window.cv;
    document.getElementById('upload').addEventListener('change', loadImage);
}

// 加載並處理圖像
function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.onload = function () {
            // 獲取 canvas 的大小
            const canvas = document.getElementById('opencv_canvas');
            canvas.width = imgElement.width; // 設置 canvas 寬度
            canvas.height = imgElement.height; // 設置 canvas 高度
            
            // 創建一個新的 Mat 物件，並調整大小
            const mat = cv.imread(imgElement);
            const resizedMat = new cv.Mat();
            cv.resize(mat, resizedMat, new cv.Size(canvas.width, canvas.height)); // 調整大小
            
            const grayMat = new cv.Mat();
            cv.cvtColor(resizedMat, grayMat, cv.COLOR_RGBA2GRAY); // 轉換為灰階
            cv.imshow('opencv_canvas', grayMat); // 在 canvas 上顯示結果
            
            // 釋放內存
            mat.delete(); 
            resizedMat.delete();
            grayMat.delete();
        };
    };
    reader.readAsDataURL(file);
}
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