const valorSaldo = document.getElementById('valor-saldo');
const entrada = document.getElementById('entrada');
const saida = document.getElementById('saida');
const historico = document.getElementById('historico');

var saldoInicial = 0;

function handleClickAdd(event) {
    event.preventDefault();

    const valorEntrada = parseFloat(entrada.value);
    saldoInicial += valorEntrada;

    valorSaldo.textContent = saldoInicial;

    historico.innerHTML += `
        <li>Entrada de: ${valorEntrada}</li>
    `

    entrada.value = ""
};

function handleClickRemove(event) {
    event.preventDefault();

    const valorSaida = parseFloat(saida.value);

    if (valorSaida > saldoInicial) {
        alert('Não é possível fazer essa operação!')
    } else {
        saldoInicial -= valorSaida;

        valorSaldo.textContent = saldoInicial;

        historico.innerHTML += `
        <li>Saida de: ${valorSaida}</li>
    `
        saida.value = ""
    }
};

