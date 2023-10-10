const piece = document.querySelectorAll('.map div');
const btn = document.querySelector('#startPauseButton');
const b6 = document.querySelector('.block6');
const b10 = document.querySelector('.block10');
const b11 = document.querySelector('.block11');
const b14 = document.querySelector('.block14');
const done = document.querySelector('.done');
const map = document.querySelector('.map');

const width = 10;

let currentIndex6 = 0;
let currentIndex10 = 24;
let currentIndex11 = 0;
let currentIndex14 = 0;

function piecePick(){
    let shape = Math.floor(Math.random() * 7) + 1;
    console.log(shape);
    if (shape == 1){
        // playPiece == t
        currentIndex6 += 14;
        currentIndex11 += 25;
        currentIndex14 += 34;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }else if (shape == 2){
        // playPiece == s
        currentIndex6 += 14;
        currentIndex11 += 15;
        currentIndex14 += 23;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }else if(shape == 3){
        // playPiece == z
        currentIndex6 += 14;
        currentIndex11 += 25;
        currentIndex14 += 13;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }else if(shape == 4){
        // playPiece == fl
        currentIndex6 += 14;
        currentIndex11 += 35;
        currentIndex14 += 34;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }else if(shape == 5){
        // playPiece == bl
        currentIndex6 += 14;
        currentIndex11 += 34;
        currentIndex14 += 33;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    } else if(shape == 6){
        // playPiece == l
        currentIndex6 += 4;
        currentIndex11 += 14;
        currentIndex14 += 34;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }else{
        // playPiece == sq
        currentIndex6 += 14;
        currentIndex11 += 15;
        currentIndex14 += 25;
        piece[currentIndex6].classList.add('block6');
        piece[currentIndex10].classList.add('block10');
        piece[currentIndex11].classList.add('block11');
        piece[currentIndex14].classList.add('block14');
    }
    // console.log(playPiece)
}

piecePick();



function move(e){
    piece[currentIndex6].classList.remove('block6');
    piece[currentIndex10].classList.remove('block10');
    piece[currentIndex11].classList.remove('block11');
    piece[currentIndex14].classList.remove('block14');

    if (currentIndex6 < 190 && currentIndex10 < 190 && currentIndex11 < 190 && currentIndex14 < 190) {
        switch(e.key) {
            case ('ArrowLeft'):
                if (currentIndex6 % width > 0 &&
                    currentIndex10 % width > 0 &&
                    currentIndex11 % width > 0 &&
                    currentIndex14 % width > 0 &&
                    piece[currentIndex6 - 1].classList.contains('done') == false &&
                    piece[currentIndex10 - 1].classList.contains('done') == false &&
                    piece[currentIndex11 - 1].classList.contains('done') == false &&
                    piece[currentIndex14 - 1].classList.contains('done') == false){
                        currentIndex6 -= 1;
                        currentIndex10 -= 1;
                        currentIndex11 -= 1;
                        currentIndex14 -= 1;
                    }
            break
            case ('ArrowRight'):
                if (currentIndex6 % width < width - 1 &&
                    currentIndex10 % width < width - 1 &&
                    currentIndex11 % width < width - 1 &&
                    currentIndex14 % width < width - 1 &&
                    piece[currentIndex6 + 1].classList.contains('done') == false &&
                    piece[currentIndex10 + 1].classList.contains('done') == false &&
                    piece[currentIndex11 + 1].classList.contains('done') == false &&
                    piece[currentIndex14 + 1].classList.contains('done') == false){
                        currentIndex6 += 1;
                        currentIndex10 += 1;
                        currentIndex11 += 1;
                        currentIndex14 += 1;
                    }
        }
    }
    piece[currentIndex6].classList.add('block6');
    piece[currentIndex10].classList.add('block10');
    piece[currentIndex11].classList.add('block11');
    piece[currentIndex14].classList.add('block14');
}

