function mayorYMenorYPar(numero){
    if(numero > 5 && numero < 10 && numero % 2 === 0)console.log(true);
    else console.log(false);
};

mayorYMenorYPar(2);
mayorYMenorYPar(7);

function operadorOr(str){
    if(str === 'Henry' || str.length < 2 )console.log(true);
    else console.log(false);
};

operadorOr('Hola');

function negacion(permiso){
    if(!permiso) console.log('Tiene permiso');

};

negacion(true);
negacion(false);

function condicionCompleja(numero){
    if(numero > 9 && numero % 2 === 0 || numero === 3)console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);