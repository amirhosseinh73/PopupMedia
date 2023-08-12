"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = exports.defaultValues = exports.defaultConfigValues = exports.defaltHeight = exports.defaltWidth = void 0;
exports.defaltWidth = (window.innerWidth * 3) / 4;
exports.defaltHeight = (window.innerHeight * 3) / 4;
exports.defaultConfigValues = {
    url: "",
    srcdoc: undefined,
    title: "",
    width: exports.defaltWidth,
    height: exports.defaltHeight,
    dir: "ltr",
    hasHeader: true,
    hasLoading: true,
    hasBtnClose: true,
    hasBtnFullscreen: true,
    hasBtnHelp: false,
    hasBtnSave: false,
    helpEvent: () => { },
    saveEvent: () => { },
    isDraggable: true,
    isResizable: true,
    type: "iframe",
    hasAudioControls: true,
    isAudioAutoPlay: true,
    hasVideoControls: true,
    isVideoAutoPlay: true,
    iconClose: "&#x2715;",
    iconFullscreen: "&#x26F6;",
    iconHelp: "&quest;",
    iconSave: "&#128427;",
    isPlayInBackground: false,
    isLoopMode: false,
};
exports.defaultValues = {
    heightAudio: 80,
    widthAudio: 500,
};
exports.classNames = {
    hasHeader: "has-header",
    fullscreen: "fullscreen",
    show: "popup-media-show",
    activeBtn: "btn-active",
};
