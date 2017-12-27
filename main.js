let table = document.getElementsByClassName('table-container_rows');
let meetings = document.getElementsByClassName('modal-in-cell');
let rows =[];
let roomTitles = document.getElementsByClassName('room_title');
for (let i = 1; i < 10; i++){
    let row = document.getElementsByClassName(`row_${i}`);
    rows.push(row);
}

function nullStyleOfMeetings(){
    for (let i = 0; i < 2; i++){
        meetings[i].style.display = '';
        }
}

function coordsOfTable(event, type){
   if ((event.parentNode.classList.contains('floor_table-hour_completed')) || (event.parentNode.classList.contains('floor_table-hour_nobutton')) ){
        let targetNumber = [-1, -1];
        for (let i = 0; i < 2 ; i++){
            for (let j= 0; j<16; j++){
                rows[i][j].childNodes[1].style.background = '';
                if (event.parentNode===rows[i][j]) {
                    targetNumber[0] = i;
                    targetNumber[1] = j;
                }
            }
         
        }
        return targetNumber;
    }
    else{
        nullStyleOfMeetings();
        for (let i = 0; i < 2 ; i++){
            for (let j= 0; j<16; j++){
                rows[i][j].childNodes[1].style.background = '';
            }
        }
    }
}

function coordsOfTitle(event, color){
    if ((event.classList.contains('floor_button')) || (event.parentNode.classList.contains('floor_button'))){
        let numOfStr = -1;
        for (let i = 1; i < 10; i++){
            if ((event.classList.contains(`floor_button_button-line${i}`)) || (event.parentNode.classList.contains(`floor_button_button-line${i}`))){
                numOfStr = i;
            }
        }
        roomTitles[numOfStr].style.color = color;
    }
    else{
        for (let i = 0; i < 9; i++){
            roomTitles[i].style.color = '';
        }
    }
}

function lightTitile(event){
    let target = event.target;
    coordsOfTitle(target,'#0070E0');
}
function activeTitileDown(event){
    let target = event.target;
    coordsOfTitle(target,'#1D00FE');
}


function hoverCompletedCells(event){
    let target = event.target;
    let targetNumber = coordsOfTable(target); 
    if (targetNumber!== undefined){
        switch (targetNumber[0]) {
            case 0:
                for (let j = 0; j < 16; j++){
                rows[0][j].childNodes[1].style.background = 'rgba(0,0,0,0.12)';
                }
              break;
            case 1:
              break;
          }
    }
}


table[0].onclick = function(event) {
    let target = event.target;
    nullStyleOfMeetings();
    let targetNumber = coordsOfTable(target);
    if (targetNumber!== undefined){
        table[0].removeEventListener('mouseover', hoverCompletedCells);
        switch (targetNumber[0]) {
            case 0:
                meetings[0].style.display = 'block';
                for (let j = 0; j < 16; j++){
                rows[0][j].childNodes[1].style.background = '#98A9B9';
                }
              break;
            case 1:
                meetings[1].style.display = 'block';
              break;
          }
    }
    else{
        table[0].addEventListener('mouseover', hoverCompletedCells);
            coordsOfTitle(target, '#1D00FE');
    }
};


table[0].addEventListener('mousedown', activeTitileDown);
table[0].addEventListener('mouseover', lightTitile);
table[0].addEventListener('mouseover', hoverCompletedCells);
