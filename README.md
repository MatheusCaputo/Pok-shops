# Contextualização

Projeto desenvolvido como solução ao desafio para vaga de desenvolvedor Front-End Jr da B2W Digital.

# Desafio

O desafio proposto foi o desenvolvimento de **2 lojas** para **2 tipos (água, fogo, elétrico, etc)** de Pokémon com estilos diferentes, mantendo o mesmo comportamento.

Os pokémons deveriam ser obtidos através da [PokéAPI](https://pokeapi.co/), uma api que contém dados de Pokémon. A partir disso, deveria-se exibir os Pokémon, com seus respectivos preços, mantendo a cosistência entre o preço no catálogo e o exibido no carrinho lateral.

O MVP consiste em:

- **Catálogo de produtos.** 
- **Carrinho lateral.** 
- **Resumo do carrinho.** 
- **2 lojas com estilos e tipos diferentes de Pokémon.**

# Resultados e observação

## Water shop

![Print Water shop](https://github.com/MatheusCaputo/Pok-shops/blob/master/img/water-shop.PNG)

---

## Fire shop

![Print Fire shop](https://github.com/MatheusCaputo/Pok-shops/blob/master/img/fire-shop.PNG)

---

## **Observação**

Para obter o catálogo correto de cada uma das páginas acima, deve-se alterar no script **page.js** o parâmetro passado para o primeiro `.then` da `fetchTypePokemon` (função que consome e manipula a PokéAPI).

- Ao executar a index da Fire shop, passe a `generateHTMLFirePokemon` como parâmetro:

![Print fetchFire](https://github.com/MatheusCaputo/Pok-shops/blob/master/img/fetchFire.PNG)

- Ao executar a index da Water shop, passe a `generateHTMLWaterPokemon` como parâmetro:

![Print fetchWater](https://github.com/MatheusCaputo/Pok-shops/blob/master/img/fetchWater.PNG)
