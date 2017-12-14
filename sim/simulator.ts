/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="youtube.d.ts" />

namespace pxsim {
    let player = null;


    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board() : Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public player: YT.Player;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
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
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            //document.body.innerHTML = ''; // clear children           
            return Promise.resolve();
        }       

        initializePlayer(){
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
        }       
        
    }
}