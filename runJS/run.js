"use strict"

const btn = document.querySelector("button")

const testPopupJS = function () {
  btn?.addEventListener("click", function () {
    PopupMedia.run({
      url: "../medias/pdf.pdf",
      type: "iframe",
      title: "popup js test",
      isDraggable: true,
      isResizable: true,
      dir: "rtl",
      // isPlayInBackground: true,
    })
  })
}

testPopupJS()
