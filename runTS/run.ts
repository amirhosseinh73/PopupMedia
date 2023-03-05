import { PopupIframe } from "../src"

import audio from "./audio.mp3" //audio
import video from "./video.mp4" //video
import image from "./image.gif" //image
import pdf from "./pdf.pdf" //iframe

const btn = document.querySelector("button")

const btnTestPopupJS = function () {
  btn?.addEventListener("click", function () {
    PopupIframe.run({
      url: video,
      type: "video",
      title: "popup js test",
    })
  })
}

btnTestPopupJS()
