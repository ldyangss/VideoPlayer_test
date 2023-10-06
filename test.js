document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#ap1video');
    const playPauseBtn = document.querySelector('#playPause');
    const volumeSlider = document.querySelector('#volume');
    const volumeIcon = document.querySelector('#volume-icon');
    const fullscreenBtn = document.querySelector('#fullscreen');
    const closeBtn = document.querySelector('#close');
    const progressBar = document.querySelector('#progress');
    const videoContainer = document.querySelector('.ap1-container');
    const watchNowBtn = document.querySelector('.btn');
    const currentTimeElem = document.querySelector('#currentTime');
    const totalTimeElem = document.querySelector('#totalTime');

    // 当 "Watch Now" 按钮被点击时，显示视频容器并自动播放
    watchNowBtn.addEventListener('click', function() {
        videoContainer.style.visibility = 'visible';  // Updated here
        video.load();
        video.volume = 0.5;
        document.querySelector('a-scene').flushToDOM(true);
    });

    // 设置进度条的最大值为视频的时长
    video.addEventListener('loadedmetadata', function() {
        progressBar.max = video.duration;
        totalTimeElem.textContent = formatTime(video.duration);
    });

    // 更新进度条和当前播放时间
    video.addEventListener('timeupdate', function() {
        progressBar.value = video.currentTime;
        currentTimeElem.textContent = formatTime(video.currentTime);
    });

    // 使用户能通过点击或拖动进度条来定位视频
    progressBar.addEventListener('input', function() {
        video.currentTime = progressBar.value;
    });

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value;
    });

    fullscreenBtn.addEventListener('click', function() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.querySelector('a-scene').requestFullscreen();
        }
    });

    closeBtn.addEventListener('click', function() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        video.pause();
        video.currentTime = 0;
        videoContainer.style.visibility = 'hidden';  // Updated here
    }); 

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});
