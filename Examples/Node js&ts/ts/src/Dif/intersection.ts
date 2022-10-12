type draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWIDGET = draggable & Resizable;

let textbox: UIWIDGET = {
    drag: () => {},
    resize: () => {}
}