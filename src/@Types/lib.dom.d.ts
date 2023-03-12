interface Document {
  exitFullscreen: () => Promise<void>
  mozCancelFullScreen: () => Promise<void>
  webkitExitFullscreen: () => Promise<void>
  msExitFullscreen: () => Promise<void>
}
