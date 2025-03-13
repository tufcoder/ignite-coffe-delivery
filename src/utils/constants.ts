export enum IconTitles {
  ShoppingCart = 'Ícone de um carrinho de compras',
  MapPin = 'Ícone no formato de um pin de localização de mapas',
  Clock = 'Ícone de um relógio',
  CurrencyDollar = 'Ícone do cifrão do dólar',
  Package = 'Ícone de um pacote de papelão usado em entregas',
  Coffee = 'Ícone de uma xícara de café',
  Plus = 'Ícone do botão de adição com um sinal de "+"',
  Minus = 'Ícone do botão de subtração com um sinal de "-"',
  Trash = 'Ícone de uma lata de lixo',
  CreditCard = 'Ícone de um cartão de crédito',
  Bank = 'Ícone representando uma instituição bancária',
  Money = 'Ícone de dinheiro em papel',
  ArrowLeft = 'Ícone de uma flecha apontando para a esquerda'
}

export enum ImageTitles {
  Logo = 'Logo da loja é uma imagem de um copo de café descartável na cor roxa com um foguete branco na estampa do copo e do lado está escrito "Coffe Delivery"',
  Delivery = 'Ilustração do pedido confirmado, um motociclista em movimento em uma moto roxa tipo uma Scooter com um baú pequeno na parte de atrás a caminho da entrega do pedido',
  Coffe = 'Um copo grande de café descartável na cor branca com a tampa na cor preta. No meio está uma listra com o rótulo do logo da loja',
}

interface Tax {
  fixedDelivery: number
}

export const taxes: Tax = {
  fixedDelivery: 3.5
}
