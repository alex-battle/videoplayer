const video = document.getElementById('video')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')


// play and pause video 
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}
// update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    } else{
    play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
}
}
// update progress & timestamp
function updateProgress(){
console.log(video.duration)
progress.value = (video.currentTime / video.duration) * 100
}

// set video time to go with the progress bar
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/ 100
}

// stop video
function stopVideo(){
    video.currentTime = 0
    video.pause()
}

// event listeners(call specific functions(Play, pause, stop))
// video will have a few events

// play video when stopped, stop the video when playing
video.addEventListener('click', toggleVideoStatus)

// switch icons
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)

// as video plays its going to continuously call this function
video.addEventListener('timeupdate', updateProgress)

// play button 
play.addEventListener('click', toggleVideoStatus)

// stop button
stop.addEventListener('click', stopVideo)

// when slider changes it will call this and go to that point of the video
progress.addEventListener('change', setVideoProgress)
