"use strict"

export const defaultConfigValues = {
  url: "",
  srcdoc: undefined,

  title: "",

  width: (window.innerWidth * 3) / 4,
  height: (window.innerHeight * 3) / 4,

  dir: "ltr",

  hasHeader: true,
  hasLoading: true,

  hasBtnClose: true,
  hasBtnFullscreen: true,
  hasBtnHelp: false,
  hasBtnSave: false,

  helpEvent: () => {},
  saveEvent: () => {},

  isDraggable: false,
  isResizable: false,

  type: "iframe",

  hasAudioControls: true,
  isAudioAutoPlay: true,
  hasVideoControls: true,
  isVideoAutoPlay: true,

  iconClose: "&times;",
  iconFullscreen: "&#x26F6;",
  iconHelp: "&quest;",
  iconSave: "&#128427;",
}

export const defaultValues = {
  heightAudio: 80,
  widthAudio: 500,
}

export const classNames = {
  hasHeader: "has-header",
  fullscreen: "fullscreen",
  show: "popup-media-show",
  activeBtn: "btn-active",
}
