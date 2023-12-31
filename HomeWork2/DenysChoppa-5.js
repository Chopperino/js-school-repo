/*
в цілому працює так: рекурсивно доходимо до числа, якщо воно те, яке
шукали  - повертаємо тру, а потім, коли вийшли з рекурсії повертається
і ключ, якщо ні - повертаємо null і обходимо далі, якщо все обійшли
і не знайшли - null
 */
object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
function getRootProperty(obj, num) {
    if (obj === num) {
        return true;
    }
    /*
    через цикл нижче заходимо в рекурсію та одночасно він є перевіркою
    на те, чи є те, що передали в функцію об'єктом чи числом (якщо об'єкт, то
    функція ще раз рекурсивно викликається, якщо число, то Object.keys(obj)
    поверне пустий масив і цикл пропуститься, перейдемо відразу до return null
    бо це є числом, але не тим, яке нам потрібно, бо перевірка на початку
    obj === num повернула false
     */
    for (const key of Object.keys(obj)) {
        const recur = getRootProperty(obj[key], num);
        if (recur) {
            return key;
        }
    }
    return null;
}

console.log(getRootProperty(object, 21))