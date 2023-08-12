"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
require("./assets/css/style.css");
class PopupMedia {
    static run(config) {
        const popupWindow = new PopupMedia(config);
        popupWindow.show();
        return popupWindow._boxElem;
    }
    constructor(config) {
        this.options = {
            width: config_1.defaultConfigValues.width,
            height: config_1.defaultConfigValues.height,
            type: config_1.defaultConfigValues.type,
            url: "",
        };
        this._params = {
            enableDragging: false,
            startMousePosition: {
                X: 0,
                Y: 0,
            },
            startBoxPosition: {
                X: 0,
                Y: 0,
            },
        };
        this._dragStart = (e) => {
            this._params.enableDragging = true;
            this._params.startMousePosition.X = e.clientX;
            this._params.startMousePosition.Y = e.clientY;
            this._params.startBoxPosition.X = this._boxElem.offsetLeft;
            this._params.startBoxPosition.Y = this._boxElem.offsetTop;
            document.body.style.cursor = "move";
            document.body.addEventListener("mousemove", this._dragMove);
            document.body.addEventListener("mouseup", this._dragEnd);
            document.body.addEventListener("mouseleave", this._dragEnd);
        };
        this._dragMove = (e) => {
            if (!this._params.enableDragging)
                return;
            this._boxElem.style.left =
                this._params.startBoxPosition.X + e.clientX - this._params.startMousePosition.X + "px";
            this._boxElem.style.top =
                this._params.startBoxPosition.Y + e.clientY - this._params.startMousePosition.Y + "px";
        };
        this._dragEnd = () => {
            if (!this._params.enableDragging)
                return;
            this._params.enableDragging = false;
            this._params.startMousePosition.X = 0;
            this._params.startMousePosition.Y = 0;
            this._rePositionBoxInOutOfWindow();
            document.body.style.cursor = "";
            document.body.removeEventListener("mousemove", this._dragMove);
            document.body.removeEventListener("mouseup", this._dragEnd);
            document.body.removeEventListener("mouseleave", this._dragEnd);
        };
        this.setConfig(config);
    }
    setConfig(config) {
        this.options = Object.assign(Object.assign({}, config_1.defaultConfigValues), config);
    }
    _removeLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options.hasLoading)
                return;
            const loading = this._loadingElem;
            if (!loading)
                return;
            const callbackStyle = () => (loading.style.opacity = "0%");
            yield this._addStyleWithTransition(loading, callbackStyle);
            loading.remove();
        });
    }
    _appendLoading() {
        this._bodyElem.insertAdjacentHTML("afterbegin", this._generateLoadingHTML);
        const loading = this._loadingElem;
        //avoid batching reflows
        loading.offsetWidth;
        loading.style.opacity = "100%";
    }
    _renderHeader() {
        var _a, _b, _c;
        if (!this.options.hasHeader)
            return;
        this._boxElem.classList.add(config_1.classNames.hasHeader);
        this._boxElem.insertAdjacentHTML("afterbegin", this._generateBoxHeaderHTML);
        if (this.options.hasBtnClose) {
            this._headerElem.insertAdjacentHTML("beforeend", this._generateBtnCloseHTML);
        }
        if (this.options.hasBtnFullscreen && this.options.type !== "audio") {
            (_a = this._headerElem
                .querySelector("p")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterend", this._generateFullscreenButtonHTML);
        }
        if (this.options.hasBtnHelp) {
            (_b = this._headerElem
                .querySelector("p")) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML("afterend", this._generateHelpButtonHTML);
        }
        if (this.options.hasBtnSave) {
            (_c = this._headerElem
                .querySelector("p")) === null || _c === void 0 ? void 0 : _c.insertAdjacentHTML("afterend", this._generateSaveButtonHTML);
        }
    }
    show() {
        this.close(); // close if popup exist
        const body = window.document.body;
        body.insertAdjacentHTML("beforeend", this._generateMainBoxHTML);
        if (this.options.hasLoading)
            this._appendLoading();
        this._renderHeader();
        if (this.options.isDraggable)
            this._draggableEvent();
        if (this.options.isResizable)
            this._resizableEvent();
        //popup-window style
        if (this.options.width === window.innerWidth && this.options.height === window.innerHeight)
            this._boxElem.classList.add(config_1.classNames.fullscreen);
        const width = this.options.type === "audio"
            ? config_1.defaultValues.widthAudio
            : this.options.width
                ? this.options.width
                : config_1.defaltWidth;
        const height = this.options.type === "audio"
            ? config_1.defaultValues.heightAudio
            : this.options.height
                ? this.options.height
                : config_1.defaltHeight;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        this._boxElem.style.cssText = `
            width: ${width}px;
            height: ${height}px;
            left: ${left}px;
            top: ${top}px;
          `;
        document.body.offsetWidth; // add a delay between append html and add class for transition
        this._boxElem.classList.add(config_1.classNames.show);
        this.initEvents();
    }
    initEvents() {
        if (!this.options.hasHeader)
            return;
        //close with button
        if (this.options.hasBtnClose)
            this.btnCloseEventHandler();
        if (this.options.hasBtnSave)
            this.btnSaveEventHandler();
        if (this.options.hasBtnFullscreen && this.options.type !== "audio")
            this.btnFullscreenEventHandler();
        if (this.options.hasBtnHelp)
            this.btnHelpEventHandler();
        //close modal on playInBackground mode
        if (this.options.isPlayInBackground)
            this.addEndOfMediaEventHandler();
        if (this.options.type === "gallery")
            this._galleryEventHandler();
    }
    close() {
        if (!this._boxElem)
            return;
        this._boxElem.remove();
    }
    /**
     *
     * @param {HtmlElement} elem element to add style with transition
     * @param {Function} styleCallBack callback function to run your styles
     * @param {String} transition
     * @returns
     */
    _addStyleWithTransition(elem = this._boxElem, styleCallBack, transition = "all .3s") {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const onTransitionEnd = () => {
                    elem.removeEventListener("transitionend", onTransitionEnd);
                    return resolve();
                };
                if (!elem)
                    throw new Error("elem not found");
                elem.addEventListener("transitionend", onTransitionEnd);
                elem.style.transition = transition;
                styleCallBack();
            })
                .then(() => {
                elem.style.transition = "unset";
            })
                .catch(err => {
                console.log(err);
            });
        });
    }
    btnCloseEventHandler() {
        this._btnCloseElem.addEventListener("click", () => this.close());
    }
    btnSaveEventHandler() {
        this._btnSaveElem.addEventListener("click", e => {
            const target = e.target;
            target.classList.toggle(config_1.classNames.activeBtn);
            if (this.options.saveEvent)
                this.options.saveEvent();
        });
    }
    btnHelpEventHandler() {
        this._btnHelpElem.addEventListener("click", () => this.options.helpEvent && this.options.helpEvent());
    }
    btnFullscreenEventHandler() {
        this._btnFullscreenElem.addEventListener("click", e => {
            const btn = e.target;
            const action = btn.dataset.action;
            if (action === "open")
                this.openFullscreen();
            else if (action === "close")
                this.closeFullscreen();
        });
        this.fullscreenChangeHandler("popup_btn_fullscreen");
    }
    openFullscreen() {
        this.requestOpenFullscreen(this._boxElem);
    }
    closeFullscreen() {
        this.requestCloseFullscreen();
    }
    requestOpenFullscreen(selector) {
        if (selector.requestFullscreen)
            selector.requestFullscreen();
        else if (selector.mozRequestFullScreen)
            selector.mozRequestFullScreen(); // Firefox
        else if (selector.webkitRequestFullscreen)
            selector.webkitRequestFullscreen(); // Safari
        else if (selector.msRequestFullscreen)
            selector.msRequestFullscreen(); // IE11
    }
    requestCloseFullscreen() {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen(); // Firefox
        else if (document.webkitExitFullscreen)
            document.webkitExitFullscreen(); // Safari
        else if (document.msExitFullscreen)
            document.msExitFullscreen(); // IE11
    }
    fullscreenChangeHandler(id) {
        document.onfullscreenchange = function () {
            const selector = document.getElementById(id);
            if (selector.dataset.action === "open")
                selector.dataset.action = "close";
            else if (selector.dataset.action === "close")
                selector.dataset.action = "open";
        };
    }
    _draggableEvent() {
        this._headerElem.addEventListener("mousedown", this._dragStart);
    }
    _rePositionBoxInOutOfWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            const box = this._boxElem;
            let reposition = false;
            let callbackX = () => { };
            let callbackY = () => { };
            //X
            if (box.offsetLeft < 0) {
                reposition = true;
                callbackX = () => (box.style.left = 0 + "px");
            }
            else if (box.offsetLeft + box.offsetWidth > window.innerWidth) {
                reposition = true;
                callbackX = () => (box.style.left = window.innerWidth - box.offsetWidth + "px");
            }
            //Y
            if (box.offsetTop < 0) {
                reposition = true;
                callbackY = () => (box.style.top = 0 + "px");
            }
            else if (box.offsetTop + box.offsetHeight > window.innerHeight) {
                reposition = true;
                callbackY = () => (box.style.top = window.innerHeight - box.offsetHeight + "px");
            }
            if (!reposition)
                return;
            yield this._addStyleWithTransition(box, () => {
                callbackX();
                callbackY();
            });
        });
    }
    _resizableEvent() {
        this._boxElem.classList.add("resizable");
    }
    addEndOfMediaEventHandler() {
        var _a;
        const container = this._boxElem;
        if (!container || (this.options.type !== "audio" && this.options.type !== "video"))
            return;
        (_a = container.querySelector(".box-item")) === null || _a === void 0 ? void 0 : _a.addEventListener("ended", () => this.close());
    }
    _galleryEventHandler() {
        const btnLeft = document.querySelector(".popup-media-gallery-left");
        const btnRight = document.querySelector(".popup-media-gallery-right");
        if (!btnLeft || !btnRight)
            return;
        if (!this.options.isLoopMode)
            btnLeft.setAttribute("disabled", "true");
        const switchImage = (side) => {
            const currentImage = document.querySelector(".popup-media-gallery-images > img.active");
            if (!currentImage)
                return;
            const nextImage = currentImage[`${side}ElementSibling`];
            if (!nextImage) {
                if (!this.options.isLoopMode)
                    return;
                if (side === "next") {
                    const firstImage = document.querySelector(".popup-media-gallery-images > img:first-child");
                    firstImage === null || firstImage === void 0 ? void 0 : firstImage.classList.add("active");
                }
                else if (side === "previous") {
                    const lastImage = document.querySelector(".popup-media-gallery-images > img:last-child");
                    lastImage === null || lastImage === void 0 ? void 0 : lastImage.classList.add("active");
                }
                currentImage.classList.remove("active");
                return;
            }
            nextImage.classList.add("active");
            currentImage.classList.remove("active");
            if (this.options.isLoopMode)
                return;
            if (!nextImage.nextElementSibling)
                btnRight.setAttribute("disabled", "true");
            else if (nextImage.nextElementSibling)
                btnRight.removeAttribute("disabled");
            if (!nextImage.previousElementSibling)
                btnLeft.setAttribute("disabled", "true");
            else if (nextImage.previousElementSibling)
                btnLeft.removeAttribute("disabled");
        };
        btnRight.addEventListener("click", () => switchImage("next"));
        btnLeft.addEventListener("click", () => switchImage("previous"));
    }
    get _selectPopupTypeHTML() {
        return {
            iframe: `<iframe ${this.options.srcdoc ? `srcdoc='${this.options.srcdoc}'` : `src="${this.options.url}"`} class="box-item"></iframe>`,
            video: `<video src="${this.options.url}" class="box-item" ${this.options.hasVideoControls && "controls"} ${this.options.isVideoAutoPlay && "autoplay"}>
        <source src="${this.options.url}" type="video/mp4"/>
      </video>`,
            audio: `<audio src="${this.options.url}" class="box-item" ${this.options.hasAudioControls && "controls"} ${this.options.isAudioAutoPlay && "autoplay"}>
        <source src="${this.options.url}" type="audio/mpeg"/>
      </audio>`,
            image: `<img src="${this.options.url}" class="box-item" />`,
            gallery: Array.isArray(this.options.url) &&
                this.options.url
                    .map((url, idx) => `<img src="${url}" class="box-item ${idx === 0 ? "active" : ""}" />`)
                    .join("\n"),
        };
    }
    get _generateLoadingHTML() {
        return `<div id="popup_fix_loading" class="popup-media-fix-loading">&nbsp;</div>`;
    }
    get _generateMainBoxHTML() {
        return `<div id="popup_iframe_box" class="popup-media-window ${this.options.isPlayInBackground ? "isPlayInBackground" : ""}" data-type="${this.options.type}">
              <div id="popup_body" class="body">
                ${this.options.type === "gallery" ? this._generateGalleryStartHTML : ""}
                ${this._selectPopupTypeHTML[this.options.type]}
                ${this.options.type === "gallery" ? this._generateGalleryEndHTML : ""}
              </div>
            </div>`;
    }
    get _generateGalleryStartHTML() {
        return `<div class="popup-media-gallery">
    <button type="button" class="popup-media-gallery-left">&#9001;</button>
    <button type="button" class="popup-media-gallery-right">&#9001;</button>
    <div class="popup-media-gallery-images">`;
    }
    get _generateGalleryEndHTML() {
        return `</div></div>`;
    }
    get _generateBoxHeaderHTML() {
        return `<div id="popup_header" class="popup-media-window-header" dir="${this.options.dir}">
              <p class="header-title">${this.options.title}</p>
            </div>`;
    }
    get _generateBtnCloseHTML() {
        return `<button id="popup_btn_close" type="button" class="btn-white btn-close-modal">
              <span>${this.options.iconClose}</span>
            </button>`;
    }
    get _generateFullscreenButtonHTML() {
        return `<button id="popup_btn_fullscreen" type="button" class="btn-outline-white btn-fullscreen" data-action="open">
              <span>${this.options.iconFullscreen}</span>
            </button>`;
    }
    get _generateHelpButtonHTML() {
        return `<button id="popup_btn_help" type="button" class="btn-outline-white btn-guidance">
              <span>${this.options.iconHelp}</span>
            </button>`;
    }
    get _generateSaveButtonHTML() {
        return `<button id="popup_btn_save" type="button" class="btn-outline-white btn-save">
              <span>${this.options.iconSave}</span>
            </button>`;
    }
    get _boxElem() {
        return document.querySelector("#popup_iframe_box");
    }
    get _headerElem() {
        return document.querySelector("#popup_header");
    }
    get _bodyElem() {
        return document.querySelector("#popup_body");
    }
    get _btnCloseElem() {
        return document.querySelector("#popup_btn_close");
    }
    get _btnSaveElem() {
        return document.querySelector("#popup_btn_save");
    }
    get _btnHelpElem() {
        return document.querySelector("#popup_btn_help");
    }
    get _btnFullscreenElem() {
        return document.querySelector("#popup_btn_fullscreen");
    }
    get _loadingElem() {
        return this._bodyElem.querySelector("#popup_fix_loading");
    }
}
exports.default = PopupMedia;
;
window.PopupMedia = PopupMedia;
