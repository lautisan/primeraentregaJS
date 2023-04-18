// Simulador de Plazos fijos en pesos y en dolares

//variables
let tazaAnualPesos = 0.30;
let tazaAnualDolares = 0.20;
let tazaMensual = 0;
let montoFinal = 0;
let volverACalcular = false;
let tipoMoneda = "";

//funciones
function depositoF() {
    deposito = parseFloat(prompt("Cuanto dinero queres depositar?"))
  while (Number.isNaN(deposito) || deposito === 0) {
        if (deposito !== 0) {
            alert("debe agregar un numero")
        } else {
            alert("debe agregar un numero distinto a cero")
        }
        deposito = parseFloat(prompt("Cuanto dinero queres depositar?"))
    }
    return (deposito)
}



function diasF() { dias = parseInt(prompt("Durante cuantos dias queres dejar depositado tu dinero ? ")) }
function interesesGanadosF() {
    if (tipoMoneda == "pesos") {
        interesesGanados = deposito * (tazaAnualPesos * dias / 365)
        alert(" Si depositas  " + " $ " + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("El monto final sera : " + " $ " + montoFinal.toFixed(2));
    }
    else if (tipoMoneda == "dolares") {
        interesesGanados = deposito * (tazaAnualDolares * dias / 365)
        alert(" Si depositas  " + " u$s" + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("El monto final sera : " + " u$s " + montoFinal.toFixed(2));
    }
}

//Ciclo
alert("Hola! Este es un simulador de plazos fijos")
do {

    tipoMoneda = prompt("Queres calcular un plazo en pesos o en dolares?").toLowerCase()
    switch (tipoMoneda) {
        case "pesos":
            depositoF()
            diasF()
            interesesGanadosF()
            break;
        case "dolares":
            depositoF()
            diasF()
            interesesGanadosF()
            break;
        default:
            alert(" El tipo de moneda no es correcto")
            break;

    }

    volverACalcular = confirm("Queres calcular un nuevo plazo fijo?")
    if (volverACalcular == true) {
        alert(" Perfecto! ingrese nuevos datos!")

    }
} while (volverACalcular);
alert("Muchas gracias! vuelva pronto!")