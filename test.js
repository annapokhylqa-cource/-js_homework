function pow(x, y) {
    let result = 1; // початкове значення
    for (let i = 0; i < y; i++) { // повторюємо y разів
        result *= x; // множимо на x на кожній ітерації
    }
    return result; // повертаємо результат
}

// Приклад перевірки:
console.log(pow(2, 3)); // 8
console.log(pow(5, 0)); // 1
console.log(pow(3, 4)); // 81