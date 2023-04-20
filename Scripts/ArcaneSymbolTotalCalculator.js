
const reqGrowthValues = [12, 15, 20, 27, 36, 47, 60, 75, 92, 111, 132, 155, 180, 207, 236, 267, 300, 335, 372, 0];
const levelUpThreshold = [12, 27, 47, 74, 110, 157, 217, 292, 384, 495, 627, 782, 962, 1169, 1405, 1672, 1972, 2307, 2679];

let vj = [];
let cc = [];
let la = [];
let ar = [];
let mo = [];
let es = [];

let totalReqNum = 0;
let totalReqMeso = 0;
let totalReqPeriod = 0;

class Symbol {
    constructor(type, level, in_holds) {
        this.type = type;
        this.level = level;
        this.in_holds = in_holds;
    }

    getTotalReqSymbol() {
        var total = 0;
        for(var i = this.level; i <= 20; i++) {
            console.log("total = " + total + ", i = " + i + ", reqGrowthValues[i - 1] = " + reqGrowthValues[i - 1]);
            total += reqGrowthValues[i - 1];
        }
        total -= this.in_holds;
        return total;
    }

    getTotalReqMeso() {
        var totalReqMeso = 0;
        for(var i = this.level; i < 20; i++) {
            totalReqMeso += this.getReqMeso(i);
        }
        return totalReqMeso;
    }

    getReqMeso(level) {
        if(this.type === "vj") {
            return (3110000 + (level * 3960000));
        } else if (this.type === "cc") {
            return (6220000 + (level * 4620000));
        } else if (this.type === "la") {
            return (9330000 + (level * 5280000));
        } else if (this.type === "ar") {
            return (11196000 + (level * 5940000));
        } else if (this.type === "mo") {
            return (11196000 + (level * 5940000));
        } else if (this.type === "es") {
            return (11196000 + (level * 5940000));
        } else {
            return -1;
        }
    }

    getReqPeriod() {
        var reqSymbol = this.getTotalReqSymbol();
        if(this.type === "vj") {
            return (reqSymbol / 171);
        } else if (this.type === "cc") {
            return (reqSymbol / 157);
        } else if (this.type === "la") {
            return (reqSymbol / 122);
        } else if (this.type === "ar") {
            return (reqSymbol / 108);
        } else if (this.type === "mo") {
            return (reqSymbol / 101);
        } else if (this.type === "es") {
            return (reqSymbol / 101);
        } else {
            return -1;
        }
    }
}


