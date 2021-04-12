const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação FIsica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabádo",
]

//funcionalidades

function getSubject(subjectNumber){
const position = +subjectNumber -1         /// Arrumar o número para passar como String
return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}  /// exportando os objetos para pasta do server.js
