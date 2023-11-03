function isPrimeNumber(n) { // використав алгоритм "решето Ератосфена"
    if (n <= 1) {
        return false;
    }

    // створення масиву розміром корінь з n і заповнення значеннями true
    const primes = new Array(Math.ceil(Math.sqrt(n)) + 1).fill(true);
    primes[0] = primes[1] = false; // викреслення 0 і 1

    // перебір кожного числа в цьому масиві
    for (let i = 2; i <= primes.length; i++) {
        if (primes[i]) {
            // позначення кожного числа, яке є більшим простого "i" та йому кратним, значенням false
            for (let j = i * i; j <= primes.length; j += i) {
                primes[j] = false;
            }
        }
    }

    // чи є задане число простим
    for (let i = 2; i <= primes.length; i++) {
        if (primes[i] && n % i === 0) {
            return false;
        }
    }

    return true;
}

/*
    Спочатку хотів використати алгоритм зі складністю n/2 до якого сам додумався (якщо треба, напишу і його),
    але він занадто повільний, тому прочитав про решето Ератосфена і вирішив розібрати і використати саме його
 */