import { ConfigDefaultValues } from "./@Types/index"

export const defaltWidth = (window.innerWidth * 3) / 4
export const defaltHeight = (window.innerHeight * 3) / 4

export const defaultConfigValues: ConfigDefaultValues = {
  url: "",
  srcdoc: undefined,

  title: "",

  width: defaltWidth,
  height: defaltHeight,

  dir: "ltr",

  hasHeader: true,
  hasLoading: true,

  hasBtnClose: true,
  hasBtnFullscreen: true,
  hasBtnHelp: false,
  hasBtnSave: false,

  helpEvent: () => {},
  saveEvent: () => {},

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
