var columns = document.getElementById('Columns');
var rows = document.getElementById('Rows');
var P1S = document.getElementById('P1Score')
var P2S = document.getElementById('P2Score')
var Results = document.getElementById('Results')
var turn = false;

var col1=36,col2 =37, col3 =38, col4=39, col5=40, col6=41,col7=42; 
var j=1;

var arrP1 = [];
var arrP2 = [];

var p1Score = 0;
var p2Score = 0;




rows.querySelectorAll('article').forEach(block=>{
    block.setAttribute('id',`col`+`${j}`)
    block.addEventListener('mouseenter', function(){
        if(turn){
            block.style.backgroundColor = 'yellow'
            block.style.border = '1px dotted blue'
        }else{
        block.style.backgroundColor = 'red';
        block.style.border = '1px dotted blue'
        }
    })
    block.addEventListener('click', function(){
        turn = !turn;
        Select(this.id);
    })
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = 'white';
        block.style.border = '1px solid white';
    })
    j++;
})



for(let i = 0; i<42; i++){
    let block = document.createElement('article');
    block.setAttribute('id',`${i+1}`);
    block.classList.add('Empty');
    block.addEventListener('click',function(){
        console.log(this.id);
    })

    columns.appendChild(block);
}



function Select(id){
    let x = document.getElementById(id);
    // console.log(x);
    let y;

    if(id=='col1'){
        y = document.getElementById(`${col1}`);
        col1-=7;
    }else{
        if(id=='col2'){
            y = document.getElementById(`${col2}`);
            col2-=7;
        }else{
            if(id=='col3'){
                y = document.getElementById(`${col3}`);
                col3-=7;
            }else{
                if(id=='col4'){
                    y = document.getElementById(`${col4}`);
                    col4-=7;
                }else{
                    if(id=='col5'){
                        y = document.getElementById(`${col5}`);
                        col5-=7;
                    }else{
                        if(id=='col6'){
                            y = document.getElementById(`${col6}`);
                            col6-=7;
                        }else{
                            if(id=='col7'){
                                y = document.getElementById(`${col7}`);
                                col7-=7;
                            }else{
                                console.log('Nothing')
                            }
                        }
                    }
                }
            }
        }
    }
    if(turn){
        y.classList.add('P1');
        y.classList.remove('Empty');
        Log();
    }else{
        y.classList.add('P2');
        y.classList.remove('Empty');
        Log();
    }    
}


function Log(){
    if(turn){
        columns.querySelectorAll('.P1').forEach(block=>{
            if(arrP1.includes(block.id)){

            }else{
        arrP1.push(block.id);

            }
        })
    }else{
        columns.querySelectorAll('.P2').forEach(block=>{
            if(arrP2.includes(block.id)){

            }else{
        arrP2.push(block.id);
            }
    })
    }
    console.log("P1:"+arrP1);
    console.log("P2:"+arrP2);
    console.log("<---------->");

    if (checkWin(arrP1)) {
        console.log("Player 1 Wins!");
        Results.innerText = 'Player 1 Wins!';
        p1Score++;
        P1S.innerText = p1Score;
        setTimeout(function(){
            arrP1 = [];
            arrP2 = [];
            col1=36,col2 =37, col3 =38, col4=39, col5=40, col6=41,col7=42; 
            columns.querySelectorAll('.P1').forEach(blocks=>{
                blocks.classList.remove('P1');
                blocks.classList.add('Empty');
            });
            columns.querySelectorAll('.P2').forEach(blocks=>{
                blocks.classList.remove('P2');
                blocks.classList.add('Empty');
            });
            Results.innerText = '';
            turn = false;
        },1000);
    } else if (checkWin(arrP2)) {
        console.log("Player 2 Wins!");
        Results.innerText = 'Player 2 Wins!';
        p2Score++;
        P2S.innerText = p2Score;
        setTimeout(function(){
            arrP1 = [];
            arrP2 = [];
            col1=36,col2 =37, col3 =38, col4=39, col5=40, col6=41,col7=42; 
            columns.querySelectorAll('.P1').forEach(blocks=>{
                blocks.classList.remove('P1');
                blocks.classList.add('Empty');
            });
            columns.querySelectorAll('.P2').forEach(blocks=>{
                blocks.classList.remove('P2');
                blocks.classList.add('Empty');
            });
            Results.innerText = '';
            turn = false;
        },1000);
    }
}

function checkWin(playerArr) {
    // Define winning combinations
    const winningCombinations = [
        // Horizontal
        ['1', '2', '3', '4'], ['2', '3', '4', '5'], ['3', '4', '5', '6'], ['4', '5', '6', '7'],
        ['8', '9', '10', '11'], ['9', '10', '11', '12'], ['10', '11', '12', '13'], ['11', '12', '13', '14'],
        ['15', '16', '17', '18'], ['16', '17', '18', '19'], ['17', '18', '19', '20'], ['18', '19', '20', '21'],
        ['22', '23', '24', '25'], ['23', '24', '25', '26'], ['24', '25', '26', '27'], ['25', '26', '27', '28'],
        ['29', '30', '31', '32'], ['30', '31', '32', '33'], ['31', '32', '33', '34'], ['32', '33', '34', '35'],
        ['36', '37', '38', '39'], ['37', '38', '39', '40'], ['38', '39', '40', '41'], ['39', '40', '41', '42'],
        // Vertical
        ['1', '8', '15', '22'], ['2', '9', '16', '23'], ['3', '10', '17', '24'], ['4', '11', '18', '25'],
        ['5', '12', '19', '26'], ['6', '13', '20', '27'], ['7', '14', '21', '28'],
        ['8', '15', '22', '29'], ['9', '16', '23', '30'], ['10', '17', '24', '31'], ['11', '18', '25', '32'],
        ['12', '19', '26', '33'], ['13', '20', '27', '34'], ['14', '21', '28', '35'],
        ['15', '22', '29', '36'], ['16', '23', '30', '37'], ['17', '24', '31', '38'], ['18', '25', '32', '39'],
        ['19', '26', '33', '40'], ['20', '27', '34', '41'], ['21', '28', '35', '42'],
        // Diagonal
        ['1', '9', '17', '25'], ['2', '10', '18', '26'], ['3', '11', '19', '27'], ['4', '12', '20', '28'],
        ['8', '16', '24', '32'], ['9', '17', '25', '33'], ['10', '18', '26', '34'], ['11', '19', '27', '35'],
        ['15', '23', '31', '39'], ['16', '24', '32', '40'], ['17', '25', '33', '41'], ['18', '26', '34', '42'],
        ['22', '30', '38'], ['23', '31', '39'], ['24', '32', '40'], ['25', '33', '41']
    ];

    for (let combination of winningCombinations) {
        if (combination.every(pos => playerArr.includes(pos))) {
            return true;
        }
    }
    return false;
}
