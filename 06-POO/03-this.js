const tarjeta = {
    number: 4234213434,
    saldo: 100,
    pagar: function (monto) {
      return this.saldo -= monto;
    },
    depositar: function (monto) {
      return this.saldo += monto;
    },
  };
  
  console.log("1- El saldo de mi tarjeta es de: ", tarjeta.saldo);
  tarjeta.depositar(100)
  tarjeta.depositar(100)
  tarjeta.depositar(100)
  tarjeta.depositar(100)
  tarjeta.depositar(100)
  console.log("2- El saldo de mi tarjeta es de: ", tarjeta.saldo);
  tarjeta.pagar(200)
  console.log("3- El saldo de mi tarjeta es de: ", tarjeta.saldo);
  