/* 参考 https://www.w3schools.com/lib/w3.js */
"use strict"

let w3 = {}

w3.styleElement = function (element, prop, val) {
    element.style.setProperty(prop, val)
}

w3.hideElement = function (element) {
    w3.styleElement(element, "display", "none")
}

w3.getElements = function (id) {
    if (typeof id == "object") {
        return [id]
    } else {
        return document.querySelectorAll(id)
    }
}

w3.hideElements = function (elements) {
    let i, l = elements.length
    for (i = 0; i < l; i++) {
        w3.hideElement(elements[i])
    }
}

w3.hide = function (sel) {
    w3.hideElements(w3.getElements(sel))
}

w3.showElement = function (element) {
    w3.styleElement(element, "display", "block")
}

w3.showElements = function (elements) {
    let i, l = elements.length
    for (i = 0; i < l; i++) {
        w3.showElement(elements[i])
    }
}

w3.show = function (sel, a) {
    let elements = w3.getElements(sel)
    if (a) { w3.hideElements(elements) }
    w3.showElements(elements)
}

w3.toggleShow = function (sel) {
    let i, x = w3.getElements(sel), l = x.length
    for (i = 0; i < l; i++) {
        if (x[i].style.display == "none") {
            w3.styleElement(x[i], "display", "block")
        } else {
            w3.styleElement(x[i], "display", "none")
        }
    }
}

w3.toggleTab = function (tabGroupName, tabID) {
    w3.hide(tabGroupName)
    document.querySelector(tabID).style.display = "block"
}