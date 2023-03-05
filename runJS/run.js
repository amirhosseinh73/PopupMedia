"use strict"

const btn = document.querySelector("button")

const testPopupJS = function () {
  btn?.addEventListener("click", function () {
    PopupMedia.run({
      url: "../medias/video.mp4",
      type: "video",
      title: "popup js test",
    })
  })
}

testPopupJS()
