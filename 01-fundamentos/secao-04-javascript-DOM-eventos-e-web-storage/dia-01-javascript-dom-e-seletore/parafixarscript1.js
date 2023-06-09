//Para fixar
//Agora você vai colocar em prática a utilização das 3 funções apresentadas. 
//Faça os exercícios propostos utilizando JavaScript.

//De olho na dica 👀: entender como o html está estruturado irá te ajudar a recuperar os elementos com JavaScript de forma mais assertiva. 
//Ou seja, primeiro entenda o html e depois manipule os elementos com javascript.

//1-Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
const title = document.getElementById("page-title");
title.innerText = "O Fabuloso Destino de Amélie Poulain";

//2-Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.innerText =
  "Amélie é uma parisiense ingênua com seu próprio senso de justiça. Ela decide ajudar as pessoas ao seu redor e, no caminho, descobre o amor.";

//3-Recupere o subtítulo e altere-o para: Principais informações.
const subtitle = document.getElementById("subtitle");
subtitle.innerText = "Principais informações";

//4-Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
const paragraphs = document.getElementsByClassName("paragraph-style");
const firstiParagraph = paragraphs[0];
firstParagraph.style.fontStyle = "italic";

//5-Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText =
  "Direção: Jean-Pierre Jeunet. Roteiristas: Guillaume LaurantJean-Pierre Jeunet. Artistas: Audrey TautouMathieu KassovitzRufus";

//6-Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.
const subtitle1 = document.getElementsByTagName("h2");
subtitle1[0].style.color = "green";
