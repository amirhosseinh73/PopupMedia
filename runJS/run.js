"use strict"

const btn = document.querySelector("button")

const testPopupJS = function () {
  btn?.addEventListener("click", function () {
    PopupMedia.run({
      url: "../medias/audio_1660804545_1760.mpeg",
      type: "video",
      title: "popup js test",
      isDraggable: true,
      isPlayInBackground: true,
    })
  })
}

testPopupJS()
