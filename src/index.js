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
    if (isNaN(years)) {
        console.log("Некоректні дані");
        return years;
    }
    const year = Math.abs(years);
    const str = year.toString();
    let word;
    switch (true) {
        case str.endsWith("1") && !str.endsWith("11"):
            word = "рік";
            break;
        case (str.endsWith("2") || str.endsWith("3") || str.endsWith("4")) && !(str.endsWith("12") || str.endsWith("13") || str.endsWith("14")):
            word = "роки";
            break;
        default:
            word = "років";
    }
    if (years >= 0) {
        console.log(`Батько був удвічі старший за сина ${year} ${word} тому`);
    } else {
        console.log(`Батько буде удвічі старший за сина через ${year} ${word}`);
    }

    return years;
}

const result1 = fatherTwoFoldOlder(21, 56);
printMessage(result1);