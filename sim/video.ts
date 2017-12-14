/// <reference path="video.d.ts" />

namespace pxsim.video {

    let player = null as any;
    (window as any).onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video-placeholder', {
            width: 350,
            height: 250,
            videoId: 'mZxxhxjgnC0',
            playerVars: {
                color: 'white',
            },
            events: {
                onReady: initializePlayer
            }
        });    
    }      
        
    function initializePlayer(){
    }

    export function resetVideo(){
        if (player){
            player.seekTo(0);
            player.pauseVideo();
            player.unMute();
        }
    }

    /**
    * Set video using YouTube URL ID 
     * @param rate
     */
    //% blockId=youtube_set_video block="set video %string" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setVideo(id: string) {
        player.cueVideoById(id);
    }

    /**
    * Change video speed 
     * @param rate
     */
    //% blockId=youtube_set_speed block="set speed %rate" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setSpeed(rate: number) {
        player.setPlaybackRate(rate);
    }

    /**
    * Seek to a specific time 
     * @param time
     */
    //% blockId=youtube_seek block="seek to %time" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function seek(time: number) {
        player.seekTo(time);
    }    

    /**
    * Rewind a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_rewind block="rewind %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function rewind(value: number) {
        let time = player.getCurrentTime();
        player.seekTo(time - value);
    }  

    /**
    * Fast forward a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_fastforward block="fast forward %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function fastforward(value: number) {
        let time = player.getCurrentTime();
        player.seekTo(time + value);
    }  

    /**
    * Set volume of the video 
     * @param value
     */
    //% blockId=youtube_set_volume block="set volume %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setVolume(value: number) {
        player.setVolume(value);
    }  

    /**
    * Play video
     */
    //% blockId=youtube_play block="play video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function play() {
        player.playVideo();
    }  

    /**
    * Pause video
     */
    //% blockId=youtube_pause block="pause video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function pause() {
        player.pauseVideo();
    }

    /**
    * Stop video
     */
    //% blockId=youtube_stop block="stop video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function stop() {
        player.stopVideo();
    }

    /**
    * Mute video
     */
    //% blockId=youtube_mute block="mute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function mute() {
        player.mute();
    }

    /**
    * Unmute video
     */
    //% blockId=youtube_unmute block="unmute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function unmute() {
        player.unMute();
    }

}