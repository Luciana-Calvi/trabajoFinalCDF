import promptSync from "prompt-sync";
//const prompt = promptSync();

import {Restaurante} from "./restaurant.js"

let restaurante = new Restaurante()

let ciclo = true;

const prompt = promptSync();


while (ciclo === true){

    console.log('--------------------------------------------------------------------------')
    let accion
    accion = prompt("Ingrese que acción desea realizar \n 1- Registrar mesa \n 2- Registrar cliente \n 3- Agregar plato \n 4- Realizar pedido \n 5- Generar reporte \n 6-Salir del sistema ")
    console.log('--------------------------------------------------------------------------')

    switch (accion) {
      
            case '1': {
              const numeroMesa = prompt("Ingrese el número de la mesa: ");
              restaurante.registrarMesa(Number(numeroMesa));
              break;
            }
        
            case '2': {
              const numeroMesa = prompt("Ingrese el número de la mesa: ");
              const cliente = prompt("Ingrese el nombre del cliente: ");
              restaurante.registrarCliente(Number(numeroMesa), cliente);
              break;
            }
        
            case '3': {
              const nombrePlato = prompt("Ingrese el nombre del plato: ");
              const precioPlato = prompt("Ingrese el precio del plato: ");
              restaurante.agregarPlato(nombrePlato, Number(precioPlato));
              break;
            }
        
            case '4': {
              const numeroMesa = prompt("Ingrese el número de la mesa: ");
              const platos = prompt("Ingrese los platos separados por comas: ").split(",");
              restaurante.realizarPedido(Number(numeroMesa), platos.map(p => p.trim()));
              break;
            }
        
            case '5': {
              restaurante.generarReporte();
              break;
            }
        
            case '6': {
              console.log("Saliendo del sistema. ¡Hasta pronto!");
              ciclo = false;
              break;
            }
        
            default: {
              console.log("Opción no válida. Intente de nuevo.");
              break;
            }
          }





























































































       /* case '1': // Registrar mesa
            restaurante.registrarMesa(1);
            break;
        case '2': // Registrar cliente
            restaurante.registrarCliente(1, "Luciana");
            break;
        case '3': // Agregar plato
            restaurante.agregarPlato("Milanesa", 1500);
            break;
        case '4': // Realizar pedido
            restaurante.realizarPedido(1, ["Milanesa", "Ensalada"]);
            break;
        case '5': // Generar reporte
            restaurante.generarReporte();
            break;
        default:
           console.log('Acción no reconocida.');
            
           ciclo = false;
            break;*/

    }
    



