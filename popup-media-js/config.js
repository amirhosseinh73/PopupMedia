"use strict"

export const defaultConfigValues = {
  url: "",
  title: "",

  width: (window.innerWidth * 3) / 4,
  height: (window.innerHeight * 3) / 4,
  minHeight: 150,
  minWidth: 200,

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
  boxHeightAudio: 80,
}

export const classNames = {
  hasHeader: "has-header",
  fullscreen: "fullscreen",
  show: "popup-show",
  activeBtn: "btn-active",
}
