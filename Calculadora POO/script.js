class Calculadora {
    constructor(num1, operacao, num2) {
      this.num1 = num1;
      this.operacao = operacao;
      this.num2 = num2;
    }
  
    validarCalculo() {
      if (typeof this.num1 !== 'number' || typeof this.num2 !== 'number') {
        throw new Error('Os números fornecidos não são válidos');
      }
      if (this.operacao !== '+' && this.operacao !== '-' && this.operacao !== '*' && this.operacao !== '/') {
        throw new Error('Operação inválida. Use "+", "-", "*" ou "/"');
      }
    }
  
    calcular() {
      this.validarCalculo();
      switch (this.operacao) {
        case '+':
          return this.num1 + this.num2;
        case '-':
          return this.num1 - this.num2;
        case '*':
          return this.num1 * this.num2;
        case '/':
          if (this.num2 === 0) {
            throw new Error('Divisão por zero não é permitida');
          }
          return this.num1 / this.num2;
        default:
          throw new Error('Operação inválida');
      }
    }
  }

  let calculo = new Calculadora(8, '-', 4);
  try {
    let resultado = calculo.calcular();
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Erro:', error.message);
  }
  