class Warrior{
    exp;
    ach = [];
    experience = () => {return this.exp};
    level = () => {return Math.floor(this.experience()/100)};
    rank = () => {
        const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        for (let i = 1; i <= ranks.length; i++) {
            if(this.level() < i*10){
                return ranks[i-1];
            }
        }
        return ranks[10];
    };
    achievements = () => {return this.ach};
    training = (arr) => {
        if(arr[2] > this.level()){
            return "Not strong enough";
        }
        this.ach.push(arr[0]);
        this.expAdd(arr[1]);
        return arr[0];
    };
    battle = (lvl) => {
        if(lvl < 1 || lvl > 100){
            return "Invalid level";
        }
        if(((lvl - this.level()) >= 5) && (Math.floor(this.level()/10) < Math.floor(lvl/10))){
            return "You've been defeated";
        }
        if(lvl === this.level()){
            this.expAdd(10);
            return "A good fight";
        }
        if((this.level() - lvl) === 1){
            this.expAdd(5);
            return "A good fight";
        }
        if((this.level() - lvl) > 1){
            return "Easy fight";
        }
        if((lvl - this.level()) > 0){
            this.expAdd(20 * Math.abs(lvl - this.level()) * Math.abs(lvl - this.level()));
            return "An intense fight";
        }

    }
    expAdd = (earnedExp) => {
        this.exp += earnedExp;
        if(this.exp > 10000){
            this.exp = 10000;
        }

    }
    constructor() {
        this.exp = 100;
    };
}
