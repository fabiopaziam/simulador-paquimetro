// Classe Parquímetro
class Parquimetro {
  constructor(valor) {
      this.valor = valor;
  }

  calcularTempo() {
      if (this.valor < 1) {
          return { tempo: null, erro: "Valor insuficiente. O valor mínimo é R$1,00." };
      }

      let tempo = 0;
      let custo = 0;

      if (this.valor >= 1 && this.valor < 2) {
          tempo = 30;
          custo = 1.00;
      } else if (this.valor >= 2 && this.valor < 3) {
          tempo = 60;
          custo = 2.00;
      } else if (this.valor >= 3) {
          tempo = 120;
          custo = 3.00;
      }

      const troco = this.valor - custo;

      return { tempo, troco, erro: null };
  }
}

function calcularTempo() {
  const valorInput = document.getElementById('valor').value;
  const valor = parseFloat(valorInput);

  const parquimetro = new Parquimetro(valor);
  const resultado = parquimetro.calcularTempo();

  const tempoElement = document.getElementById('tempo');
  const trocoElement = document.getElementById('troco');
  const erroElement = document.getElementById('erro');

  tempoElement.textContent = '';
  trocoElement.textContent = '';
  erroElement.textContent = '';

  if (resultado.erro) {
      erroElement.textContent = resultado.erro;
  } else {
      tempoElement.textContent = `Tempo concedido: ${resultado.tempo} minutos.`;
      trocoElement.textContent = `Troco: R$${resultado.troco.toFixed(2)}`;
  }
}
