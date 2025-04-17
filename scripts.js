class Parquimetro {
    constructor(valor) {
      this.valor = parseFloat(valor);
    }
  
    calcular() {
      if (isNaN(this.valor) || this.valor < 1) {
        return "Valor insuficiente. Insira pelo menos R$1,00.";
      }
  
      const tempo = Math.floor(this.valor) * 30;
      const troco = (this.valor % 1).toFixed(2);
      return `Tempo concedido: ${tempo} minutos. Troco: R$${troco}`;
    }
  }
  
  function calcularTempo() {
    const valor = document.getElementById("valor").value;
    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcular();
    document.getElementById("resultado").innerText = resultado;
  }
  
  