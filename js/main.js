
const carRun = (numeroCoche) => {


    //Aqui estoy guardando en chosen al coche instanciado, he hecho el truco del diccionario de JS
    //numeroCoche es un string con un número, que en el diccionario, equivale a un coche instanciado

    let chosen = carsDictionary[numeroCoche];

    //En este caso estoy ejecutando el método acelerar del coche elegido
    chosen.acelerar();

    //Ahora SECUESTRO al elemento de HTML cuya id coincide con el número de coche elegido, y le cambio su propiedad
    //innerHTML que muestra los metros recorridos, por los metros que hay recorridos en el objeto instanciado
    document.getElementById(numeroCoche).innerHTML= `${chosen.metrosRecorridos}`;

    document.getElementById(numeroCoche).innerHTML= `${chosen.metrosRecorridos}`;

};