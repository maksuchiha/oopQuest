'use strict'

let moveLR = 0
let moveTB = 0


const DomElement = function () {
    this.selector = '.block'
    this.height = '100px'
    this.width = '100px'
    this.bg = 'red'
    this.fontSize = '14px'
    this.position = 'absolute'
    this.createItem = function() {
        if (this.selector[0] === '.') {
            const div = document.createElement('div')
            div.className = `${this.selector.slice(1)}`
            div.style.cssText = `
                                 height: ${this.height}; width: ${this.width}; 
                                 background: ${this.bg}; font-size: ${this.fontSize};
                                 position: ${this.position}
                                `
            div.textContent = 'Hello World!'
            document.body.append(div)
        } else if (this.selector[0] === '#') {
            const p = document.createElement('div')
            p.id = `${this.selector.selector.slice(1)}`
            document.body.append(p)
        }
    }
}

let object = new DomElement("newObject")

document.addEventListener('DOMContentLoaded', () => {
    object.createItem()
})

moveLR = 0
moveTB = 0

const move = (arr) => {
    const block = document.querySelector('.block')
    if (arr === 'ArrowRight') {
        moveLR = moveLR + 10
        block.style.left = moveLR + 'px'
    } else if (arr === 'ArrowLeft') {
        moveLR = moveLR - 10
        block.style.left = moveLR + 'px'
    } else if (arr === 'ArrowUp') {
        moveTB = moveTB - 10
        block.style.top = moveTB + 'px'
    } else if (arr === 'ArrowDown') {
        moveTB = moveTB + 10
        block.style.top = moveTB + 'px'
    }
}

document.addEventListener('keydown', (e) => {
    move(e.key)
})