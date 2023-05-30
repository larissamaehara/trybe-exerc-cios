let xadrezPeca = 'Torre';

switch (xadrezPeca.toLowerCase()) {
    case 'rei':
        console.log('O Rei movimenta uma casa para qualquer direção.');
        break;
    case 'bispo':
        console.log('O Bispo movimenta-se pelas Diagonais.');
        break;
    case 'rainha':
        console.log('A Rainha movimenta-se na diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('O Cavalo movimenta-se em "L" e pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('A Torre movimenta-se na horizontal e na vertical.');
        break;
    case 'peão':
        console.log("O Peão movimenta-se uma casa para frente e no primeiro movimento podem andar ser duas casas.");
        break;
    default:
        console.log('Ops..., essa peça não existe');
};