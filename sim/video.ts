namespace pxsim.video {

    let player = null as any;
    (window as any).onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video-placeholder', {
            width: 415,
            height: 325,
            videoId: '6v2L2UGZJAM',
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
    //% blockId=video_set_video block="set video %string" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function setVideo(id: string) {
        if (player) player.cueVideoById(id);
    }

    /**
    * Change video speed 
     * @param rate
     */
    //% blockId=video_set_speed block="set speed %rate" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function setSpeed(rate: number) {
        if (player) player.setPlaybackRate(rate);
    }

    /**
    * Get video speed 
     */
    //% blockId=video_get_speed block="get speed" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function getSpeed(): number {
        if (player) return player.getPlaybackRate();
        return 0;
    }    

    /**
    * Determine if the video is playing 
     */
    //% blockId=video_is_playing block="video is playing" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function isPlaying(): boolean {
        if (player && (player.getPlayerState() == 1)) return true;
        return false;
    }

    /**
    * Determine the current time of the video 
     */
    //% blockId=video_current_time block="current time" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function getCurrentTime(): number {
        if (player) return player.getCurrentTime();
        return 0;
    }

    /**
    * Determine the duration of the video 
     */
    //% blockId=video_duration block="video duration" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function getDuration(): number {
        if (player) return player.getDuration();
        return 0;
    }

    /**
    * Get the video's current volume 
     */
    //% blockId=video_get_volume block="video volume" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function getVolume(): number {
        if (player) return player.getVolume();
        return 0;
    }

    /**
    * Determine if the video is muted 
     */
    //% blockId=video_is_muted block="video is muted" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function isMuted(): boolean {
        if (player) return player.isMuted();
        return false;
    }

    /**
    * Seek to a specific time 
     * @param time
     */
    //% blockId=video_seek block="seek to %time" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function seek(time: number) {
        if (player) player.seekTo(time);
    }    

    /**
    * Rewind a specific number of seconds 
     * @param value
     */
    //% blockId=video_rewind block="rewind %value" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function rewind(value: number) {
        if (player) {
            let time = player.getCurrentTime();
            player.seekTo(time - value);
        }
    }  

    /**
    * Fast forward a specific number of seconds 
     * @param value
     */
    //% blockId=video_fastforward block="fast forward %value" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function fastforward(value: number) {
        if (player) {
            let time = player.getCurrentTime();
            player.seekTo(time + value);
        }
    }  

    /**
    * Set volume of the video 
     * @param value
     */
    //% blockId=video_set_volume block="set volume %value" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function setVolume(value: number) {
        if (player) player.setVolume(value);
    }  

    /**
    * Play video
     */
    //% blockId=video_play block="play video" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function play() {
        if (player) player.playVideo();
    }  

    /**
    * Pause video
     */
    //% blockId=video_pause block="pause video" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function pause() {
        if (player) player.pauseVideo();
    }

    /**
    * Stop video
     */
    //% blockId=video_stop block="stop video" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function stop() {
        if (player) player.stopVideo();
    }

    /**
    * Mute video
     */
    //% blockId=video_mute block="mute video" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function mute() {
        if (player) player.mute();
    }

    /**
    * Unmute video
     */
    //% blockId=video_unmute block="unmute video" blockGap=8
    //% weight=98
    //% blockNamespace=video inBasicCategory=true
    export function unmute() {
        if (player) player.unMute();
    }

}