function turn(e) {
    piece[currentIndex6].classList.remove('block6');
    piece[currentIndex10].classList.remove('block10');
    piece[currentIndex11].classList.remove('block11');
    piece[currentIndex14].classList.remove('block14');

    if (currentIndex6 < 190 &&
        currentIndex10 < 190 &&
        currentIndex11 < 190 && 
        currentIndex14 < 190) {
        switch(e.key) {
            case ('ArrowUp'):
                // shape 1 T
                if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 1 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex6 % width !== 0){
                        currentIndex6 += 11;
                        currentIndex11 += 9;
                        currentIndex14 -= 11;
                }else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 1 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex6 % width == 0){
                        currentIndex6 += 12;
                        currentIndex10 += 1;
                        currentIndex11 += 10;
                        currentIndex14 -= 10;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 10 &&
                    currentIndex14 == currentIndex10 - 1){
                        currentIndex6 += 9;
                        currentIndex11 -= 11;
                        currentIndex14 -= 9;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 1 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width !== 9){
                        currentIndex6 -= 11;
                        currentIndex11 -= 9;
                        currentIndex14 += 11;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 1 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width == 9){
                        currentIndex6 -= 12;
                        currentIndex10 -= 1;
                        currentIndex11 -=10;
                        currentIndex14 += 10;
                }else if(currentIndex6 == currentIndex10 - 1 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 + 1){
                        currentIndex6 -= 9;
                        currentIndex11 += 11;
                        currentIndex14 += 9;
                }
                // shape 2, s
                else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 - 9 &&
                    currentIndex14 == currentIndex10 - 1){
                        currentIndex6 += 11;
                        currentIndex11 += 20;
                        currentIndex14 -= 9;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 11 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width !== 0){
                        currentIndex6 -= 11;
                        currentIndex11 -= 20;
                        currentIndex14 += 9;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 11 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width == 0){
                        currentIndex6 -= 10;
                        currentIndex10 += 1;
                        currentIndex11 -= 19;
                        currentIndex14 += 10;
                }
                // shape 3, z
                else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 1 &&
                    currentIndex14 == currentIndex10 - 11){
                        currentIndex6 += 11;
                        currentIndex11 += 9;
                        currentIndex14 += 2;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 10 &&
                    currentIndex14 == currentIndex10 - 9 &&
                    currentIndex10 % width !== 0){
                        currentIndex6 -= 11;
                        currentIndex11 -= 9;
                        currentIndex14 -= 2;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 10 &&
                    currentIndex14 ==currentIndex10 - 9 &&
                    currentIndex10 % width == 0){
                        currentIndex6 -= 10;
                        currentIndex10 += 1;
                        currentIndex11 -= 8;
                        currentIndex14 -= 1;
                }
                // shape 4, fL
                else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 11 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex10 % width !== 0){
                        currentIndex6 += 11;
                        currentIndex11 -= 2;
                        currentIndex14 -= 11;
                }else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 11 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex10 % width == 0){
                        currentIndex6 += 12;
                        currentIndex10 += 1;
                        currentIndex11 -= 1;
                        currentIndex14 -= 10;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 + 9 &&
                    currentIndex14 == currentIndex10 - 1){
                        currentIndex6 += 9;
                        currentIndex11 -= 20;
                        currentIndex14 -= 9;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 11 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width !== 9){
                        currentIndex6 -= 11;
                        currentIndex11 += 2;
                        currentIndex14 += 11;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 11 &&
                    currentIndex14 == currentIndex10 - 10 &&
                    currentIndex10 % width == 9){
                        currentIndex6 -= 12;
                        currentIndex10 -= 1;
                        currentIndex11 += 1;
                        currentIndex14 += 10;
                }else if(currentIndex6 == currentIndex10 - 1 &&
                    currentIndex11 == currentIndex10 - 9 &&
                    currentIndex14 == currentIndex10 + 1){
                        currentIndex6 -= 9;
                        currentIndex11 += 20;
                        currentIndex14 += 9;
                }
                    // shape 5, bL
                else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 10 &&
                    currentIndex14 == currentIndex10 + 9 &&
                    currentIndex10 % width !== 9){
                        currentIndex6 += 11;
                        currentIndex11 -= 11;
                        currentIndex14 -= 20;
                }else if(currentIndex6 == currentIndex10 - 10 &&
                    currentIndex11 == currentIndex10 + 10 &&
                    currentIndex14 == currentIndex10 + 9 &&
                    currentIndex10 % width == 9){
                        currentIndex6 += 10;
                        currentIndex10 -= 1;
                        currentIndex11 -= 12;
                        currentIndex14 -= 21;
                }else if(currentIndex6 == currentIndex10 + 1 &&
                    currentIndex11 == currentIndex10 - 1 &&
                    currentIndex14 == currentIndex10 - 11){
                        currentIndex6 += 9;
                        currentIndex11 -= 9;
                        currentIndex14 += 2;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 - 9 &&
                    currentIndex10 % width !== 0){
                        currentIndex6 -= 11;
                        currentIndex11 += 11;
                        currentIndex14 += 20;
                }else if(currentIndex6 == currentIndex10 + 10 &&
                    currentIndex11 == currentIndex10 - 10&&
                    currentIndex14 == currentIndex10 - 9 &&
                    currentIndex10 % width == 0){
                        currentIndex6 -= 10;
                        currentIndex10 += 1;
                        currentIndex11 += 12;
                        currentIndex14 += 21;
                }else if(currentIndex6 == currentIndex10 - 1 &&
                    currentIndex11 == currentIndex10 + 1 &&
                    currentIndex14 == currentIndex10 + 11){
                        currentIndex6 -= 9;
                        currentIndex11 += 9;
                        currentIndex14 -= 2;
                }
                // shape 6, l
                else if(currentIndex6 == currentIndex10 - 20 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex10 % width !== 0 &&
                    currentIndex10 % width < 8){
                        currentIndex6 += 22;
                        currentIndex11 += 11;
                        currentIndex14 -= 11;
                }else if(currentIndex6 == currentIndex10 - 20 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 + 10 && 
                    currentIndex10 % width == 0){
                        currentIndex6 += 23;
                        currentIndex10 += 1;
                        currentIndex11 += 12;
                        currentIndex14 -= 10;
                }else if(currentIndex6 == currentIndex10 - 20 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex10 % width == 8){
                        currentIndex6 += 21;
                        currentIndex10 -= 1;
                        currentIndex11 += 10;
                        currentIndex14 -= 12;
                }else if(currentIndex6 == currentIndex10 - 20 &&
                    currentIndex11 == currentIndex10 - 10 &&
                    currentIndex14 == currentIndex10 + 10 &&
                    currentIndex10 % width == 9){
                        currentIndex6 += 20;
                        currentIndex10 -= 2;
                        currentIndex11 += 9;
                        currentIndex14 -= 13;
                }else if(currentIndex6 == currentIndex10 + 2 &&
                    currentIndex11 == currentIndex10 + 1 &&
                    currentIndex14 == currentIndex10 - 1){
                        currentIndex6 -= 22;
                        currentIndex11 -= 11;
                        currentIndex14 += 11;
                }
                // shape 7, sq
        }
    }
    piece[currentIndex6].classList.add('block6');
    piece[currentIndex10].classList.add('block10');
    piece[currentIndex11].classList.add('block11');
    piece[currentIndex14].classList.add('block14');
}



