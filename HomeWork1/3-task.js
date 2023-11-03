function findNb(m){
    let volume = 0;
    let n = 0

    while(volume <= m){
        volume += n ** 3;
        if(volume === m)
            return n;
        n++;
    }
    return -1
}
