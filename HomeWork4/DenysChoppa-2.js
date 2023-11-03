var Vector = function (components) {
    this.components = components;

    this.add = function (secondVector){
        this.isEqualLength(secondVector);

        const sum = [];
        for (let i = 0; i < components.length; i++) {
            sum[i] = components[i] + secondVector.components[i];
        }
        return new Vector(sum);
    };

    this.subtract = function (secondVector){
        this.isEqualLength(secondVector);

        const difference = [];
        for (let i = 0; i < components.length; i++) {
            difference[i] = components[i] - secondVector.components[i];
        }
        return new Vector(difference);
    };

    this.dot = function (secondVector){
        this.isEqualLength(secondVector);

        let sum = 0;
        for (let i = 0; i < components.length; i++) {
            sum += components[i] * secondVector.components[i];
        }
        return sum;
    };

    this.norm = function (){
        let sum = 0;
        for (let i = 0; i < components.length; i++) {
            sum += Math.pow(components[i], 2) ;
        }
        return Math.sqrt(sum);
    };

    this.toString = function (){
        let str = '()';
        str = str.slice(0, 1) + components.join(',') + str.slice(-1);
        return str;
    };

    this.equals = function (secondVector){
        if(components.length !== secondVector.components.length){
            return false;
        }
        for (let i = 0; i < components.length; i++) {
            if(components[i] !== secondVector.components[i]){
                return false;
            }
        }
        return true
    };

    this.isEqualLength = function (secondVector){
        if(components.length !== secondVector.components.length){
            throw new Error('error');
        }
    }
};
