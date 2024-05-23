let digitalElement = document.querySelector('.digital'); //relogio digital
let sElement = document.querySelector('.p_s'); //ponteiro segundos
let mElement = document.querySelector('.p_m'); //ponteiro minuto
let hElement = document.querySelector('.p_h'); //ponteiro hora

function updateClock(){ //atualizar o relogio
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //colocando a hora no relogio digital. Função rodando abaixo no setInterval.

    let sDeg = ((360 / 60) * second) - 90; //graus dos segundos - 90
    let mDeg = ((360 / 60) * minute) - 90; //graus dos minutos - 90
    let hDeg = ((360 / 12) * hour) - 90; //grau das horas

    sElement.style.transform = `rotate(${sDeg}deg)`; //CSS do ponteiro dos segundos
    mElement.style.transform = `rotate(${mDeg}deg)`; //CSS do ponteiro dos minutos
    hElement.style.transform = `rotate(${hDeg}deg)`; //CSS do ponteiro das horas
};

function fixZero(time){ //corrigindo o bug do 0 antes do 10.
    if(time < 10){
        return '0'+time;
    } else {
        return time;
    }
} 

setInterval(updateClock, 1000); //a função updateClock vai ser rodada de tempo em tempo que foi definido. No caso aqui 1000ms, 1s

updateClock();