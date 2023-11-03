function digitsInDescendingOrder(num){
    if(num < 0)
        return -1;

    const numArr = [...num.toString()].map(Number);
    selectionSortDescending(numArr);
    return Number(numArr.join(''));
}

// Вирішив використати сортування вибором
function selectionSortDescending(data) {
    for (let i = 0; i < data.length; i++) {
        let maxElement = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] > data[maxElement]) {
                maxElement = j;
            }
        }
        if (maxElement !== i) {
            const temp = data[maxElement];
            data[maxElement] = data[i];
            data[i] = temp;
        }
    }
    return data;
}
