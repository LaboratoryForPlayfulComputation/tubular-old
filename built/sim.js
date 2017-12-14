var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="youtube.d.ts" />
var pxsim;
(function (pxsim) {
    var video;
    (function (video) {
        /**
        * Set video using YouTube URL ID
         * @param rate
         */
        //% blockId=youtube_set_video block="set video %string" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function setVideo(id) {
            pxsim.board().player.cueVideoById(id);
        }
        video.setVideo = setVideo;
        /**
        * Change video speed
         * @param rate
         */
        //% blockId=youtube_set_speed block="set speed %rate" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function setSpeed(rate) {
            pxsim.board().player.setPlaybackRate(rate);
        }
        video.setSpeed = setSpeed;
        /**
        * Seek to a specific time
         * @param time
         */
        //% blockId=youtube_seek block="seek to %time" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function seek(time) {
            pxsim.board().player.seekTo(time);
        }
        video.seek = seek;
        /**
        * Rewind a specific number of seconds
         * @param value
         */
        //% blockId=youtube_rewind block="rewind %value" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function rewind(value) {
            var time = pxsim.board().player.getCurrentTime();
            pxsim.board().player.seekTo(time - value);
        }
        video.rewind = rewind;
        /**
        * Fast forward a specific number of seconds
         * @param value
         */
        //% blockId=youtube_fastforward block="fast forward %value" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function fastforward(value) {
            var time = pxsim.board().player.getCurrentTime();
            pxsim.board().player.seekTo(time + value);
        }
        video.fastforward = fastforward;
        /**
        * Set volume of the video
         * @param value
         */
        //% blockId=youtube_set_volume block="set volume %value" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function setVolume(value) {
            pxsim.board().player.setVolume(value);
        }
        video.setVolume = setVolume;
        /**
        * Play video
         */
        //% blockId=youtube_play block="play video" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function play() {
            pxsim.board().player.playVideo();
        }
        video.play = play;
        /**
        * Pause video
         */
        //% blockId=youtube_pause block="pause video" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function pause() {
            pxsim.board().player.pauseVideo();
        }
        video.pause = pause;
        /**
        * Stop video
         */
        //% blockId=youtube_stop block="stop video" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function stop() {
            pxsim.board().player.stopVideo();
        }
        video.stop = stop;
        /**
        * Mute video
         */
        //% blockId=youtube_mute block="mute video" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function mute() {
            pxsim.board().player.mute();
        }
        video.mute = mute;
        /**
        * Unmute video
         */
        //% blockId=youtube_unmute block="unmute video" blockGap=8
        //% weight=98
        //% blockNamespace=youtube inBasicCategory=true
        function unmute() {
            pxsim.board().player.unMute();
        }
        video.unmute = unmute;
    })(video = pxsim.video || (pxsim.video = {}));
})(pxsim || (pxsim = {}));
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
/// <reference path="youtube.d.ts" />
var pxsim;
(function (pxsim) {
    var player = null;
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
            this.player = new YT.Player('video-placeholder', {
                width: 350,
                height: 250,
                videoId: 'mZxxhxjgnC0',
                playerVars: {
                    color: 'white',
                    playlist: 'GpBFOJ3R0M4,cWKi6F5jMjo'
                },
                events: {
                    onReady: this.initializePlayer
                }
            });
        }
        Board.prototype.initAsync = function (msg) {
            //document.body.innerHTML = ''; // clear children           
            return Promise.resolve();
        };
        Board.prototype.initializePlayer = function () {
            this.player.playVideo();
            /*
            // Update the controls on load
            this.updateTimerDisplay();
            this.updateProgressBar();
        
            // Clear any old interval.
            //clearInterval(time_update_interval);
        
            // Start interval to update elapsed time display and
            // the elapsed part of the progress bar every second.
            let time_update_interval = setInterval(function () {
                this.updateTimerDisplay();
                this.updateProgressBar();
            }, 1000)
            */
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
