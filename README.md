<style>
  .images {
    display: flex;
    gap: 4px;
  }

  img {
    max-width: 10rem;
    height: auto;
    display: block;
  }
</style>

# Desafio: Ignite Coffee Delivery ☕

Essa aplicação foi criada seguindo as diretrizes do desafio "Coffee Delivery"
do curso de React da Rocketseat.

O desafio apresenta um layout no Figma para servir de guia e o desenvolvedor
deve segui-lo para construir a aplicação.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e3db162-8cc3-49ea-ba45-1f631c246457/deploy-status)](https://app.netlify.com/sites/tufcoder-coffee-delivery/deploys)

<div class="images">
  <img src="assets/home-desktop.png" width="1168" height="945" />
  <img src="assets/form-desktop.png" width="1155" height="825" />
</div>

## Sobre o desafio 📋

Nesse desafio, você vai desenvolver uma aplicação para gerenciar um carrinho 
de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

A aplicação exige do desenvolvedor:

- Estados
- ContextAPI
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

## O que acrescentei ao projeto ➕

- Layout `Responsivo` utilizando Mobile First Development
- `Geolocalização` com a API da [Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/)
- Busca automática de endereço através da API [`VIACEP`](https://viacep.com.br/)
- Funcionalidade de voltar para a Home ao entrar na página Checkout

<div class="images">
  <img src="assets/home-mobile.png" width="370" height="734" />
  <img src="assets/coffees-mobile.png" width="370" height="798" />
  <img src="assets/form-mobile1.png" width="370" height="602" />
  <img src="assets/form-mobile2.png" width="370" height="529" />
</div>
