document.addEventListener("DOMContentLoaded", function() {
    const ap2btn = document.getElementById('ap2btn');
    const ap2container = document.querySelector('.ap2container');
    const ap2close = document.getElementById('ap2close');
    const ap2video = document.querySelector('.ap2container video');

// 显示视频窗口但不播放视频
ap2btn.addEventListener("click", function() {
    console.log("ap2btn clicked");  // 添加此行
    ap2container.style.visibility = "visible";
    ap2video.pause();
});

// 关闭视频窗口并返回到主页面
ap2close.addEventListener("click", function() {
    ap2container.style.visibility = "hidden";
    ap2video.currentTime = 0;

    // 如果视频在全屏模式下，退出全屏
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

});