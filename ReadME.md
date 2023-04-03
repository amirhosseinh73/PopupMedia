# Popup Media JS

> Play media (image, video, audio, etc) with this small plugin.

> npm package link: [click](https://www.npmjs.com/package/popup-media)

> github link: [click](https://github.com/amirhoseinh73/PopupJS)

## Media Types

1. video
2. audio
3. image
4. iframe --> can be anything like pdf, url, html, etc.

### Dependencies

- this plugin does not need anything. I just use parcel to render typescript.

- you can use index.js without parcel like text/javascript.

### Run

- method 1: use npm

  ```
  npm i popup-media
  ```

  ```
  import PopupMedia from "popup-media"

  PopupMedia.run({
    url: "../medias/video.mp4",
    type: "video",
    title: "popup js test",
  })

  ```

- method 2: clone repo

  > Run Typescript Plugin

  ```
  npm start
  ```

- method 3: simple use js and css
  > load **_src/assets_** and **_src/index.js_** in your html
  1.  ```
      cd runJS
      ```
  2.  double click on index.html

### **Config**

> Required fields:

- url: string (use relative content or http url)

> Optional fields:

- type: "video" | "iframe" | "audio" | "image", default is iframe
- title
- width: width of popup box, default is 3/4 of window width
- height: height of popup box, default is 3/4 of window height

- dir: "ltr" | "rtl"

- hasHeader: true | false, default is true
- hasLoading: true | false, default is true

- hasBtnClose: true | false, default is true
- hasBtnFullscreen: true | false, default is true

- hasBtnHelp: true | false, default is false
- hasBtnSave: true | false, default is false

- helpEvent: you can add event for help on click
- saveEvent: you can add event for save on click

- hasAudioControls: audio HTML has controls attribute, you can set it: true | false, default is true
- isAudioAutoPlay: audio HTML has autoplay attribute, you can set it: true | false, default is true

- hasVideoControls: video HTML has controls attribute, you can set it: true | false, default is true
- isVideoAutoPlay: video HTML has autoplay attribute, you can set it: true | false, default is true

- iconClose: you can change this icon with HTML
- iconFullscreen: you can change this icon with HTML
- iconHelp: you can change this icon with HTML
- iconSave: you can change this icon with HTML

- isDraggable: true | false, default is false
- isResizable: true | false, default is false

- isPlayInBackground: true | false, default is false, If you want play short audios this feature is useful, play media in background and close it automatic after complete
