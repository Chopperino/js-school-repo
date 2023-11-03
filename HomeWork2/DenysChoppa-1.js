function combinedHonor(honor, d){
    let honorSum;
    let honorBiggestSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < honor.length/d; i++) {
        honorSum = 0;
        for (let j = 0; j < honor.length; j += honor.length/d) {
            honorSum += honor[i + j];
        }
        if(honorBiggestSum < honorSum){
            honorBiggestSum = honorSum;
        }
    }

    return honorBiggestSum;
}
