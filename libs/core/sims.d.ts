// Auto-generated from simulator. Do not edit.
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
declare namespace video {
    /**
     * Set video using YouTube URL ID 
     * @param rate
     */
    //% blockId=youtube_set_video block="set video %string" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::setVideo
    function setVideo(id: string): void;

    /**
     * Change video speed 
     * @param rate
     */
    //% blockId=youtube_set_speed block="set speed %rate" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::setSpeed
    function setSpeed(rate: number): void;

    /**
     * Seek to a specific time 
     * @param time
     */
    //% blockId=youtube_seek block="seek to %time" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::seek
    function seek(time: number): void;

    /**
     * Rewind a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_rewind block="rewind %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::rewind
    function rewind(value: number): void;

    /**
     * Fast forward a specific number of seconds 
     * @param value
     */
    //% blockId=youtube_fastforward block="fast forward %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::fastforward
    function fastforward(value: number): void;

    /**
     * Set volume of the video 
     * @param value
     */
    //% blockId=youtube_set_volume block="set volume %value" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::setVolume
    function setVolume(value: number): void;

    /**
     * Play video
     */
    //% blockId=youtube_play block="play video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::play
    function play(): void;

    /**
     * Pause video
     */
    //% blockId=youtube_pause block="pause video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::pause
    function pause(): void;

    /**
     * Stop video
     */
    //% blockId=youtube_stop block="stop video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::stop
    function stop(): void;

    /**
     * Mute video
     */
    //% blockId=youtube_mute block="mute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::mute
    function mute(): void;

    /**
     * Unmute video
     */
    //% blockId=youtube_unmute block="unmute video" blockGap=8
    //% weight=98
    //% blockNamespace=youtube inBasicCategory=true
    //% shim=video::unmute
    function unmute(): void;

}

// Auto-generated. Do not edit. Really.
