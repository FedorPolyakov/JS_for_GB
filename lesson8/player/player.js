/**
 * Плеер имеет иконки управления:
 * запуск, пауза, перемотать вперед на 2с(или нажатием на стрелку вправо),
 * перемотать назад на 1с(или нажатием на стрелку вправо),
 * ползунок громкости(громкость можно регулировать нажатиями на клавиши стрелка вверх/вниз),
 * выключение звука
 */

'use strict';

class Player {
    constructor(){
        this.video = document.querySelector('video');
        this.playBtn = document.querySelector('.fa-play');
        this.pauseBtn = document.querySelector('.fa-pause');
        this.volume = document.querySelector('.volume');
        this.timing = document.querySelector('.timing');
        this.backwardBtn = document.querySelector('.fa-backward');
        this.forwardBtn = document.querySelector('.fa-forward');
        this.currentTimeEl = document.querySelector('.currentTime');
        this.volumeUp = document.querySelector('.fa-volume-up');
        this.volumeDown = document.querySelector('.fa-volume-down');
        this.volumeMute = document.querySelector('.fa-volume-mute');
        this.volumeOff = document.querySelector('.fa-volume-off');

        this.wasVideoPlaying = false;
        this.progressIdentifier = null;
        this.rememberVolumeValue = null;
    }
    /**
     * Функция запуска плеера. отслеживает нажатия на клавиши и иконки управления
     */
    run() {
        this.addButtonsClickHandlers(this.start.bind(this), this.stop.bind(this), this.mute.bind(this),
                                    this.changeTiming.bind(this), this.mouseDownTiming.bind(this),
                                     this.endedVideo.bind(this), this.changeVolume.bind(this),
                                     this.changeTimingRight.bind(this), this.changeTimingLeft.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this));
    }

    start(){
        if (this.video.paused){
            this.video.play();
            this.progressIdentifier = setInterval(this.changeProgress.bind(this), 100);
            this.changeAccessBtns({ playBtn: this.playBtn, pauseBtn: this.pauseBtn});
        }
    }

    stop(){
        if (!this.video.paused){
            this.video.pause();
            this.changeAccessBtns({ playBtn: this.playBtn, pauseBtn: this.pauseBtn});
        }
    }

    changeTiming(){
        this.video.currentTime = this.timing.value;

        if (this.wasVideoPlaying) {
            this.video.play();
            this.progressIdentifier = setInterval(this.changeProgress.bind(this), 100);
        } else {
            this.changeProgress.bind(this);
        }
    }

    mouseDownTiming(){
        this.wasVideoPlaying = !this.video.paused;
        if (this.wasVideoPlaying) {
            this.video.pause();
            clearInterval(this.progressIdentifier);
        }
    }

    changeProgress(){
        this.timing.value = this.video.currentTime;
        this.currentTimeEl.innerText = this.video.currentTime;
    }

    endedVideo(){
        clearInterval(this.progressIdentifier);
        console.log(this.video.currentTime);
    }

    changeTimingRight(){
        let right = 2;
        if (this.video.currentTime + right <= this.video.duration){
            this.video.currentTime += right;
        } else {
            this.video.currentTime = this.video.duration;
        }
        this.changeProgress();
    }

    changeTimingLeft(){
        let left = 1;
        if (this.video.currentTime - left >= 0){
            this.video.currentTime -= left;
        } else {
            this.video.currentTime = 0;
        }
        this.changeProgress();
    }

    changeVolume(){
        this.video.volume = this.volume.value;
    }

    changeVolumeUp(){
        let up = +this.volume.max * 0.1;
        this.changeVolume();
        if (this.video.volume + up <= 1 ) {
            this.video.volume += up;
            this.volume.value = this.video.volume;
        } else {
            this.video.volume = 1;
        }
        this.volumeDown.classList.toggle('hidden', true);
        this.volumeOff.classList.toggle('hidden',true);
        if (this.volumeUp.classList.contains('hidden')){
            this.volumeUp.classList.remove('hidden');
        }
    }

    changeVolumeDown(){
        let down = +this.volume.max*0.1;
        this.changeVolume();
        if (this.video.volume - down >= 0 ) {
            this.video.volume -= down;
            this.volume.value = this.video.volume;
        } else {
            this.video.volume = 0;
        }
        this.volumeUp.classList.toggle('hidden', true);
        if (this.volumeDown.classList.contains('hidden')){
            this.volumeDown.classList.remove('hidden');
        }
        if (this.video.volume == 0){
            this.volumeDown.classList.add('hidden');
            this.volumeOff.classList.remove('hidden');
        }
    }
/**
 * Функци обработки нажатия на клавиши для управления плеером
 * @param {KeyEvent} event 
 */
    pressKeyHandler(event){
        switch (event.key) {
            case "ArrowUp":
                this.changeVolumeUp();
                break;
            case "ArrowDown":
                this.changeVolumeDown();
                break;
            case "ArrowRight":
                this.changeTimingRight();
                break;
            case "ArrowLeft":
                this.changeTimingLeft();
                break;
        }
        //код = 32 - пробел
        if (event.keyCode == 32) {
            if (this.video.paused){
                this.start();
            } else {
                this.stop();
            }
        }
    }
/**
 * Функция выключения звука
 */
    mute(){
        if (this.video.volume == 0) {
            this.volume.value = this.rememberVolumeValue;
            this.changeVolume();
        } else {
            this.rememberVolumeValue = this.volume.value;
            this.video.volume = 0;
            this.volume.value = 0;
        }
    }
/**
 * Функция для смены цвета иконок управления
 * Например, если видео проигрывается - то иконка запуска - серая(неактивная), а паузы черная(активная)
 * Активность иконок не успел сделать(т.е. чтобы неактивная иконка не могла нажиматься)
 * @param {Any options} options 
 */
    changeAccessBtns(options){
        let playBtn = options.playBtn;
        let pauseBtn = options.pauseBtn;
        playBtn.classList.toggle('notavaliable');
        pauseBtn.classList.toggle('notavaliable');
    }

    addButtonsClickHandlers(playBtnClickHandler, pauseBtnClickHandler, volumeMuteBtnClickHandler, 
                            timingChangeBtnClickHandler, timingMouseDownBtnClickHandler,
                             endedVideo, changeVolume, changeTimingRightBtn, changeTimingLeftBtn){
            this.playBtn.addEventListener('click', playBtnClickHandler);
            this.pauseBtn.addEventListener('click', pauseBtnClickHandler);
            this.volumeMute.addEventListener('click', volumeMuteBtnClickHandler);
            this.timing.addEventListener('change', timingChangeBtnClickHandler);
            this.timing.addEventListener('mousedown', timingMouseDownBtnClickHandler);
            this.video.addEventListener('ended', endedVideo);
            this.volume.addEventListener('change', changeVolume);
            this.forwardBtn.addEventListener('click', changeTimingRightBtn);
            this.backwardBtn.addEventListener('click', changeTimingLeftBtn);
    }
}