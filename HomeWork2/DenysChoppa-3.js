function anagrams(words){
    // об'єкт для групування анаграм
    const anagrams = {};
    words.forEach((word) => {
        // вибране слово розбивається на букви, вони сортуються, збираються в одне слово
        const sorted = word.split('').sort().join('');
        // якщо в об'єкті ще немає такої групи анаграм, то створюється нова
        if (!anagrams[sorted]) {
            anagrams[sorted] = [];
        }
        // слово додається в групу анаграм
        anagrams[sorted].push(word);
    });
    return Object.values(anagrams);
}
