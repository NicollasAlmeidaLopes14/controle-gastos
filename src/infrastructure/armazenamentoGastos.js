const chaveGastos = 'controle-gastos:gastos'
const categoriasPermitidas = ['alimentacao', 'transporte', 'lazer', 'outros']

export function carregarGastos() {
  try {
    const dadosSalvos = localStorage.getItem(chaveGastos)
    if (dadosSalvos === null) return []

    const gastos = JSON.parse(dadosSalvos)
    if (!Array.isArray(gastos)) return []

    const identificadores = new Set()
    let totalCentavos = 0

    for (const gasto of gastos) {
      if (
        gasto === null ||
        typeof gasto !== 'object' ||
        typeof gasto.identificador !== 'string' ||
        !gasto.identificador.trim() ||
        identificadores.has(gasto.identificador) ||
        typeof gasto.descricao !== 'string' ||
        !gasto.descricao.trim() ||
        !categoriasPermitidas.includes(gasto.categoria) ||
        !Number.isSafeInteger(gasto.valorCentavos) ||
        gasto.valorCentavos <= 0 ||
        !Number.isSafeInteger(totalCentavos + gasto.valorCentavos)
      ) {
        return []
      }

      identificadores.add(gasto.identificador)
      totalCentavos += gasto.valorCentavos
    }

    return gastos
  } catch {
    return []
  }
}

export function salvarGastos(gastos) {
  try {
    localStorage.setItem(chaveGastos, JSON.stringify(gastos))
    return true
  } catch {
    return false
  }
}
