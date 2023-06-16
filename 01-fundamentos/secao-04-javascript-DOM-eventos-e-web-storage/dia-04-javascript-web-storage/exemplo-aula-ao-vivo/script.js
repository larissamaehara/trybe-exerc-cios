/*  EVENTOS
        são ações que acontecem quando o usuário ou o navegador manipula uma página, 
        permitindo que os elementos de uma página da web mudem dinamicamente.   */

function reset() {
    const player1 = document.getElementById('player1');         // captura o elemento player1
    const player2 = document.getElementById('player2');         // captura o elemento player2
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
    player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
    player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
};

function gerarNumeroAleatorio() {
    return (Math.random() * 400);
};

function gerarElementos() {
    // Criando o elemento <header>
    const headerElement = document.createElement("header");

    // Criando o elemento <h1>
    const h1Element = document.createElement("h1");

    // Criando o elemento <img>
    const imgElement = document.createElement("img");

    // Definindo o atributo src para a imagem
    imgElement.setAttribute("src", "./files/corridaMaravilhosa.png");

    // Definindo o atributo alt para a imagem
    imgElement.setAttribute("alt", "Corrida maravilhosa");

    // Adicionando a imagem ao elemento <h1>
    h1Element.appendChild(imgElement);

    // Adicionando o elemento <h1> ao elemento <header>
    headerElement.appendChild(h1Element);

    // Obtendo a referência ao elemento <body>
    const bodyElement = document.querySelector("body");

    // Adicionando o elemento <header> ao <body>
    bodyElement.appendChild(headerElement);

    // Criando o elemento <div> com a classe "selectPlayer"
    const divElement = document.createElement("div");
    divElement.className = "selectPlayer";

    // Criando o elemento <p> para o texto "SELECT YOUR PLAYER:"
    const pElement1 = document.createElement("p");
    pElement1.textContent = "SELECT YOUR PLAYER:";

    // Criando o elemento <p> para o texto "Clique na interrogação [?], depois na personagem."
    const pElement2 = document.createElement("p");
    pElement2.textContent = "Clique na interrogação [?], depois na personagem.";
    pElement2.className = "small";

    // Adicionando os elementos <p> ao <div>
    divElement.appendChild(pElement1);
    divElement.appendChild(pElement2);

    // Adicionando o elemento <div> ao <body>
    bodyElement.appendChild(divElement);

    // Criando o elemento <section> com o id "players" e a classe "alternatives"
    const sectionElement = document.createElement("section");
    sectionElement.id = "players";
    sectionElement.className = "alternatives";

    // Criando os elementos <img> para cada jogador
    const players = ["mario", "luigi", "peach", "yoshi"];

    for (let i = 0; i < players.length; i++) {
        const imgElement = document.createElement("img");
        imgElement.src = "files/" + players[i] + ".png";
        imgElement.alt = players[i].charAt(0).toUpperCase() + players[i].slice(1);
        imgElement.className = "playersImages";
        sectionElement.appendChild(imgElement);
    }

    // Adicionando o elemento <section> ao <body>
    bodyElement.appendChild(sectionElement);

    // Criando o elemento <button> com o id "start-race-btn" e a classe "btn-go"
    const startRaceBtn = document.createElement("button");
    startRaceBtn.id = "start-race-btn";
    startRaceBtn.className = "btn-go";
    startRaceBtn.textContent = "VAI!";

    // Adicionando o elemento <button> ao <body>
    bodyElement.appendChild(startRaceBtn);

    // Criando o elemento <button> com o id "reset-race-btn" e a classe "btn-reset"
    const resetRaceBtn = document.createElement("button");
    resetRaceBtn.id = "reset-race-btn";
    resetRaceBtn.className = "btn-reset";
    resetRaceBtn.textContent = "RESET";

    // Adicionando o elemento <button> ao <body>
    bodyElement.appendChild(resetRaceBtn);

    // Criando o elemento <section> com a classe "car-section"
    const carSection = document.createElement("section");
    carSection.className = "car-section";

    // Criando os elementos <div> para os carros
    const car1Element = document.createElement("div");
    car1Element.id = "player1";
    car1Element.className = "car";

    const car2Element = document.createElement("div");
    car2Element.id = "player2";
    car2Element.className = "car";

    // Adicionando os elementos <div> à <section>
    carSection.appendChild(car1Element);
    carSection.appendChild(car2Element);

    // Adicionando o elemento <section> ao <body>
    bodyElement.appendChild(carSection);

    // Criando o elemento <section> com a classe "score-section"
    const scoreSection = document.createElement("section");
    scoreSection.className = "score-section";

    // Criando o elemento <h2> com o texto "Vitórias"
    const h2Element = document.createElement("h2");
    h2Element.textContent = "Vitórias";

    // Criando os elementos <div> para agrupar os placares dos jogadores
    const scorePlayersDiv = document.createElement("div");
    scorePlayersDiv.className = "scores-players";

    // Criando os elementos <div> para os placares dos jogadores
    const scorePlayer1Div = document.createElement("div");
    scorePlayer1Div.className = "scorePlayer";

    // Criando elemento de texto
    const p1TextScoreElement = document.createElement("p");
    p1TextScoreElement.innerText = "Player 1: ";
    scorePlayer1Div.appendChild(p1TextScoreElement);

    const p1ScoreElement = document.createElement("p");
    p1ScoreElement.id = "p1Score";
    p1ScoreElement.innerText = 0;
    scorePlayer1Div.appendChild(p1ScoreElement);

    const scorePlayer2Div = document.createElement("div");
    scorePlayer2Div.className = "scorePlayer";

    // Criando elemento de texto
    const p2TextScoreElement = document.createElement("p");
    p2TextScoreElement.innerText = "Player 2: ";
    scorePlayer2Div.appendChild(p2TextScoreElement);

    const p2ScoreElement = document.createElement("p");
    p2ScoreElement.id = "p2Score";
    p2ScoreElement.innerText = 0;
    scorePlayer2Div.appendChild(p2ScoreElement);

    // Adicionando elementos a <div>
    scorePlayersDiv.appendChild(scorePlayer1Div);
    scorePlayersDiv.appendChild(scorePlayer2Div);

    // Adicionando os elementos ao <section>
    scoreSection.appendChild(h2Element);
    scoreSection.appendChild(scorePlayersDiv);

    // Adicionando o elemento <section> ao <body>
    bodyElement.appendChild(scoreSection);

};

