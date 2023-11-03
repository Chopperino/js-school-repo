/*
в цілому працює так: перевіряє чи елемент є Х і якщо так, то за замовчуванням до периметру
додається 4, а далі перевірки чи біля цього Х є ще Х, якщо по сусідству знайдено ще один
Х - від периметра віднімається 1.
 */
function fun(islands){
    let perimeter = 0;
    for (let i = 0; i < islands.length; i++) {
        for (let j = 0; j < islands[0].length; j++) {
            if(islands[i][j] === 'X'){
                perimeter += 4;
                if(islands[i][j-1] === 'X'){
                    perimeter--;
                }
                if(islands[i][j+1] === 'X'){
                    perimeter--;
                }
                if(i !== 0 && islands[i-1][j] === 'X'){
                    perimeter--;
                }
                if(i !== islands.length-1 && islands[i+1][j] === 'X'){
                    perimeter--;
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}
