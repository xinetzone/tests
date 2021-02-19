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
    let elements = w3.getElements(sel)
    w3.hideElements(elements)
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

w3.addClass = function (sel, name) {
    w3.addClassElements(w3.getElements(sel), name)
}

w3.addClassElements = function (elements, name) {
    let i, l = elements.length
    for (i = 0; i < l; i++) {
        w3.addClassElement(elements[i], name)
    }
}

w3.addClassElement = function (element, name) {
    let i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(" ")
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i] }
    }
}

w3.removeClass = function (sel, name) {
    w3.removeClassElements(w3.getElements(sel), name)
}

w3.removeClassElements = function (elements, name) {
    let i, l = elements.length, arr1, arr2, j
    for (i = 0; i < l; i++) {
        w3.removeClassElement(elements[i], name)
    }
}

w3.removeClassElement = function (element, name) {
    let i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(" ")
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ")
}

w3.toggleTab = function (tabGroupName, selectedTab, event) {
    w3.hide(tabGroupName)
    w3.show(selectedTab)
    w3.removeClass('.tab', 'w3-red')
    event.currentTarget.className += " w3-red"
}