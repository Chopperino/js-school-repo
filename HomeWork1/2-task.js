function hanoiTowerMoves(disks){
    if(disks < 0)
        return -1;
    return 2 ** disks - 1;
}
