const readlineSync = require('readline-sync');

function classificarHeroi() {
    // Solicitar nome e XP do herói
    let nome = readlineSync.question("Digite o nome do herói: ");
    let xp = parseInt(readlineSync.question("Digite a quantidade de experiência (XP) do herói: "));

    // Variável para armazenar o nível do herói
    let nivel = "";

    // Estruturas de decisão para determinar o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        console.log("XP inválido.");
        return;
    }

    // Exibir a mensagem final
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Laço para classificar múltiplos heróis
function classificarMultiplosHerois() {
    let continuar = true;

    while (continuar) {
        classificarHeroi();

        // Perguntar ao usuário se deseja continuar
        let resposta = readlineSync.question("Deseja classificar outro herói? (sim/não) ").toLowerCase();
        if (resposta !== "sim") {
            continuar = false;
            console.log("Classificação encerrada.");
        }
    }
}

// Chamar a função de classificação de múltiplos heróis
classificarMultiplosHerois();
