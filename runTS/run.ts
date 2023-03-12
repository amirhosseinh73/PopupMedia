import audio from "../medias/audio.mp3" //audio
import video from "../medias/video.mp4" //video
import image from "../medias/image.gif" //image
import pdf from "../medias/pdf.pdf" //iframe
import PopupMedia from "../src"

const btn = document.querySelector("button")

const btnTestPopupJS = function () {
  btn?.addEventListener("click", function () {
    PopupMedia.run({
      url: video,
      type: "video",
      title: "popup js test",
      isDraggable: true,
    })
  })
}

btnTestPopupJS()
