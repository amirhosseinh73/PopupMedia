# Popup Media JS

> Play media (image, video, audio, etc) with this small plugin.

npm package link: [click](https://www.npmjs.com/package/popup-media)

github link: [click](https://github.com/amirhoseinh73/PopupJS)

# New Features in Version 4

- Added support for TypeScript.
- Introduced a gallery mode to display multiple images with a fade effect.
- Debugged various issues.

  > Upcoming Features:

  - New effects
  - Show thumbnails for gallery mode
  - ...

## Media Types

- video: Play Video using HTML5
- audio: Play Audio using HTML5
- image: Show Single image using img HTML tag
- iframe: Show anything, including PDF, URL, image, video, audio, html and etc. in iframe HTML tag
- gallery: Show multiple image using array, you have to pass image urls in array for gallery mode.

### Dependencies

> this plugin does not need anything. I just use typescript to build.

### How to use

use npm

```
npm i popup-media
```

Example 1:

```
import PopupMedia from "popup-media"

const galleryUrls = [
  "https://plus.unsplash.com/premium_photo-1674671748477-5354897d35c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1691019807758-3647f75a3154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
]
PopupMedia.run({
  url: galleryUrls,
  type: "gallery",
  title: "popup js test",
  isLoopMode: true,
})

```

Example 2:

```
PopupMedia.run({
    url: "http://techslides.com/demos/sample-videos/small.webm",
    type: "video",
  })
```

### TypeScript

This plugin supports TypeScript for recognizing types in your application. To enable type recognition, simply add the following lines to your tsconfig.json file:

```
{
  "compilerOptions": {
    "paths": {
      "popup-media": ["./node_modules/popup-media/dist"]
    }
  }
}
```

### **Config**

> Required fields:

- url: string (use relative content or http url)

> Optional fields:

- type: "video" | "iframe" | "audio" | "image" | "gallery", default is iframe
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

- isDraggable: true | false, default is true
- isResizable: true | false, default is true

- isPlayInBackground: true | false, default is false, If you want play short audios this feature is useful, play media in background and close it automatic after complete

- isLoopMode: true | false, this is for gallery type media.
