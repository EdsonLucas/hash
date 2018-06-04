let player, pos;

pos = ['var_1', 'var_2', 'var_3', 'var_4', 'var_5', 'var_6', 'var_7', 'var_8', 'var_9'];

(function() {

    player = x();

    for(let i in pos) {
        document.getElementById(pos[i]).addEventListener("click", function() {
            document.getElementById(pos[i]).classList.add('p20');
            document.getElementById(pos[i]).innerHTML = player;
        });
    }

    console.log(machine());

})();

function x() {
    return player = '<div class="xis">x</div>';
}

function o() {
    return player = '<div class="circulo"></div>';
}

function machine() {
    let machineChoice;

    machineChoice = Math.floor((Math.random()*8));

    return pos[machineChoice];
}