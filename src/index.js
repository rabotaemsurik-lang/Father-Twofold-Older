/**
 * Обчислює різницю в роках, коли батько був або буде вдвічі старшим за сина.
 *
 * @param {number} sonAge - Поточний вік сина.
 * @param {number} fatherAge - Поточний вік батька.
 * @returns {number} Кількість років (позитивне — майбутнє, негативне — минуле, 0 — помилка або зараз).
 */
function fatherTwoFoldOlder(sonAge, fatherAge) {
    if (sonAge < 0 || fatherAge < 0 || (fatherAge - sonAge) < 15) {
        return 0;
    }
    const targetSonAge = fatherAge - sonAge;
    const yearsDiff = targetSonAge - sonAge;

    if (sonAge + yearsDiff < 0) {
        return 0;
    }
    return yearsDiff;
}

/**
 * Виводить повідомлення з правильним відмінюванням.
 *
 * @param {number} years - Результат розрахунку.
 * @param {number} sonAge - Оригінальний вік сина.
 * @param {number} fatherAge - Оригінальний вік батька.
 */
function printMessage(years, sonAge, fatherAge) {
    if (sonAge < 0 || fatherAge < 0 || (fatherAge - sonAge) < 15) {
        console.log("Помилка: Некоректні дані (вік не може бути від'ємним, а різниця має бути >= 15 років).");
        return years;
    }
    if (years < 0 && (sonAge + years < 0)) {
        console.log("Помилка: У той час батько не міг бути удвічі старшим, бо сина ще не було.");
        return years;
    }
    const absYear = Math.abs(years);
    const lastDigit = absYear % 10;
    const lastTwo = absYear % 100;
    let word = "років";
    if (lastTwo >= 11 && lastTwo <= 14) {
        word = "років";
    } else if (lastDigit === 1) {
        word = "рік";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = "роки";
    }
    if (years > 0) {
        console.log(`Батько буде удвічі старший за сина через ${absYear} ${word}`);
    } else if (years < 0) {
        console.log(`Батько був удвічі старший за сина ${absYear} ${word} тому`);
    } else {
        if (fatherAge === sonAge * 2) {
            console.log("Батько саме зараз удвічі старший за сина");
        } else {
            console.log("Помилка: Розрахунок неможливий.");
        }
    }

    return years;
}

let s1 = -21, f1 = 37;
printMessage(fatherTwoFoldOlder(s1, f1), s1, f1);
let s2 = 12, f2 = 37;
printMessage(fatherTwoFoldOlder(s2, f2), s2, f2);
let s3 = 20, f3 = 40;
printMessage(fatherTwoFoldOlder(s3, f3), s3, f3);
let s4 = 20, f4 = 30;
printMessage(fatherTwoFoldOlder(s4, f4), s4, f4);
let s5 = 5, f5 = 40;
printMessage(fatherTwoFoldOlder(s5, f5), s5, f5);
