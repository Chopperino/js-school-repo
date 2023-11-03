function highAndLow(numbers){
    // розбив рядок на підрядки і конвертував їх в числа
    const numArr = numbers.split(' ').map(Number);

    // використав spread оператор щоб розпакувати масив
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
