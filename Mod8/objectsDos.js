var libro = {autos:'Borges', genero:'Policial', year:1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (var prop in mundo){
    console.log('Esta es la propiedad: '+prop);
    console.log('Este es el valor: '+mundo[prop]);
}

var mascota = {animal:'Perro', raza:'Ovejero aleman', amistoso: true, owner:'Maria Lopez', info: function(){console.log('Mi perro es un '+this.raza)},};

mascota.info();