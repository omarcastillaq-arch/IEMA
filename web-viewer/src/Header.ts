export class Header {
    public container: HTMLElement;
    public profile_pic: HTMLImageElement;
    public user_data: HTMLElement;
    public play: HTMLButtonElement;
    public pause: HTMLButtonElement;
    public scale_panel: HTMLElement;
    public heart_rate_panel: HTMLElement;
    public date_and_hour_panel: HTMLElement;

    constructor() {
        //Header
        this.container = document.createElement("header");
        this.container.id = "header";
        this.container.style.position = "relative";
        this.container.style.gridColumn = "1 / -1";

        //Play button
        this.play = document.createElement("button");
        this.play.id = "play";
        this.play.style.width = "100px";
        this.play.style.height = "66px";
        this.play.style.borderRadius = "15px";
        this.play.style.backgroundColor = "#464647";
        this.play.style.marginRight = "10px";
        this.play.style.position = "relative";
        this.play.style.color = "white";
        this.play.textContent = "Play";
        this.container.appendChild(this.play);

        //Pause button
        this.pause = document.createElement("button");
        this.pause.id = "pause";
        this.pause.style.width = "100px";
        this.pause.style.height = "66px";
        this.pause.style.borderRadius = "15px";
        this.pause.style.backgroundColor = "#464647";
        this.pause.style.position = "absolute";
        this.pause.style.color = "white";
        this.pause.textContent = "Pause";
        this.container.appendChild(this.pause);
    }
}