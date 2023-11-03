function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        const newKey = this.createKey(str);
        let cipher = "";

        for (let i = 0; i < str.length; i++) {
            // якщо символу в алфавіті немає - додати символ з даного рядка
            if(abc.indexOf(str[i]) === -1){
                cipher += str[i];
            }
            else{ // додати символ, який знаходиться в алфавіті на відстані відповідного символу з key від символу із заданого рядка
                cipher += abc[(abc.indexOf(str[i]) + abc.indexOf(newKey[i])) % abc.length];
            }
        }
        return cipher;
    };

    this.decode = function (str) {
        const newKey = this.createKey(str);
        let cipher = "";

        for (let i = 0; i < str.length; i++) {
            // якщо символу в алфавіті немає - додати символ з даного рядка
            if(abc.indexOf(str[i]) === -1){
                cipher += str[i];
            }
            else{ // додати символ, який знаходиться в алфавіті на відстані відповідного символу з key від символу із заданого рядка
                cipher += abc.slice((abc.indexOf(str[i]) - abc.indexOf(newKey[i])) % abc.length, ((abc.indexOf(str[i]) - abc.indexOf(newKey[i])) % abc.length) + 1);
            }
        }
        return cipher;
    };

    // створення ключа, який буде довжиною як задана строка
    this.createKey = function (str){
        const concatenationNum = Math.floor(str.length / key.length);
        const sliceNum = str.length % key.length;

        let newKey = key.repeat(concatenationNum);
        newKey += key.slice(0, sliceNum);
        return newKey;
    }
}