function doCalculate() {

    load();

    if(allValuesRight()) {

        let vjSym = new Symbol("vj", vj[0], vj[1]);
        let ccSym = new Symbol("cc", cc[0], cc[1]);
        let laSym = new Symbol("la", la[0], la[1]);
        let arSym = new Symbol("ar", ar[0], ar[1]);
        let moSym = new Symbol("mo", mo[0], mo[1]);
        let esSym = new Symbol("es", es[0], es[1]);

        let vjReqNum = document.getElementById("vj-req-num");
        let vjReqMeso = document.getElementById("vj-req-meso");
        let vjReqPeriod = document.getElementById("vj-req-period");
        let vjNum = vjSym.getTotalReqSymbol();
        let vjMeso = vjSym.getTotalReqMeso();
        let vjPeriod = Math.ceil(vjSym.getReqPeriod());
        vjReqNum.innerHTML = vjNum.toLocaleString();
        vjReqMeso.innerHTML = vjMeso.toLocaleString();
        vjReqPeriod.innerHTML = vjPeriod.toLocaleString() + "주";
        totalReqNum += vjNum;
        totalReqMeso += vjMeso;
        if(totalReqPeriod < vjPeriod) {
            totalReqPeriod = vjPeriod;
        }


        let ccReqNum = document.getElementById("cc-req-num");
        let ccReqMeso = document.getElementById("cc-req-meso");
        let ccReqPeriod = document.getElementById("cc-req-period");
        let ccNum = vjSym.getTotalReqSymbol();
        let ccMeso = vjSym.getTotalReqMeso();
        let ccPeriod = Math.ceil(ccSym.getReqPeriod());
        ccReqNum.innerHTML = ccNum.toLocaleString();
        ccReqMeso.innerHTML = ccMeso.toLocaleString();
        ccReqPeriod.innerHTML = ccPeriod.toLocaleString() + "주";
        totalReqNum += ccNum;
        totalReqMeso += ccMeso;
        if(totalReqPeriod < ccPeriod) {
            totalReqPeriod = ccPeriod;
        }
        

        let laReqNum = document.getElementById("la-req-num");
        let laReqMeso = document.getElementById("la-req-meso");
        let laReqPeriod = document.getElementById("la-req-period");
        let laNum = laSym.getTotalReqSymbol();
        let laMeso = laSym.getTotalReqMeso();
        let laPeriod = Math.ceil(laSym.getReqPeriod());
        laReqNum.innerHTML = laNum.toLocaleString();
        laReqMeso.innerHTML = laMeso.toLocaleString();
        laReqPeriod.innerHTML = laPeriod.toLocaleString() + "주";
        totalReqNum += laNum;
        totalReqMeso += laMeso;
        if(totalReqPeriod < laPeriod) {
            totalReqPeriod = laPeriod;
        }

        let arReqNum = document.getElementById("ar-req-num");
        let arReqMeso = document.getElementById("ar-req-meso");
        let arReqPeriod = document.getElementById("ar-req-period");
        let arNum = arSym.getTotalReqSymbol();
        let arMeso = arSym.getTotalReqMeso();
        let arPeriod = Math.ceil(arSym.getReqPeriod());
        arReqNum.innerHTML = arNum.toLocaleString();
        arReqMeso.innerHTML = arMeso.toLocaleString();
        arReqPeriod.innerHTML = arPeriod.toLocaleString() + "주";
        totalReqNum += arNum;
        totalReqMeso += arMeso;
        if(totalReqPeriod < arPeriod) {
            totalReqPeriod = arPeriod;
        }

        let moReqNum = document.getElementById("mo-req-num");
        let moReqMeso = document.getElementById("mo-req-meso");
        let moReqPeriod = document.getElementById("mo-req-period");
        let moNum = moSym.getTotalReqSymbol();
        let moMeso = moSym.getTotalReqMeso();
        let moPeriod = Math.ceil(moSym.getReqPeriod());
        moReqNum.innerHTML = moNum.toLocaleString();
        moReqMeso.innerHTML = moMeso.toLocaleString();
        moReqPeriod.innerHTML = moPeriod.toLocaleString() + "주";
        totalReqNum += moNum;
        totalReqMeso += moMeso;
        if(totalReqPeriod < moPeriod) {
            totalReqPeriod = moPeriod;
        }

        let esReqNum = document.getElementById("es-req-num");
        let esReqMeso = document.getElementById("es-req-meso");
        let esReqPeriod = document.getElementById("es-req-period");
        let esNum = esSym.getTotalReqSymbol();
        let esMeso = esSym.getTotalReqMeso();
        let esPeriod = Math.ceil(esSym.getReqPeriod());
        esReqNum.innerHTML = esNum.toLocaleString();
        esReqMeso.innerHTML = esMeso.toLocaleString();
        esReqPeriod.innerHTML = esPeriod.toLocaleString() + "주";
        totalReqNum += esNum;
        totalReqMeso += esMeso;
        if(totalReqPeriod < esPeriod) {
            totalReqPeriod = esPeriod;
        }

        document.getElementById("total-req-num").innerHTML = totalReqNum.toLocaleString();
        document.getElementById("total-req-meso").innerHTML = totalReqMeso.toLocaleString();
        document.getElementById("total-req-period").innerHTML = totalReqPeriod.toLocaleString() + "주";


    } else {
        alert("모든 값을 잘 채워주세요!");
    }


}


function load() {

    let temp;

    vj.splice(0);
    cc.splice(0);
    la.splice(0);
    ar.splice(0);
    mo.splice(0);
    es.splice(0);

    totalReqNum = 0;
    totalReqMeso = 0;
    totalReqPeriod = 0;

    vj.push(document.getElementById("vj-level").value);
    temp = document.getElementById("vj-num").value;
    if(temp === '') {
        vj.push(0);
    } else {
        vj.push(parseInt(document.getElementById("vj-num").value));
    }

    cc.push(document.getElementById("cc-level").value);
    temp = document.getElementById("cc-num").value;
    if(temp === '') {
        cc.push(0);
    } else {
        cc.push(parseInt(document.getElementById("cc-num").value));
    }

    la.push(document.getElementById("la-level").value);
    temp = document.getElementById("la-num").value;
    if(temp === '') {
        la.push(0);
    } else {
        la.push(parseInt(document.getElementById("la-num").value));
    }

    ar.push(document.getElementById("ar-level").value);
    temp = document.getElementById("ar-num").value;
    if(temp === '') {
        ar.push(0);
    } else {
        ar.push(parseInt(document.getElementById("ar-num").value));
    }

    mo.push(document.getElementById("mo-level").value);
    temp = document.getElementById("mo-num").value;
    if(temp === '') {
        mo.push(0);
    } else {
        mo.push(parseInt(document.getElementById("mo-num").value));
    }

    es.push(document.getElementById("es-level").value);
    temp = document.getElementById("es-num").value;
    if(temp === '') {
        es.push(0);
    } else {
        es.push(parseInt(document.getElementById("es-num").value));
    }

}

function allValuesRight() {

    if(vj[0] == 0 || vj[1] < 0) {
        return false;
    }
    if(cc[0] == 0 || cc[1] < 0) {
        return false;
    }
    if(la[0] == 0 || la[1] < 0) {
        return false;
    }
    if(ar[0] == 0 || ar[1] < 0) {
        return false;
    }
    if(mo[0] == 0 || mo[1] < 0) {
        return false;
    }
    if(es[0] == 0 || es[1] < 0) {
        return false;
    }
    return true;

}