function carregarLocalStorage() {
    const scorePlayer1 = document.getElementById('p1Score');
    const scorePlayer2 = document.getElementById('p2Score');

    if (localStorage.getItem('scoresPlayers') !== null) {
        const scoresPlayers = JSON.parse(localStorage.getItem('scoresPlayers'));
        scorePlayer1.innerText = scoresPlayers[0];
        scorePlayer2.innerText = scoresPlayers[1];
    }
};

function gravarLocalStorage() {
    const scorePlayer1 = document.getElementById('p1Score');
    const scorePlayer2 = document.getElementById('p2Score');

    const scores = [];
    scores.push(parseInt(scorePlayer1.innerText));
    scores.push(parseInt(scorePlayer2.innerText));
    localStorage.setItem('scoresPlayers', JSON.stringify(scores));
};

function jogaYjoga() {
    const audioWinner = document.getElementById('audioWinner'); 
    const scorePlayer1 = document.getElementById('p1Score');
    const scorePlayer2 = document.getElementById('p2Score');
    const player1 = document.getElementById('player1');         
    const player2 = document.getElementById('player2');         

    player1.style.marginLeft = (parseInt(player1.style.marginLeft)) + gerarNumeroAleatorio() + 'px';
    player2.style.marginLeft = (parseInt(player2.style.marginLeft)) + gerarNumeroAleatorio() + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if (player1Win) {
        alert('PLAYER 1 VENCEU');
        audioWinner.play();
        reset();

        scorePlayer1.innerText = +scorePlayer1.innerText + 1;
    } else if (player2Win) {
        alert('PLAYER 2 VENCEU');
        audioWinner.play();
        reset();

        scorePlayer2.innerText = +scorePlayer2.innerText + 1;
    }

    gravarLocalStorage(scorePlayer1, scorePlayer2);
};

function zerarLocalizacao() {
    const player1 = document.getElementById('player1');         
    const player2 = document.getElementById('player2'); 

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
}

function adicionandoEscutadorParaPlayers() {
    const cars = document.querySelectorAll('.car');
    for (let car of cars) {
        car.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }

            event.target.classList.add('selected');
        });
    }
};

function adicionandoEscutadorParaPersonagens() {
    const personagens = document.querySelectorAll('.playersImages');
    for (let personagem of personagens) {
        personagem.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.style.backgroundImage = (`url(${event.target.src})`);
                selected.classList.remove('selected');
            }
        });
    }
};

window.onload = () => {
    gerarElementos();
    
    carregarLocalStorage();
    zerarLocalizacao();

    const startBtn = document.getElementById('start-race-btn'); // captura o botao start
    startBtn.addEventListener('click', jogaYjoga);

    adicionandoEscutadorParaPlayers();
    adicionandoEscutadorParaPersonagens();
};

