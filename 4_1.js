var num
//num = 65 //+prompt("Введите число от 0 до 999")
var split = []
function UnitsDecadesHundreds(num) {
    if (num < 100) {
        var units = num % 10 
        var decades = Math.trunc(units) + 1
    } else if (num >= 100 && num <= 999) {
        var units = num % 10
        var decades = Math.trunc(units) % 10 - 1
        var hundreds = Math.trunc(decades) - 1
    } else {
        console.log("Ошибка")
    }
    return split = {
        units: units,
        decades: decades,
        hundreds: hundreds
    }
}
split = UnitsDecadesHundreds(num)
 