interface ConvertPrice {
  convertToCurrencyBRL: (price: number) => string
  convertPriceToDecimalBRL: (price: number, minDigits: number, maxDigits: number) => string
}

export const priceConverter: ConvertPrice = {
  convertToCurrencyBRL(price: number) {
    return new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ).format(price)
  },
  convertPriceToDecimalBRL(price: number, minDigits: number, maxDigits: number) {
    return new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'decimal',
        minimumFractionDigits: minDigits,
        maximumFractionDigits: maxDigits,
      }
    ).format(price)
  }
}

