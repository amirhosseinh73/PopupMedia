import "../assets/css/style.css"
export type MediaTypes = "video" | "iframe" | "audio" | "image" | "gallery"

export interface Config {
  url: string | string[]
  srcdoc?: string

  title?: string

  width?: number
  height?: number

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

  type: MediaTypes

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

  isLoopMode?: boolean
}

export type ConfigDefaultValues = Pick<Config, keyof Config>

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type ConfigWithDefaultsOptional = Optional<Config, keyof ConfigDefaultValues>

export default class PopupMedia {
  static run(config: ConfigWithDefaultsOptional): HTMLDivElement
  options: ConfigDefaultValues
  _params: {
    enableDragging: boolean
    startMousePosition: {
      X: number
      Y: number
    }
    startBoxPosition: {
      X: number
      Y: number
    }
  }
  constructor(config: ConfigWithDefaultsOptional)
  setConfig(config: ConfigWithDefaultsOptional): void
  _removeLoading(): Promise<void>
  _appendLoading(): void
  _renderHeader(): void
  show(): void
  initEvents(): void
  close(): void
  /**
   *
   * @param {HtmlElement} elem element to add style with transition
   * @param {Function} styleCallBack callback function to run your styles
   * @param {String} transition
   * @returns
   */
  _addStyleWithTransition(
    elem: HTMLElement | undefined,
    styleCallBack: Function,
    transition?: string
  ): Promise<void>
  btnCloseEventHandler(): void
  btnSaveEventHandler(): void
  btnHelpEventHandler(): void
  btnFullscreenEventHandler(): void
  openFullscreen(): void
  closeFullscreen(): void
  requestOpenFullscreen(selector: HTMLElement): void
  requestCloseFullscreen(): void
  fullscreenChangeHandler(id: string): void
  _draggableEvent(): void
  _dragStart: (e: MouseEvent) => void
  _dragMove: (e: MouseEvent) => void
  _dragEnd: () => void
  _rePositionBoxInOutOfWindow(): Promise<void>
  _resizableEvent(): void
  addEndOfMediaEventHandler(): void
  _galleryEventHandler(): void
  get _selectPopupTypeHTML(): {
    iframe: string
    video: string
    audio: string
    image: string
    gallery: string | false
  }
  get _generateLoadingHTML(): string
  get _generateMainBoxHTML(): string
  get _generateGalleryStartHTML(): string
  get _generateGalleryEndHTML(): string
  get _generateBoxHeaderHTML(): string
  get _generateBtnCloseHTML(): string
  get _generateFullscreenButtonHTML(): string
  get _generateHelpButtonHTML(): string
  get _generateSaveButtonHTML(): string
  get _boxElem(): HTMLDivElement
  get _headerElem(): HTMLDivElement
  get _bodyElem(): HTMLDivElement
  get _btnCloseElem(): HTMLButtonElement
  get _btnSaveElem(): HTMLButtonElement
  get _btnHelpElem(): HTMLButtonElement
  get _btnFullscreenElem(): HTMLButtonElement
  get _loadingElem(): HTMLDivElement
}
