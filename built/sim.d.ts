/// <reference path="../libs/core/enums.d.ts" />
/// <reference path="../sim/youtube.d.ts" />
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
declare namespace pxsim.video {
    /**
    * Set video using YouTube URL ID
     * @param rate
     */
    function setVideo(id: string): void;
    /**
    * Change video speed
     * @param rate
     */
    function setSpeed(rate: number): void;
    /**
    * Seek to a specific time
     * @param time
     */
    function seek(time: number): void;
    /**
    * Rewind a specific number of seconds
     * @param value
     */
    function rewind(value: number): void;
    /**
    * Fast forward a specific number of seconds
     * @param value
     */
    function fastforward(value: number): void;
    /**
    * Set volume of the video
     * @param value
     */
    function setVolume(value: number): void;
    /**
    * Play video
     */
    function play(): void;
    /**
    * Pause video
     */
    function pause(): void;
    /**
    * Stop video
     */
    function stop(): void;
    /**
    * Mute video
     */
    function mute(): void;
    /**
    * Unmute video
     */
    function unmute(): void;
}
declare namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    function forever(body: RefAction): void;
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    function pauseAsync(ms: number): Promise<void>;
}
declare function logMsg(m: string): void;
declare namespace pxsim.console {
    /**
     * Print out message
     */
    function log(msg: string): void;
}
declare namespace pxsim {
    /**
     * Gets the current 'board', eg. program state.
     */
    function board(): Board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        bus: EventBus;
        player: YT.Player;
        constructor();
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void>;
        initializePlayer(): void;
    }
}
