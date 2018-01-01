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
   if ((event.parentNode.classList.contains('floor_table-hour_completed')) || (event.parentNode.classList.contains('floor_table-hour_nobutton')) ){
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
function lightCells(targetcel, color, click){
    switch (targetcel[0]) {

        case 0:
           if (click===true) {meetings[0].style.display = 'block';}
            for (let j = 0; j < 16; j++){
            rows[0][j].childNodes[1].style.background = color;
            floorLasthours[0].style.background = color;
            }
        break;

        case 1:
            if (targetcel[1]<=5){
                if (click===true) {meetings[1].style.display = 'block';}
                for (let j = 0; j < 5; j++){
                    rows[1][j].childNodes[1].style.background = color;
                    }
            }
            if (targetcel[1]>=7){
                floorLasthours[1].style.background = color;
                if (click===true) {meetings[2].style.display = 'block';}
                for (let j = 7; j < 16; j++){
                    rows[1][j].childNodes[1].style.background = color;
                    rows[1][j].childNodes[5].style.background = color;
                    }
            }
        break;

        case 2:
            if (targetcel[1]<=5){
                if (click===true) {meetings[3].style.display = 'block';}
                for (let j = 0; j < 5; j++){
                    rows[2][j].childNodes[1].style.background = color;
                    }
                }
            if (targetcel[1]>=7){
                floorLasthours[2].style.background = color;
                if (click===true) {meetings[4].style.display = 'block';}
                for (let j = 6; j < 16; j++){
                    for (let k = 0; k < rows[2][j].childNodes.length; k++){
                        if  ((rows[2][j].childNodes[k].classList!==undefined)&&(rows[2][j].childNodes[k].classList.contains('table-hour_3-block'))||(rows[2][j].childNodes[k].classList!==undefined)&&(rows[2][j].childNodes[k].classList.contains('table-hour_1-block'))){
                            rows[2][j].childNodes[k].style.background = color;
                        }
                    }
                    }
            }
        break;

        case 3:
            floorLasthours[3].style.background = color;
            if (click===true) {meetings[5].style.display = 'block';}
                for (let j = 0; j < 16; j++){
                rows[3][j].childNodes[1].style.background = color;
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