document.addEventListener('keyup', move);
document.addEventListener('keyup', turn);






function fall() {
    if(
        piece[currentIndex6].classList.contains('doneUp')||
        piece[currentIndex10].classList.contains('doneUp')||
        piece[currentIndex11].classList.contains('doneUp')||
        piece[currentIndex14].classList.contains('doneUp')
    ){
        piece[currentIndex6].classList.add('done');
        piece[currentIndex10].classList.add('done');
        piece[currentIndex11].classList.add('done');
        piece[currentIndex14].classList.add('done');
        piece[currentIndex6 - 10].classList.add('doneUp');
        piece[currentIndex10 - 10].classList.add('doneUp');
        piece[currentIndex11 - 10].classList.add('doneUp');
        piece[currentIndex14 - 10].classList.add('doneUp');
        piece[currentIndex6].classList.remove('block6');
        piece[currentIndex10].classList.remove('block10');
        piece[currentIndex11].classList.remove('block11');
        piece[currentIndex14].classList.remove('block14');
        currentIndex6 = 0;
        currentIndex10 = 24;
        currentIndex11 = 0;
        currentIndex14 = 0;
        piecePick();
    }else if(currentIndex6 < 190 && currentIndex10 < 190 && currentIndex11 < 190 && currentIndex14 < 190){
        switch(true){
            case currentIndex6 == currentIndex10 + 1:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
            case currentIndex6 == currentIndex10 + 10:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
            case currentIndex6 == currentIndex10 - 1:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
            case currentIndex6 == currentIndex10 - 10:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
            case currentIndex6 == currentIndex10 - 20:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
            case currentIndex6 == currentIndex10 + 2:
                piece[currentIndex6].classList.remove('block6');
                piece[currentIndex10].classList.remove('block10');
                piece[currentIndex11].classList.remove('block11');
                piece[currentIndex14].classList.remove('block14');
                currentIndex6 += 10;
                currentIndex10 += 10;
                currentIndex11 += 10;
                currentIndex14 += 10;
                piece[currentIndex6].classList.add('block6');
                piece[currentIndex10].classList.add('block10');
                piece[currentIndex11].classList.add('block11');
                piece[currentIndex14].classList.add('block14');
                break
        }
    }else{
        piece[currentIndex6].classList.add('done');
        piece[currentIndex10].classList.add('done');
        piece[currentIndex11].classList.add('done');
        piece[currentIndex14].classList.add('done');
        piece[currentIndex6 - 10].classList.add('doneUp');
        piece[currentIndex10 - 10].classList.add('doneUp');
        piece[currentIndex11 - 10].classList.add('doneUp');
        piece[currentIndex14 - 10].classList.add('doneUp');
        piece[currentIndex6].classList.remove('block6');
        piece[currentIndex10].classList.remove('block10');
        piece[currentIndex11].classList.remove('block11');
        piece[currentIndex14].classList.remove('block14');
        currentIndex6 = 0;
        currentIndex10 = 24;
        currentIndex11 = 0;
        currentIndex14 = 0;
        piecePick();
    }
}

