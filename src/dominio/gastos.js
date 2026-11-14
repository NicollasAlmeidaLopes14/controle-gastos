export function validarGasto(descricao, valorCentavos, gastos) {
  const erros = {}

  if (!descricao.trim()) {
    erros.descricao = 'Informe a descrição do gasto.'
  }

  if (!Number.isSafeInteger(valorCentavos) || valorCentavos <= 0) {
    erros.valor = 'Informe um valor maior que zero e dentro do limite permitido.'
  } else if (!Number.isSafeInteger(somarGastos(gastos) + valorCentavos)) {
    erros.valor = 'O valor ultrapassa o limite permitido para o total de gastos.'
  }

  return erros
}

export function somarGastos(gastos) {
  return gastos.reduce((totalCentavos, gasto) => totalCentavos + gasto.valorCentavos, 0)
}
