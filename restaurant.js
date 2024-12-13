export class Restaurante {
    constructor() {
      this.mesas = []; // Lista de mesas
      this.menu = [];  // Lista de platos en el menú
      this.pedidos = []; // Lista de pedidos
    }
  
    // Registrar una nueva mesa
    registrarMesa(numero) {
      if (this.mesas.find(mesa => mesa.numero === numero)) {
        console.log(`La mesa ${numero} ya está registrada.`);
        console.log('-----------------------------------------------------------')
      } else {
        this.mesas.push({ numero, ocupada: false });
        console.log(`Mesa ${numero} registrada.`);
        console.log('-----------------------------------------------------------')
      }
    }
  
    // Registrar un cliente a una mesa
    registrarCliente(mesaNumero, cliente) {
      const mesa = this.mesas.find(m => m.numero === mesaNumero);
      if (!mesa) {
        console.log(`La mesa ${mesaNumero} no existe.`);
        console.log('-----------------------------------------------------------')
      } else if (mesa.ocupada) {
        console.log(`La mesa ${mesaNumero} ya está ocupada.`);
        console.log('-----------------------------------------------------------')
      } else {
        mesa.ocupada = true;
        mesa.cliente = cliente;
        console.log(`Cliente ${cliente} registrado en la mesa ${mesaNumero}.`);
        console.log('-----------------------------------------------------------')
      }
    }
  
    // Crear un menú con platos y precios
    agregarPlato(nombre, precio) {
      this.menu.push({ nombre, precio });
      console.log(`Plato ${nombre} agregado al menú.`);
      console.log('-----------------------------------------------------------')
    }
  
    // Realizar un pedido
    realizarPedido(mesaNumero, platos) {
      const mesa = this.mesas.find(m => m.numero === mesaNumero);
      if (!mesa) {
        console.log(`La mesa ${mesaNumero} no existe.`);
        console.log('-----------------------------------------------------------')
        return;
      }
      if (!mesa.ocupada) {
        console.log(`La mesa ${mesaNumero} no está ocupada.`);
        console.log('-----------------------------------------------------------')
        return;
      }
  
      const pedido = {
        mesaNumero,
        cliente: mesa.cliente,
        platos: [],
        total: 0
      };
  
      platos.forEach(platoNombre => {
        const plato = this.menu.find(p => p.nombre === platoNombre);
        if (plato) {
          pedido.platos.push(plato);
          pedido.total += plato.precio;
        } else {
          console.log(`El plato ${platoNombre} no está en el menú.`);
          console.log('-----------------------------------------------------------')
        }
      });
  
      this.pedidos.push(pedido);
      console.log(`Pedido registrado para la mesa ${mesaNumero}. Total: $${pedido.total}.`);
      console.log('-----------------------------------------------------------')
    }
  
    // Generar reportes
    generarReporte() {
      const mesasOcupadas = this.mesas.filter(m => m.ocupada).length;
      const ingresos = this.pedidos.reduce((total, pedido) => total + pedido.total, 0);
  
      console.log(`Mesas ocupadas: ${mesasOcupadas}`);
      console.log(`Ingresos totales: $${ingresos}`);
      console.log('-----------------------------------------------------------')
    }
  }
  
  
  