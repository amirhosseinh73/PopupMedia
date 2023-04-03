export interface Config {
  url: string
  srcdoc?: string

  title?: string

  width: number
  height: number

  dir?: "rtl" | "ltr"

  //items
  hasHeader?: boolean
  hasLoading?: boolean

  hasBtnClose?: boolean
  hasBtnFullscreen?: boolean
  hasBtnHelp?: boolean
  hasBtnSave?: boolean

  helpEvent?: Function
  saveEvent?: Function

  type: "video" | "iframe" | "audio" | "image"

  hasAudioControls?: boolean
  isAudioAutoPlay?: boolean

  hasVideoControls?: boolean
  isVideoAutoPlay?: boolean

  iconClose?: string
  iconFullscreen?: string
  iconHelp?: string
  iconSave?: string

  isDraggable?: boolean
  isResizable?: boolean

  isPlayInBackground?: boolean
}

export type ConfigDefaultValues = Pick<Config, keyof Config>

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type ConfigWithDefaultsOptional = Optional<Config, keyof ConfigDefaultValues>
