function conversor() {
    let tipo = prompt("Qual moeda deseja converter em TO?");
    let tibar;

    if (tipo === 'Tibar' || tipo === 'Tibar de Cobre' || tipo === 'tibar' || tipo === 'tibar de cobre' || tipo === 'TS') {
        tibar = 0.01;
    } else if (tipo === 'Tibar de Prata' || tipo === 'tibar de prata' || tipo === 'TP') {
        tibar = 0.1;
    } else if (tipo === 'Tibar de Platina' || tipo === 'Tibar de platina' || tipo === 'tibar de platina' || tipo === 'TL') {
        tibar = 10;
    } else {
        alert("Moeda inválida!");
        return; // Sai da função se a moeda for inválida
    }
  
  if (tibar === 10) {
        alert("Nem nobre é tão rico assim");
    }
  
    let valortibar = prompt("Digite sua quantia de Tibares: ");
    let resultado = valortibar * tibar;
    let formatado = resultado.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    alert("O valor em Tibar de Ouro é: " + formatado + " TO ");
}