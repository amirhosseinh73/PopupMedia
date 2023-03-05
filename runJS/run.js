"use strict"

const btn = document.querySelector("button")

console.log("hi")

const btnTestPopupJS = function () {
  console.log("salam")

  btn?.addEventListener("click", function () {
    PopupIframe.run({
      url: video,
      type: "video",
      title: "popup js test",
    })
  })
}

btnTestPopupJS()
