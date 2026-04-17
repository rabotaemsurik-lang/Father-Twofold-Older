/**
 * Обчислює, через скільки років або скільки років тому
 * батько буде/був удвічі старший за сина.
 *
 * @param {number} sonAge - вік сина
 * @param {number} fatherAge - вік батька
 * @returns {number} кількість років може бути від’ємною або NaN при некоректних даних
 */
function fatherTwoFoldOlder(sonAge, fatherAge) {
    if (sonAge < 0 || fatherAge < 0 || fatherAge - sonAge < 15) {
        return NaN;
    }

    return fatherAge - 2 * sonAge;
}
/**
 * Виводить повідомлення про те, коли батько був або буде
 * удвічі старший за сина з правильним відмінюванням років.
 *
 * @param {number} years - результат функції fatherTwoFoldOlder
 * @returns {number} повертає те саме значення years
 */
function printMessage(years) {
    const year = Math.abs(years);
    const tmpYear = year % 10;

    if (tmpYear === 1 && year % 100 !== 11) {
        if (years >= 0) console.log(`Батько був удвічі старший за сина ${year} рік тому`);
        else console.log(`Батько буде удвічі старший за сина через ${year} рік`);
    }
    else if (tmpYear >= 2 && tmpYear <= 4 && !(year % 100 >= 12 && year % 100 <= 14)) {
        if (years >= 0) console.log(`Батько був удвічі старший за сина ${year} роки тому`);
        else console.log(`Батько буде удвічі старший за сина через ${year} роки`);
    }
    else {
        if (years >= 0) console.log(`Батько був удвічі старший за сина ${year} років тому`);
        else console.log(`Батько буде удвічі старший за сина через ${year} років`);
    }

    return years;
}


const result = fatherTwoFoldOlder(21, 56);
printMessage(result);