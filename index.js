function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo
}


function calcularRanking(){
    let saldoRank = calcularSaldo(100,50);
    switch (true) {
        case saldoRank <= 10:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Ferro");
            break;
        
        case saldoRank >= 11 && saldoRank <= 20:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Bronze");
            break;
        case saldoRank >= 21 && saldoRank <= 50:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Prata");
            break;
        case saldoRank >= 51 && saldoRank <= 80:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Ouro");
            break;
        case saldoRank >= 81 && saldoRank <= 90:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Diamante");
            break;
        case saldoRank >= 91 && saldoRank <= 100:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Lendário");
            break;
        case saldoRank >= 101:
            console.log("O Herói tem de saldo de " + saldoRank + " está no nível de Imortal");
            break;
        
    }

}

calcularRanking()


