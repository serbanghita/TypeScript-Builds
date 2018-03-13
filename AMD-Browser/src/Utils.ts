// interface Window {
//     attachEvent(event: string, listener: EventListener): boolean;
//     detachEvent(event: string, listener: EventListener): void;
// }

export default class Utils {
    public randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public ready(fn: any) {

    if ( document.addEventListener ){
        // Use the handy event callback
        // document.addEventListener( "DOMContentLoaded", fn, false );

        // A fallback to window.onload, that will always work
        window.addEventListener("load", fn, false);

        // If IE event model is used
    } else {

        // Ensure firing before onload, maybe late but safe also for iframes
        // document.attachEvent( "onreadystatechange", fn );

        // A fallback to window.onload, that will always work
        (<any>window).attachEvent("onload", fn);
    }

}
}
