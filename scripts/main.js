let calendars = document.getElementsByClassName('calendar');
let floorLasthours = document.getElementsByClassName('floor_lasthour');
let body = document.getElementsByTagName('body');
let floorMobileTitles = document.getElementsByClassName('floor_mobile-title');
let main = document.getElementsByTagName('main');
let table = document.getElementsByClassName('table-container_rows');
let meetings = document.getElementsByClassName('modal-in-cell');
let rows =[];
let roomTitles = document.getElementsByClassName('room_title');
for (let i = 1; i < 10; i++){
    let row = document.getElementsByClassName(`row_${i}`);
    rows.push(row);
}

function nullStyleOfMeetings(){
    for (let i = 0; i < meetings.length; i++){
        meetings[i].style.display = '';
        }
}

function coordsOfTable(event){
   if ((event.parentNode.classList.contains('floor_table-hour'))){
        let targetNumber = [-1, -1];
        for (let i = 0; i < floorLasthours.length; i++){
            floorLasthours[i].style.background = '';
        }
        for (let i = 0; i < 9 ; i++){
            for (let j= 0; j<16; j++){
                for (let k = 0; k < rows[i][j].childNodes.length; k++){
                    if  ((rows[i][j].childNodes[k].classList!==undefined)&&(rows[i][j].childNodes[k].classList.contains('dark'))){
                        rows[i][j].childNodes[k].style.background = '';
                    }
                }
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
        for (let i = 0; i < floorLasthours.length; i++){
            floorLasthours[i].style.background = '';
        }
        for (let i = 0; i < 9 ; i++){
            for (let j= 0; j<16; j++){
                for (let k = 0; k < rows[i][j].childNodes.length; k++){
                    if  ((rows[i][j].childNodes[k].classList!==undefined)&&(rows[i][j].childNodes[k].classList.contains('dark'))){
                        rows[i][j].childNodes[k].style.background = '';
                    }
                }
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
    if ((target.classList.contains('link'))||(target.parentNode.classList.contains('link'))){
        location.href = 'edit-meet.html';

    }
    coordsOfTitle(target,'#1D00FE');
}


function hoverCompletedCells(event){
    let target = event.target;
    let targetNumber = coordsOfTable(target); 
    if (targetNumber!== undefined){
        lightCells(targetNumber,'rgba(0,0,0,0.12)', false);

    }
}
function colorCells(rownum, j1, color, j2, lasthour, click, meetnum){
    if (lasthour===true){floorLasthours[rownum].style.background = color;}
    if (click===true) {meetings[meetnum].style.display = 'block';}
    for (let j = j1; j <= j2; j++){
        for (let k = 0; k < rows[rownum][j].childNodes.length; k++){
            if  ((rows[rownum][j].childNodes[k].classList!==undefined)&&(rows[rownum][j].childNodes[k].classList.contains('table-hour_3-block'))||(rows[rownum][j].childNodes[k].classList!==undefined)&&(rows[rownum][j].childNodes[k].classList.contains('table-hour_1-block'))){
                rows[rownum][j].childNodes[k].style.background = color;
            }
    }
        }
}


function lightCells(targetcel, color, click){
    switch (targetcel[0]) {

        case 0:
        colorCells(0, 0, color, 15, true, click, 0);
        break;

        case 1:
            if (targetcel[1]<=5){
                colorCells(1, 0, color, 5, false, click, 1);
            }
           else if (targetcel[1]>=7){
                colorCells(1, 7, color, 15, true, click, 2);
            }
        break;

        case 2:
            if (targetcel[1]<=5){
                colorCells(2, 0, color, 5, false, click, 3);
                }
            else if (targetcel[1]>=6){
                colorCells(2, 6, color, 15, true, click, 4);
            }
        break;

        case 3:
        colorCells(3, 0, color, 15, true, click, 5);
        break;

        case 4:
            if (targetcel[1]<=5){
                colorCells(4, 0, color, 5, false, click, 6);
                }
            else if ((targetcel[1]===6)||(targetcel[1]===5)){
                colorCells(4, 5, color, 6, false, click, 7);
            }

           else  if ((targetcel[1]===8)||(targetcel[1]===9)){
                colorCells(4, 8, color, 9, false, click, 8);
            }

            else  if ((targetcel[1]===10)||(targetcel[1]===11)){
                colorCells(4, 10, color, 11, false, click, 9);
            }
            else  if (targetcel[1]>=12){
                colorCells(4, 12, color, 15, true, click, 10);
            }
        break;

        case 5:
            if (targetcel[1]<=6){
                colorCells(5, 0, color, 6, false, click, 11);
            }
            else if((targetcel[1]===7)||(targetcel[1]===8)){
                colorCells(5, 7, color, 8, false, click, 12);
            }
            else if((targetcel[1]===9)||(targetcel[1]===10)){
                colorCells(5, 9, color, 10, false, click, 13);
            }
            else if(targetcel[1]>=11){
                colorCells(5, 11, color, 15, true, click, 14);
            }
        break;

        case 6:
            if (targetcel[1]<=5){
                colorCells(6, 0, color, 5, false, click, 15);
            }
            else if((targetcel[1]>=6)&&(targetcel[1]<=9)){
                colorCells(6, 6, color, 9, false, click, 16);
            }
            else if((targetcel[1]===10)||(targetcel[1]===11)){
                colorCells(6, 10, color, 11, false, click, 17);
            }
            else if(targetcel[1]>=14){
                colorCells(6, 14, color, 15, true, click, 18);
            }
        break;

        case 7:
            if (targetcel[1]<=4){
                colorCells(7, 0, color, 4, false, click, 19);
            }
            else if(targetcel[1]===6){
                colorCells(7, 6, color, 6, false, click, 20);
            }
            else if((targetcel[1]===8)||(targetcel[1]===9)){
                colorCells(7, 8, color, 9, false, click, 21);
            }
            else if((targetcel[1]===10)||(targetcel[1]===11)){
                colorCells(7, 10, color, 11, false, click, 22);
            }
            else if(targetcel[1]>=12){
                colorCells(7, 12, color, 15, true, click, 23);
            }
        break;

        case 8:
            if (targetcel[1]<=4){
                colorCells(8, 0, color, 4, false, click, 24);
            }
            else if((targetcel[1]>=5)&&(targetcel[1]<=9)){
                colorCells(8, 5, color, 9, false, click, 25);
            }
            else if(targetcel[1]===10){
                colorCells(8, 10, color, 10, false, click, 26);
            }
            else if(targetcel[1]===11){
                colorCells(8, 11, color, 11, false, click, 27);
            }
            else if(targetcel[1]>=12){
                colorCells(8, 12, color, 15, true, click, 28);
            }
        break;
        }
}
function bodyClick(event){
    if ((event.target.id === 'timebar_date1')||(event.target.id === 'timebar_date2')){
        calendars[0].style.display='block';
        calendars[1].style.display='block';
        event.target.style.color='#0070E0';
    }
    else{
        calendars[0].style.display='none';
        calendars[1].style.display='none';
        for (let i = 1; i < 3; i++){
            document.getElementById(`timebar_date${i}`).style.color='#000000';
        }
    }
}

table[0].onclick = function(event) {
    let target = event.target;
    nullStyleOfMeetings();
    let targetNumber = coordsOfTable(target);
    if (targetNumber!== undefined){
        table[0].removeEventListener('mouseover', hoverCompletedCells);
        lightCells(targetNumber,'#98A9B9', true);
    }
    else{
        table[0].addEventListener('mouseover', hoverCompletedCells);
            coordsOfTitle(target, '#1D00FE');
    }
};

function scrollPage(){
 let scrollLeft = main[0].scrollLeft;
    if (scrollLeft>=180){
        for (let i = 0; i < floorMobileTitles.length; i++){
            floorMobileTitles[i].style.display='block';
            floorMobileTitles[i].style.left=`${scrollLeft-170}px`;
        }
    }
    else{
        for (let i = 0; i < floorMobileTitles.length; i++){
            floorMobileTitles[i].style.display='none';
        }
    }
}

let timeNow = document.getElementsByClassName('time-now');
let width = document.body.clientWidth;
if (width>850){
    timeNow[0].style.left = `${18 + (width-850)/15}px`
}

let ModalNewMeet = document.getElementsByClassName('modal-new-meet');
if (window.location.hash==='#created-meet'){
    ModalNewMeet[0].style.display = 'flex';
}

table[0].addEventListener('mousedown', activeTitileDown);
table[0].addEventListener('mouseover', lightTitile);
table[0].addEventListener('mouseover', hoverCompletedCells);
main[0].addEventListener('scroll', scrollPage);
body[0].addEventListener('click', bodyClick)