var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../libs/core/enums.d.ts"/>
var pxsim;
(function (pxsim) {
    var loops;
    (function (loops) {
        /**
         * Repeats the code forever in the background. On each iteration, allows other code to run.
         * @param body the code to repeat
         */
        //% help=functions/forever weight=55 blockGap=8
        //% blockId=device_forever block="forever" 
        function forever(body) {
            pxsim.thread.forever(body);
        }
        loops.forever = forever;
        /**
         * Pause for the specified time in milliseconds
         * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
         */
        //% help=functions/pause weight=54
        //% block="pause (ms) %pause" blockId=device_pause
        function pauseAsync(ms) {
            return Promise.delay(ms);
        }
        loops.pauseAsync = pauseAsync;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
function logMsg(m) { console.log(m); }
var pxsim;
(function (pxsim) {
    var console;
    (function (console) {
        /**
         * Print out message
         */
        //% 
        function log(msg) {
            logMsg("CONSOLE: " + msg);
            // why doesn't that work?
            pxsim.board().writeSerial(msg + "\n");
        }
        console.log = log;
    })(console = pxsim.console || (pxsim.console = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../typings/globals/peerjs/index.d.ts" />
/// <reference path="video.d.ts" />
var pxsim;
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = (function (_super) {
        __extends(Board, _super);
        function Board() {
            _super.call(this);
            this.bus = new pxsim.EventBus(pxsim.runtime);
        }
        Board.prototype.initAsync = function (msg) {
            pxsim.video.resetVideo();
            return Promise.resolve();
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
/// <reference path="video.d.ts" />
var pxsim;
(function (pxsim) {
    var video;
    (function (video) {
        var player = null;
        window.onYouTubeIframeAPIReady = function () {
            player = new YT.Player('video-placeholder', {
                width: 350,
                height: 250,
                videoId: '6v2L2UGZJAM',
                playerVars: {
                    color: 'white',
                },
                events: {
                    onReady: initializePlayer
                }
            });
        };
        function initializePlayer() {
        }
        function resetVideo() {
            if (player) {
                player.seekTo(0);
                player.pauseVideo();
                player.unMute();
            }
        }
        video.resetVideo = resetVideo;
        /**
        * Set video using YouTube URL ID
         * @param rate
         */
        //% blockId=video_set_video block="set video %string" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function setVideo(id) {
            player.cueVideoById(id);
        }
        video.setVideo = setVideo;
        /**
        * Change video speed
         * @param rate
         */
        //% blockId=video_set_speed block="set speed %rate" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function setSpeed(rate) {
            player.setPlaybackRate(rate);
        }
        video.setSpeed = setSpeed;
        /**
        * Get video speed
         */
        //% blockId=video_get_speed block="get speed" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function getSpeed() {
            return player.getPlaybackRate();
        }
        video.getSpeed = getSpeed;
        /**
        * Determine if the video is playing
         */
        //% blockId=video_is_playing block="video is playing" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function isPlaying() {
            if (player.getPlayerState() == 1)
                return true;
            else
                return false;
        }
        video.isPlaying = isPlaying;
        /**
        * Determine the current time of the video
         */
        //% blockId=video_current_time block="current time" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function getCurrentTime() {
            return player.getCurrentTime();
        }
        video.getCurrentTime = getCurrentTime;
        /**
        * Determine the duration of the video
         */
        //% blockId=video_duration block="video duration" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function getDuration() {
            return player.getDuration();
        }
        video.getDuration = getDuration;
        /**
        * Get the video's current volume
         */
        //% blockId=video_get_volume block="video volume" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function getVolume() {
            return player.getVolume();
        }
        video.getVolume = getVolume;
        /**
        * Determine if the video is muted
         */
        //% blockId=video_is_muted block="video is muted" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function isMuted() {
            return player.isMuted();
        }
        video.isMuted = isMuted;
        /**
        * Seek to a specific time
         * @param time
         */
        //% blockId=video_seek block="seek to %time" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function seek(time) {
            player.seekTo(time);
        }
        video.seek = seek;
        /**
        * Rewind a specific number of seconds
         * @param value
         */
        //% blockId=video_rewind block="rewind %value" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function rewind(value) {
            var time = player.getCurrentTime();
            player.seekTo(time - value);
        }
        video.rewind = rewind;
        /**
        * Fast forward a specific number of seconds
         * @param value
         */
        //% blockId=video_fastforward block="fast forward %value" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function fastforward(value) {
            var time = player.getCurrentTime();
            player.seekTo(time + value);
        }
        video.fastforward = fastforward;
        /**
        * Set volume of the video
         * @param value
         */
        //% blockId=video_set_volume block="set volume %value" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function setVolume(value) {
            player.setVolume(value);
        }
        video.setVolume = setVolume;
        /**
        * Play video
         */
        //% blockId=video_play block="play video" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function play() {
            player.playVideo();
        }
        video.play = play;
        /**
        * Pause video
         */
        //% blockId=video_pause block="pause video" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function pause() {
            player.pauseVideo();
        }
        video.pause = pause;
        /**
        * Stop video
         */
        //% blockId=video_stop block="stop video" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function stop() {
            player.stopVideo();
        }
        video.stop = stop;
        /**
        * Mute video
         */
        //% blockId=video_mute block="mute video" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function mute() {
            player.mute();
        }
        video.mute = mute;
        /**
        * Unmute video
         */
        //% blockId=video_unmute block="unmute video" blockGap=8
        //% weight=98
        //% blockNamespace=video inBasicCategory=true
        function unmute() {
            player.unMute();
        }
        video.unmute = unmute;
    })(video = pxsim.video || (pxsim.video = {}));
})(pxsim || (pxsim = {}));
