/*
зовнішній цикл перебирає числа, відносно яких буде порівнюватись
симетрія зліва і справа на кожній ітерації цього циклу.
перший внутрішній цикл обчислює суму зліва від числа, другий - справа,
потім вони порівнюються.
 */
function lowestEqualIndex(integers){
    for (let i = 0; i < integers.length; i++) {
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += integers[j];
        }
        let rightSum = 0;
        for (let j = i+1; j < integers.length; j++) {
            rightSum += integers[j];
        }
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
}
