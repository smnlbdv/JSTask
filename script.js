function ReturnOb(e) {
    var R = prompt('Введите радиус');
    e.target.innerText = (4 / 3 * Math.PI * Math.pow(R, 3)).toFixed(2)
    return  (4 / 3 * Math.PI * Math.pow(R, 3)).toFixed(2)
}

function TextDec() {
    let s1 = "Я люблю Беларусь"
    let s2 = "Я учусь в Политехническом колледже"

    document.writeln("Длинна строку S1: " + s1.length)
    document.writeln("Первый символ строки S1: " + s1[0])
    document.writeln("ASCII код первого символа  S1: " + s1[0].charCodeAt())
    document.writeln("Заменил все буквы ю на № в строке S1: " + s1.replaceAll('ю','№'))
    setTimeout( () => {
        alert(screen.width + "*" + screen.height)
    },3000)
}

TextDec()


