/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="youtube.d.ts" />

namespace pxsim.video {

    /**
    * Set video using YouTube URL ID 
     * @param rate
     */
    //% blockId=youtube_set_video block="set video %string" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setVideo(id: string) {
        board().player.cueVideoById(id);
    }

    /**
    * Change video speed 
     * @param rate
     */
    //% blockId=youtube_set_speed block="set speed %rate" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setSpeed(rate: number) {
        board().player.setPlaybackRate(rate);
    }

    /**
    * Seek to a specific time 
     * @param time
     */
    //% blockId=youtube_seek block="seek to %time" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function seek(time: number) {
        board().player.seekTo(time);
    }    

    /**
    * Rewind a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_rewind block="rewind %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function rewind(value: number) {
        let time = board().player.getCurrentTime();
        board().player.seekTo(time - value);
    }  

    /**
    * Fast forward a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_fastforward block="fast forward %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function fastforward(value: number) {
        let time = board().player.getCurrentTime();
        board().player.seekTo(time + value);
    }  

    /**
    * Set volume of the video 
     * @param value
     */
    //% blockId=youtube_set_volume block="set volume %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function setVolume(value: number) {
        board().player.setVolume(value);
    }  

    /**
    * Play video
     */
    //% blockId=youtube_play block="play video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function play() {
        board().player.playVideo();
    }  

    /**
    * Pause video
     */
    //% blockId=youtube_pause block="pause video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function pause() {
        board().player.pauseVideo();
    }

    /**
    * Stop video
     */
    //% blockId=youtube_stop block="stop video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function stop() {
        board().player.stopVideo();
    }

    /**
    * Mute video
     */
    //% blockId=youtube_mute block="mute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function mute() {
        board().player.mute();
    }

    /**
    * Unmute video
     */
    //% blockId=youtube_unmute block="unmute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    export function unmute() {
        board().player.unMute();
    }

}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m:string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg:string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}

