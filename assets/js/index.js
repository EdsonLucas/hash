let xPontos = 0, oPontos = 0;

let position = [["","",""],["","",""],["","",""]];

(function() {

    player = x();

    for(let i = 0; i < position.length; i++) {
        for(let j = 0; j < position[i].length; j++) {
            
            document.getElementById('var_' + i + '_' + j).addEventListener("click", function() {            
                if(position[i][j] === ""){
                    document.getElementById('var_' + i + '_' + j).classList.add('p20');
                    document.getElementById('var_' + i + '_' + j).innerHTML = player;
                    position[i][j] = 'x';                
                    sleep(500).then(() => machine());
                }

        });
    }
    }

})();

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}  

function x() { return '<div class="xis">x</div>'; }

function o() { return '<div class="circulo"></div>'; }

function machine() {    
    let i, j, endGame = true;
    if(!result('x', 'o')){
        position.some((el) => {
            if(el[0] === "" || el[1] === "" || el[2] === "") { 
                endGame = false;
            }
        });
        if(endGame) {
            gameOver();
            return;
        }
        do {

            i = Math.floor((Math.random()*3));
            j = Math.floor((Math.random()*3));       

        } while(position[i][j] !== "");

        document.getElementById('var_' + i + '_' + j).classList.add('p20');
        document.getElementById('var_' + i + '_' + j).innerHTML = o();
    
        position[i][j] = 'o';
        result('x', 'o');
    }
        
}

function check(choice){
    if(horizontal(choice)) { 
        return true;
    } else if(vertical(choice)) { 
        return true;
    } else if(diagonal(choice)) { 
        return true;
    } else { 
        return false;
    }
    
}

function horizontal(choice){
    
    if(position[0][0] === choice && position[0][1] === choice && position[0][2] === choice){
        return true;
    } else if(position[1][0] === choice && position[1][1] === choice && position[1][2] === choice){
        return true;
    } else if(position[2][0] === choice && position[2][1] === choice && position[2][2] === choice){
        return true;
    } else { 
        return false; 
    }

}

function vertical(choice){    
    if(position[0][0] === choice && position[1][0] === choice && position[2][0] === choice) {        
        return true;
    } else if(position[0][1] === choice && position[1][1] === choice && position[2][1] === choice) {
        return true;
    } else if(position[0][2] === choice && position[1][2] === choice && position[2][2] === choice) {
        return true;
    } else { 
        return false; 
    }
}

function diagonal(choice){
    if(position[0][0] === choice && position[1][1] === choice && position[2][2] === choice){
        return true;
    } else if(position[2][0] === choice && position[1][1] === choice && position[0][2] === choice){
        return true;
    } else { 
        return false; 
    }
}

function clean() {
    position = [["","",""],["","",""],["","",""]];

    let element = document.querySelectorAll('.p20');
    [].forEach.call(element, function(el) {
        el.classList.remove('p20');
    });  

    let elems = document.getElementsByClassName('xis');
    let elams = document.getElementsByClassName('circulo');
    while(elems.length >= 0 && elams.length >= 0) {
        elems[0].parentNode.removeChild(elems[0]);
        elams[0].parentNode.removeChild(elams[0]);
    }  
}

function result(playWin, machWin) {    
    if(check(playWin)){ 
        xPontos++;
        document.querySelector('#player').innerHTML = "Jogador: " + xPontos + " pontos";
        swal({
            type: 'success',
            title: 'Parabéns, você ganhou!',
            text: 'Deseja jogar novamente?',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Vamos lá!'
        }).then((result) => {
            if (result.value) {
                clean();
            }
          });
       return true;
    }
    else if(check(machWin)){ 
        oPontos++;
        document.querySelector('#machine').innerHTML = "Máquina: " + oPontos + " pontos";
        swal({
            type: 'error',
            title: 'Game Over!',
            text: 'Deseja tentar novamente?',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Vamos lá!'
        }).then((result) => {
            if (result.value) {
                clean();
            }
          });
        return true;
    }    
    return false;
}

function gameOver(){
    swal({
        title: 'Houve um empate!',
        text: "deseja jogar novamente?",
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Vamos lá!'
    }).then((result) => {
        if (result.value) {
            clean();
        }
      });
}
