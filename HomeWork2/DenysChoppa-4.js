// перевірка чи в пачці сосики і чи не пошкоджена пачка
function unpackage(pack){
    const checkPack = pack.split('');
    if(checkPack[0] === '[' && checkPack[checkPack.length - 1] === ']' && checkPack.length === 6){
        const sausage = checkPack[1];
        for (let i = 1; i < checkPack.length-1; i++) {
            if(checkPack[i] !== sausage){
                return false;
            }
        }
        return true;
    }
    return false;
}

// розпаковка і перебір кожної пачки (кожного стрінга), якщо там сосиска і пачка не кратна 5, то вивести
function sausagePacks(boxes){
    let packs = 0;
    let resultString = "";
    boxes.forEach((box) => {
        box.forEach((pack) => {
            if(unpackage(pack)){
                packs++;
                if(packs % 5 !== 0){
                    const sausages = (pack.split('').slice(1, -1));
                    resultString += " " + sausages.join(' ');
                }
            }
        })
    })
    return resultString;
}

console.log(sausagePacks([["[IIII]", "[║║║║]", "[1-11]"]]));