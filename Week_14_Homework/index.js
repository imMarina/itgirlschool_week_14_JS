// Задание: Анализ оценок студентов**
// Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.
    
// Шаги выполнения:

// 1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.

const grades = [];
let max = 100;
let studentsNum = 12;


while (grades.length < studentsNum) {
    let i = Math.floor(Math.random() * max) + 1;
    grades.push(i);
}
console.log(grades);

// grades = [79, 90, 30, 26, 79, 87, 74, 15, 66, 20, 36, 11];


// 2. Рассчитайте и выведите средний балл студентов, используя методы массивов.

const sumOfGrades = grades.reduce(function (previousValue, item, index, array) {
  return (item + previousValue);
}, 0);

const getAverage = Math.round(sumOfGrades / grades.length)
console.log(getAverage);

// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.

const maxNum = grades.sort((a,b)=>b-a)
console.log(maxNum[0]);

// Second option =>
// console.log(Math.max(...grades));

// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.3

const minNum = grades.sort((a,b)=>a-b)
console.log(minNum[0]);

// Second option =>
// console.log(Math.min(...grades));


// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.

const maxGrades = grades.filter(function(item, index, array) {
    return item >= 60;
});
console.log(maxGrades); 


// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const minGrades = grades.filter(function(item, index, array) {
    return item <= 60;
});
console.log(minGrades); 


// 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// - Если оценка ниже 20, преобразуйте её в "E"

const aGrades = grades.filter(function(item) {
    return item >= 80;
});
console.log(`Grades "A": ${aGrades}`); 

const bGrades = grades.filter(function(item) {
    return item >= 60 && item <= 79;
});
console.log(`Grades "B": ${bGrades}`); 

const cGrades = grades.filter(function(item) {
    return item >= 40 && item <= 59;
});
console.log(`Grades "C": ${cGrades}`); 

const dGrades = grades.filter(function(item) {
    return item >= 20 && item <= 39;
});
console.log(`Grades "D": ${dGrades}`); 

const eGrades = grades.filter(function(item) {
    return item < 20;
});
console.log(`Grades "E": ${eGrades}`); 


Выведите все найденные значения на экран.