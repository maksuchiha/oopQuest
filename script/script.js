'use strict'

const form = document.getElementById('form')
const prof = document.getElementById('prof')
const sex = document.querySelectorAll('input[name=sex]')
const age = document.getElementById('age')
const exp = document.getElementById('exp')
const organization = document.getElementById('organization')
const wName = document.getElementById('name')
const wLastName = document.getElementById('last-name')
const wKids = document.getElementById('kids')
const table = document.querySelector('.table-body')
let data = []


class Worker {
    constructor(worker, sex, age, exp) {
        this.worker = worker
        this.sex = sex
        this.age = age
        this.exp = exp
    }
    ifWorker(arr) {
        let worker = ''
        if (arr.value === 'locksmith') {
            worker = 'Слесарь'
        } else if (arr.value === 'driver') {
            worker = 'Водитель'
        }
        return worker
    }
    ifAge(arr) {
        let sex = ''
        arr.forEach((item) => {
            if (item.checked) {
                sex = `${item.value}`
            } else if (item.checked) {
                sex = `${item.value}`
            }
        })
        return sex
    }
}

class AddInf extends Worker {
    constructor(worker, sex, age, exp, name, lastName) {
        super(worker, sex, age, exp)
        this.name = name
        this.lastName = lastName
    }
}

class Family extends AddInf {
    constructor(worker, sex, age, exp, name, lastName, organization, kids) {
        super(worker, sex, age, exp, name, lastName)
        this.organization = organization
        this.kids = kids
    }
    hKids(arr) {
        let kids
        if (arr.checked) {
            kids = 'есть дети'
        } else {
            kids = 'нет детей'
        }
        return kids
    }
}

const render = () => {
    table.innerHTML = ''
    data.forEach((item, index) => {
        const tBody = document.createElement('tr')

        tBody.classList.add('str')

        tBody.innerHTML = `
                        <td>${item.worker}</td>
                        <td>${item.sex}</td>
                        <td>${item.age}</td>
                        <td>${item.name}</td>
                        <td>${item.lastName}</td>
                        <td>${item.exp}</td>
                        <td>${item.organization}</td>
                        <td>${item.kids}</td>
                        <td><button class="btnDel">удалить</button></td>
                       `

        table.append(tBody)

        tBody.querySelector('.btnDel').addEventListener('click', () => {
            data.splice(index, 1)
            localStorage.setItem('data', JSON.stringify(data))
            render()
        })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let obj = new Family(`${new Worker().ifWorker(prof)}`, `${new Worker().ifAge(sex)}`, `${age.value}`,
        `${exp.value}`, `${wName.value}`, `${wLastName.value}`, `${organization.value}`,
        `${new Family().hKids(wKids)}`)

    data.push(obj)
    localStorage.setItem('data', JSON.stringify(data))
    render()
})

if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'))
    render()
}
