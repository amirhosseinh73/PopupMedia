# Popup JS

> Play media (image, video, audio, etc) with this small plugin.

## Media Types

1. video
2. audio
3. image
4. iframe --> can be anything like pdf, url, html, etc.

### Dependecies

- this plugin does not need anything. I just use parcel to render typescript.

- you can use index.js without parcel like text/javascript.

### Run

just load css and js in your html and use it.

> Run user test Typescript Plugin

```
npm start
```

> Run user test Javascript Plugin

```
cd runJS
```

and double click on index.html

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

- isDraggable: false, enable this feature on next update
- isResizable: false, enable this feature on next update

- minHeight: for resizable popupjs set minHeight, enable this feature on next update
- minWidth: for resizable popupjs set minWidth, enable this feature on next update
