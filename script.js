// task 1
// Напишите функцию которая принимает строку и заменяет все буквы “o” на  “a”
// “головоломка” --> "галаваламка"
// "мОлоток" --> "малатак"

const changeLetterOtoA = (str) => {
    return str.replaceAll("о", "а")
}
console.log(changeLetterOtoA("головоломка"))
console.log(changeLetterOtoA("молоток"));


// task 2
// Напишите функцию которая принимает строку "           
// hello world.        " и удаляет отступы по краям



const cleanStr = (str) => {
    return str.trim()
}
console.log(cleanStr("           hello world.       "))

// task 4 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую 
// букву а в каждом имени на я и выведите в консоль.

const arrayName = ['Аскар', 'Баяман', 'Калмамат']
const changeLetter = (array) => {
    return array.map((name) => {return name = name.replaceAll("а", "я")})
}
console.log(changeLetter(arrayName));

// task 5 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// Пример:
// "qwertyu" --> "eqrtuwy"
// "dollar" --> "adllor"
// "banana" --> "aaabnn"

const alph = (str) => {
    return str.split("") .sort() .join("")
}
console.log(alph("banana"));

// task 6 Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
// Пример:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
const generateArrayFromStr = (str) => {
    return str.split(" ")
}
console.log(generateArrayFromStr("I love arrays they are my favorite"));

// task 7 Создайте функцию, которая принимает 2 целых числа в виде строк 
// входных данных и выводит сумму (также в виде строкии в качестве):
// Пример входных данных и то что должно выводится:
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

const sum = (str1, str2) => {
    return String(Number(str1) + Number(str2))
}
console.log(sum("4",  "5"));

// task 8 Создайте функцию, которая принимает 2 целых числа в качестве входных данных и сравнивает их,
// если чилса равны, то выведите "равны", а иначе "не равны" 

const compar = (num1, num2) => {
    return num1 === num2 ? "равны" : "не равны";
}
console.log(compar(2, 3));

// task 9 Создайте функцию, которая принимает число. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число". 

const count = (num) => {
    return num%2 === 0 ? "Четное число" : "Нечетное число"
    
}
console.log(count(3));