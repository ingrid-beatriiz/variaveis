const capital = 1000;
const jurosFixo = 0.125;
const periodoDeTempo = 5;

const montante = capital * (1 + jurosFixo) ** periodoDeTempo; 

console.log(montante.toFixed());

// Calcular juros compostos