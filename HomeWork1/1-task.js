function sum(number){
    let tempSum = 0;

    if(number < 0)
        return 0

    for(let i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0)
            tempSum += i;
    }

    return tempSum;
}
