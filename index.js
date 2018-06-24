let player, pos, preenchido, xPontos = 0, oPontos = 0;

pos = ['var_1', 'var_2', 'var_3', 'var_4', 'var_5', 'var_6', 'var_7', 'var_8', 'var_9',];

preenchido = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

(function() {

    player = x();

    for(let i in pos) {
        document.getElementById(pos[i]).addEventListener("click", function() {
            document.getElementById(pos[i]).classList.add('p20');
            document.getElementById(pos[i]).innerHTML = player;

            preenchido[i] = 1;

            machine();

        });
    }

})();

function x() {
    return '<div class="xis">x</div>';
}

function o() {
    return '<div class="circulo"></div>';
}

function machine() {
    let machineChoice;
    do {
        machineChoice = Math.floor((Math.random()*9) + 1);
    } while(preenchido[machineChoice] == 1);

    document.getElementById(pos[machineChoice]).classList.add('p20');
    document.getElementById(pos[machineChoice]).innerHTML = o();

    preenchido[machineChoice] = 1;

    return machineChoice;
}

function result(playWin, machWin) {
    if(playWin !== machWin) {
        return "Deu velha, ninguém ganhou";
    } else {
        switch(playWin) {
            case player:
                if() {

                }
            ;
            case machineChoice:
                if() {
                    
                }
            ;
        }
    }
}