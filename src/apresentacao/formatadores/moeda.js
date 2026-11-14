const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatarMoeda(valorCentavos) {
  const partes = formatadorMoeda.formatToParts(BigInt(valorCentavos) / 100n)
  const centavos = String(valorCentavos % 100).padStart(2, '0')

  return partes.map((parte) => parte.type === 'fraction' ? centavos : parte.value).join('')
}

export function converterParaCentavos(valor) {
  const texto = valor.trim().replace(/^R\$\s*/, '')

  if (!/^\d+(?:\.\d{3})*(?:,\d*)?$/.test(texto)) {
    return null
  }

  const valorCentavos = Number(texto.replace(/\D/g, ''))
  return Number.isSafeInteger(valorCentavos) ? valorCentavos : null
}
