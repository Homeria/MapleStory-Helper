class Symbol {
    constructor(level, holds) {
        this.level = level;
        this.holds = holds;
    }

}

class ArcaneSymbol extends Symbol {

    
    constructor(level, holds) {
        super(level, holds);

    }

    getReqGrowth(level) {
        if(level < 1 || level > 20) {
            return -1;
        } else if (level === 20) {
            return 0;
        } else {
            // n^2 + 11
            return Math.pow(level, 2) + 11
        }
    }

    getTotalGrowth(level) {
        let total = 0;
        for(let i = level; i < 20; i++) {
            total += this.getReqGrowth(i);
        }
        return total;
    }

    

}

class VanishingJourneySymbol extends ArcaneSymbol {

    constructor(level, holds) {
        super(level, holds);

    }

    getReqMeso(level) {
        if(level < 1 || level > 20) {
            return -1;
        } else if (level === 20) {
            return 0;
        } else {
            // 3,110,000 + 3,960,000n
            return (3110000 + (3960000 * level));
        }
    }

    getTotalMeso(level) {
        let total = 0;
        for(let i = level; i < 20; i++) {
            total += this.getReqMeso(level);
        }
        return total;
    }

}

class ChuChuIslandSymbol extends ArcaneSymbol {

    constructor(level, holds) {
        super(level, holds);

    }

    getReqMeso(level) {
        if(level < 1 || level > 20) {
            return -1;
        } else if (level === 20) {
            return 0;
        } else {
            // 3,110,000 + 3,960,000n
            return (6220000 + (4620000 * level));
        }
    }

    getTotalMeso(level) {
        let total = 0;
        for(let i = level; i < 20; i++) {
            total += this.getReqMeso(level);
        }
        return total;
    }

}

class LacheleinSymbol extends ArcaneSymbol {

}

class ArcanaSymbol extends ArcaneSymbol {

}

class MorassSymbol extends ArcaneSymbol {

}

class EsferaSymbol extends ArcaneSymbol {

}


class AuthenticSymbol extends Symbol {

}

class CerniumSymbol extends AuthenticSymbol {

}

class ArcusSymbol extends AuthenticSymbol {

}

class OdiumSymbol extends AuthenticSymbol {

}