let score = 0;


function row(){
    if(piece[20].classList.contains('done') ||
    piece[21].classList.contains('done') ||
    piece[22].classList.contains('done') ||
    piece[23].classList.contains('done') ||
    piece[24].classList.contains('done') ||
    piece[25].classList.contains('done') ||
    piece[26].classList.contains('done') ||
    piece[27].classList.contains('done') ||
    piece[28].classList.contains('done') ||
    piece[29].classList.contains('done')){
    }else if(piece[30].classList.contains('done') &&
    piece[31].classList.contains('done') &&
    piece[32].classList.contains('done') &&
    piece[33].classList.contains('done') &&
    piece[34].classList.contains('done') &&
    piece[35].classList.contains('done') &&
    piece[36].classList.contains('done') &&
    piece[37].classList.contains('done') &&
    piece[38].classList.contains('done') &&
    piece[39].classList.contains('done')){
        piece[30].classList.remove('done');
        piece[31].classList.remove('done');
        piece[32].classList.remove('done');
        piece[33].classList.remove('done');
        piece[34].classList.remove('done');
        piece[35].classList.remove('done');
        piece[36].classList.remove('done');
        piece[37].classList.remove('done');
        piece[38].classList.remove('done');
        piece[39].classList.remove('done');
        piece[20].classList.remove('doneUp');
        piece[21].classList.remove('doneUp');
        piece[22].classList.remove('doneUp');
        piece[23].classList.remove('doneUp');
        piece[24].classList.remove('doneUp');
        piece[25].classList.remove('doneUp');
        piece[26].classList.remove('doneUp');
        piece[27].classList.remove('doneUp');
        piece[28].classList.remove('doneUp');
        piece[29].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 29;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[40].classList.contains('done') &&
    piece[41].classList.contains('done') &&
    piece[42].classList.contains('done') &&
    piece[43].classList.contains('done') &&
    piece[44].classList.contains('done') &&
    piece[45].classList.contains('done') &&
    piece[46].classList.contains('done') &&
    piece[47].classList.contains('done') &&
    piece[48].classList.contains('done') &&
    piece[49].classList.contains('done')){
        piece[40].classList.remove('done');
        piece[41].classList.remove('done');
        piece[42].classList.remove('done');
        piece[43].classList.remove('done');
        piece[44].classList.remove('done');
        piece[45].classList.remove('done');
        piece[46].classList.remove('done');
        piece[47].classList.remove('done');
        piece[48].classList.remove('done');
        piece[49].classList.remove('done');
        piece[30].classList.remove('doneUp');
        piece[31].classList.remove('doneUp');
        piece[32].classList.remove('doneUp');
        piece[33].classList.remove('doneUp');
        piece[34].classList.remove('doneUp');
        piece[35].classList.remove('doneUp');
        piece[36].classList.remove('doneUp');
        piece[37].classList.remove('doneUp');
        piece[38].classList.remove('doneUp');
        piece[39].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 39;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[50].classList.contains('done') &&
    piece[51].classList.contains('done') &&
    piece[52].classList.contains('done') &&
    piece[53].classList.contains('done') &&
    piece[54].classList.contains('done') &&
    piece[55].classList.contains('done') &&
    piece[56].classList.contains('done') &&
    piece[57].classList.contains('done') &&
    piece[58].classList.contains('done') &&
    piece[59].classList.contains('done')){
        piece[50].classList.remove('done');
        piece[51].classList.remove('done');
        piece[52].classList.remove('done');
        piece[53].classList.remove('done');
        piece[54].classList.remove('done');
        piece[55].classList.remove('done');
        piece[56].classList.remove('done');
        piece[57].classList.remove('done');
        piece[58].classList.remove('done');
        piece[59].classList.remove('done');
        piece[40].classList.remove('doneUp');
        piece[41].classList.remove('doneUp');
        piece[42].classList.remove('doneUp');
        piece[43].classList.remove('doneUp');
        piece[44].classList.remove('doneUp');
        piece[45].classList.remove('doneUp');
        piece[46].classList.remove('doneUp');
        piece[47].classList.remove('doneUp');
        piece[48].classList.remove('doneUp');
        piece[49].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 49;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[60].classList.contains('done') &&
    piece[61].classList.contains('done') &&
    piece[62].classList.contains('done') &&
    piece[63].classList.contains('done') &&
    piece[64].classList.contains('done') &&
    piece[65].classList.contains('done') &&
    piece[66].classList.contains('done') &&
    piece[67].classList.contains('done') &&
    piece[68].classList.contains('done') &&
    piece[69].classList.contains('done')){
        piece[60].classList.remove('done');
        piece[61].classList.remove('done');
        piece[62].classList.remove('done');
        piece[63].classList.remove('done');
        piece[64].classList.remove('done');
        piece[65].classList.remove('done');
        piece[66].classList.remove('done');
        piece[67].classList.remove('done');
        piece[68].classList.remove('done');
        piece[69].classList.remove('done');
        piece[50].classList.remove('doneUp');
        piece[51].classList.remove('doneUp');
        piece[52].classList.remove('doneUp');
        piece[53].classList.remove('doneUp');
        piece[54].classList.remove('doneUp');
        piece[55].classList.remove('doneUp');
        piece[56].classList.remove('doneUp');
        piece[57].classList.remove('doneUp');
        piece[58].classList.remove('doneUp');
        piece[59].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 59;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --
        }
    }else if(piece[70].classList.contains('done') &&
    piece[71].classList.contains('done') &&
    piece[72].classList.contains('done') &&
    piece[73].classList.contains('done') &&
    piece[74].classList.contains('done') &&
    piece[75].classList.contains('done') &&
    piece[76].classList.contains('done') &&
    piece[77].classList.contains('done') &&
    piece[78].classList.contains('done') &&
    piece[79].classList.contains('done')){
        piece[70].classList.remove('done');
        piece[71].classList.remove('done');
        piece[72].classList.remove('done');
        piece[73].classList.remove('done');
        piece[74].classList.remove('done');
        piece[75].classList.remove('done');
        piece[76].classList.remove('done');
        piece[77].classList.remove('done');
        piece[78].classList.remove('done');
        piece[79].classList.remove('done');
        piece[60].classList.remove('doneUp');
        piece[61].classList.remove('doneUp');
        piece[62].classList.remove('doneUp');
        piece[63].classList.remove('doneUp');
        piece[64].classList.remove('doneUp');
        piece[65].classList.remove('doneUp');
        piece[66].classList.remove('doneUp');
        piece[67].classList.remove('doneUp');
        piece[68].classList.remove('doneUp');
        piece[69].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 69;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[80].classList.contains('done') &&
    piece[81].classList.contains('done') &&
    piece[82].classList.contains('done') &&
    piece[83].classList.contains('done') &&
    piece[84].classList.contains('done') &&
    piece[85].classList.contains('done') &&
    piece[86].classList.contains('done') &&
    piece[87].classList.contains('done') &&
    piece[88].classList.contains('done') &&
    piece[89].classList.contains('done')){
        piece[80].classList.remove('done');
        piece[81].classList.remove('done');
        piece[82].classList.remove('done');
        piece[83].classList.remove('done');
        piece[84].classList.remove('done');
        piece[85].classList.remove('done');
        piece[86].classList.remove('done');
        piece[87].classList.remove('done');
        piece[88].classList.remove('done');
        piece[89].classList.remove('done');
        piece[70].classList.remove('doneUp');
        piece[71].classList.remove('doneUp');
        piece[72].classList.remove('doneUp');
        piece[73].classList.remove('doneUp');
        piece[74].classList.remove('doneUp');
        piece[75].classList.remove('doneUp');
        piece[76].classList.remove('doneUp');
        piece[77].classList.remove('doneUp');
        piece[78].classList.remove('doneUp');
        piece[79].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 79;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[90].classList.contains('done') &&
    piece[91].classList.contains('done') &&
    piece[92].classList.contains('done') &&
    piece[93].classList.contains('done') &&
    piece[94].classList.contains('done') &&
    piece[95].classList.contains('done') &&
    piece[96].classList.contains('done') &&
    piece[97].classList.contains('done') &&
    piece[98].classList.contains('done') &&
    piece[99].classList.contains('done')){
        piece[90].classList.remove('done');
        piece[91].classList.remove('done');
        piece[92].classList.remove('done');
        piece[93].classList.remove('done');
        piece[94].classList.remove('done');
        piece[95].classList.remove('done');
        piece[96].classList.remove('done');
        piece[97].classList.remove('done');
        piece[98].classList.remove('done');
        piece[99].classList.remove('done');
        piece[80].classList.remove('doneUp');
        piece[81].classList.remove('doneUp');
        piece[82].classList.remove('doneUp');
        piece[83].classList.remove('doneUp');
        piece[84].classList.remove('doneUp');
        piece[85].classList.remove('doneUp');
        piece[86].classList.remove('doneUp');
        piece[87].classList.remove('doneUp');
        piece[88].classList.remove('doneUp');
        piece[89].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 89;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[100].classList.contains('done') &&
    piece[101].classList.contains('done') &&
    piece[102].classList.contains('done') &&
    piece[103].classList.contains('done') &&
    piece[104].classList.contains('done') &&
    piece[105].classList.contains('done') &&
    piece[106].classList.contains('done') &&
    piece[107].classList.contains('done') &&
    piece[108].classList.contains('done') &&
    piece[109].classList.contains('done')){
        piece[100].classList.remove('done');
        piece[101].classList.remove('done');
        piece[102].classList.remove('done');
        piece[103].classList.remove('done');
        piece[104].classList.remove('done');
        piece[105].classList.remove('done');
        piece[106].classList.remove('done');
        piece[107].classList.remove('done');
        piece[108].classList.remove('done');
        piece[109].classList.remove('done');
        piece[90].classList.remove('doneUp');
        piece[91].classList.remove('doneUp');
        piece[92].classList.remove('doneUp');
        piece[93].classList.remove('doneUp');
        piece[94].classList.remove('doneUp');
        piece[95].classList.remove('doneUp');
        piece[96].classList.remove('doneUp');
        piece[97].classList.remove('doneUp');
        piece[98].classList.remove('doneUp');
        piece[99].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 99;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[110].classList.contains('done') &&
    piece[111].classList.contains('done') &&
    piece[112].classList.contains('done') &&
    piece[113].classList.contains('done') &&
    piece[114].classList.contains('done') &&
    piece[115].classList.contains('done') &&
    piece[116].classList.contains('done') &&
    piece[117].classList.contains('done') &&
    piece[118].classList.contains('done') &&
    piece[119].classList.contains('done')){
        piece[110].classList.remove('done');
        piece[111].classList.remove('done');
        piece[112].classList.remove('done');
        piece[113].classList.remove('done');
        piece[114].classList.remove('done');
        piece[115].classList.remove('done');
        piece[116].classList.remove('done');
        piece[117].classList.remove('done');
        piece[118].classList.remove('done');
        piece[119].classList.remove('done');
        piece[100].classList.remove('doneUp');
        piece[101].classList.remove('doneUp');
        piece[102].classList.remove('doneUp');
        piece[103].classList.remove('doneUp');
        piece[104].classList.remove('doneUp');
        piece[105].classList.remove('doneUp');
        piece[106].classList.remove('doneUp');
        piece[107].classList.remove('doneUp');
        piece[108].classList.remove('doneUp');
        piece[109].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 109;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[120].classList.contains('done') &&
    piece[121].classList.contains('done') &&
    piece[122].classList.contains('done') &&
    piece[123].classList.contains('done') &&
    piece[124].classList.contains('done') &&
    piece[125].classList.contains('done') &&
    piece[126].classList.contains('done') &&
    piece[127].classList.contains('done') &&
    piece[128].classList.contains('done') &&
    piece[129].classList.contains('done')){
        piece[120].classList.remove('done');
        piece[121].classList.remove('done');
        piece[122].classList.remove('done');
        piece[123].classList.remove('done');
        piece[124].classList.remove('done');
        piece[125].classList.remove('done');
        piece[126].classList.remove('done');
        piece[127].classList.remove('done');
        piece[128].classList.remove('done');
        piece[129].classList.remove('done');
        piece[110].classList.remove('doneUp');
        piece[111].classList.remove('doneUp');
        piece[112].classList.remove('doneUp');
        piece[113].classList.remove('doneUp');
        piece[114].classList.remove('doneUp');
        piece[115].classList.remove('doneUp');
        piece[116].classList.remove('doneUp');
        piece[117].classList.remove('doneUp');
        piece[118].classList.remove('doneUp');
        piece[119].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 119;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[130].classList.contains('done') &&
    piece[131].classList.contains('done') &&
    piece[132].classList.contains('done') &&
    piece[133].classList.contains('done') &&
    piece[134].classList.contains('done') &&
    piece[135].classList.contains('done') &&
    piece[136].classList.contains('done') &&
    piece[137].classList.contains('done') &&
    piece[138].classList.contains('done') &&
    piece[139].classList.contains('done')){
        piece[130].classList.remove('done');
        piece[131].classList.remove('done');
        piece[132].classList.remove('done');
        piece[133].classList.remove('done');
        piece[134].classList.remove('done');
        piece[135].classList.remove('done');
        piece[136].classList.remove('done');
        piece[137].classList.remove('done');
        piece[138].classList.remove('done');
        piece[139].classList.remove('done');
        piece[120].classList.remove('doneUp');
        piece[121].classList.remove('doneUp');
        piece[122].classList.remove('doneUp');
        piece[123].classList.remove('doneUp');
        piece[124].classList.remove('doneUp');
        piece[125].classList.remove('doneUp');
        piece[126].classList.remove('doneUp');
        piece[127].classList.remove('doneUp');
        piece[128].classList.remove('doneUp');
        piece[129].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 129;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --
        }
    }else if(piece[140].classList.contains('done') &&
    piece[141].classList.contains('done') &&
    piece[142].classList.contains('done') &&
    piece[143].classList.contains('done') &&
    piece[144].classList.contains('done') &&
    piece[145].classList.contains('done') &&
    piece[146].classList.contains('done') &&
    piece[147].classList.contains('done') &&
    piece[148].classList.contains('done') &&
    piece[149].classList.contains('done')){
        piece[140].classList.remove('done');
        piece[141].classList.remove('done');
        piece[142].classList.remove('done');
        piece[143].classList.remove('done');
        piece[144].classList.remove('done');
        piece[145].classList.remove('done');
        piece[146].classList.remove('done');
        piece[147].classList.remove('done');
        piece[148].classList.remove('done');
        piece[149].classList.remove('done');
        piece[130].classList.remove('doneUp');
        piece[131].classList.remove('doneUp');
        piece[132].classList.remove('doneUp');
        piece[133].classList.remove('doneUp');
        piece[134].classList.remove('doneUp');
        piece[135].classList.remove('doneUp');
        piece[136].classList.remove('doneUp');
        piece[137].classList.remove('doneUp');
        piece[138].classList.remove('doneUp');
        piece[139].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 139;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --
        }
    }else if(piece[150].classList.contains('done') &&
    piece[151].classList.contains('done') &&
    piece[152].classList.contains('done') &&
    piece[153].classList.contains('done') &&
    piece[154].classList.contains('done') &&
    piece[155].classList.contains('done') &&
    piece[156].classList.contains('done') &&
    piece[157].classList.contains('done') &&
    piece[158].classList.contains('done') &&
    piece[159].classList.contains('done')){
        piece[150].classList.remove('done');
        piece[151].classList.remove('done');
        piece[152].classList.remove('done');
        piece[153].classList.remove('done');
        piece[154].classList.remove('done');
        piece[155].classList.remove('done');
        piece[156].classList.remove('done');
        piece[157].classList.remove('done');
        piece[158].classList.remove('done');
        piece[159].classList.remove('done');
        piece[140].classList.remove('doneUp');
        piece[141].classList.remove('doneUp');
        piece[142].classList.remove('doneUp');
        piece[143].classList.remove('doneUp');
        piece[144].classList.remove('doneUp');
        piece[145].classList.remove('doneUp');
        piece[146].classList.remove('doneUp');
        piece[147].classList.remove('doneUp');
        piece[148].classList.remove('doneUp');
        piece[149].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 149;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[160].classList.contains('done') &&
    piece[161].classList.contains('done') &&
    piece[162].classList.contains('done') &&
    piece[163].classList.contains('done') &&
    piece[164].classList.contains('done') &&
    piece[165].classList.contains('done') &&
    piece[166].classList.contains('done') &&
    piece[167].classList.contains('done') &&
    piece[168].classList.contains('done') &&
    piece[169].classList.contains('done')){
        piece[160].classList.remove('done');
        piece[161].classList.remove('done');
        piece[162].classList.remove('done');
        piece[163].classList.remove('done');
        piece[164].classList.remove('done');
        piece[165].classList.remove('done');
        piece[166].classList.remove('done');
        piece[167].classList.remove('done');
        piece[168].classList.remove('done');
        piece[169].classList.remove('done');
        piece[150].classList.remove('doneUp');
        piece[151].classList.remove('doneUp');
        piece[152].classList.remove('doneUp');
        piece[153].classList.remove('doneUp');
        piece[154].classList.remove('doneUp');
        piece[155].classList.remove('doneUp');
        piece[156].classList.remove('doneUp');
        piece[157].classList.remove('doneUp');
        piece[158].classList.remove('doneUp');
        piece[159].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 159;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[170].classList.contains('done') &&
    piece[171].classList.contains('done') &&
    piece[172].classList.contains('done') &&
    piece[173].classList.contains('done') &&
    piece[174].classList.contains('done') &&
    piece[175].classList.contains('done') &&
    piece[176].classList.contains('done') &&
    piece[177].classList.contains('done') &&
    piece[178].classList.contains('done') &&
    piece[179].classList.contains('done')){
        piece[170].classList.remove('done');
        piece[171].classList.remove('done');
        piece[172].classList.remove('done');
        piece[173].classList.remove('done');
        piece[174].classList.remove('done');
        piece[175].classList.remove('done');
        piece[176].classList.remove('done');
        piece[177].classList.remove('done');
        piece[178].classList.remove('done');
        piece[179].classList.remove('done');
        piece[160].classList.remove('doneUp');
        piece[161].classList.remove('doneUp');
        piece[162].classList.remove('doneUp');
        piece[163].classList.remove('doneUp');
        piece[164].classList.remove('doneUp');
        piece[165].classList.remove('doneUp');
        piece[166].classList.remove('doneUp');
        piece[167].classList.remove('doneUp');
        piece[168].classList.remove('doneUp');
        piece[169].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 169;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[180].classList.contains('done') &&
    piece[181].classList.contains('done') &&
    piece[182].classList.contains('done') &&
    piece[183].classList.contains('done') &&
    piece[184].classList.contains('done') &&
    piece[185].classList.contains('done') &&
    piece[186].classList.contains('done') &&
    piece[187].classList.contains('done') &&
    piece[188].classList.contains('done') &&
    piece[189].classList.contains('done')){
        piece[180].classList.remove('done');
        piece[181].classList.remove('done');
        piece[182].classList.remove('done');
        piece[183].classList.remove('done');
        piece[184].classList.remove('done');
        piece[185].classList.remove('done');
        piece[186].classList.remove('done');
        piece[187].classList.remove('done');
        piece[188].classList.remove('done');
        piece[189].classList.remove('done');
        piece[170].classList.remove('doneUp');
        piece[171].classList.remove('doneUp');
        piece[172].classList.remove('doneUp');
        piece[173].classList.remove('doneUp');
        piece[174].classList.remove('doneUp');
        piece[175].classList.remove('doneUp');
        piece[176].classList.remove('doneUp');
        piece[177].classList.remove('doneUp');
        piece[178].classList.remove('doneUp');
        piece[179].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 179;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
    }else if(piece[190].classList.contains('done') &&
    piece[191].classList.contains('done') &&
    piece[192].classList.contains('done') &&
    piece[193].classList.contains('done') &&
    piece[194].classList.contains('done') &&
    piece[195].classList.contains('done') &&
    piece[196].classList.contains('done') &&
    piece[197].classList.contains('done') &&
    piece[198].classList.contains('done') &&
    piece[199].classList.contains('done')){
        piece[190].classList.remove('done');
        piece[191].classList.remove('done');
        piece[192].classList.remove('done');
        piece[193].classList.remove('done');
        piece[194].classList.remove('done');
        piece[195].classList.remove('done');
        piece[196].classList.remove('done');
        piece[197].classList.remove('done');
        piece[198].classList.remove('done');
        piece[199].classList.remove('done');
        piece[180].classList.remove('doneUp');
        piece[181].classList.remove('doneUp');
        piece[182].classList.remove('doneUp');
        piece[183].classList.remove('doneUp');
        piece[184].classList.remove('doneUp');
        piece[185].classList.remove('doneUp');
        piece[186].classList.remove('doneUp');
        piece[187].classList.remove('doneUp');
        piece[188].classList.remove('doneUp');
        piece[189].classList.remove('doneUp');
        score += 1;
        document.getElementById('score').innerText = score;
        let block = 189;
        while (block > 29){
            if (piece[block].classList.contains('done')){
                piece[block - 10].classList.remove('doneUp');
                piece[block].classList.remove('done');
                piece[block].classList.add('doneUp');
                piece[block + 10].classList.add('done');
            }
            block --;
        }
        
        
    }
    
}





function play() {
    setInterval(fall, 250);
    setInterval(row, 1);
}


document.getElementById('score').innerText = score;
btn.addEventListener('click', play);
