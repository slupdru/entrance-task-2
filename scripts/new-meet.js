let selectRoom = document.getElementsByClassName('select-room');
selectRoom[0].addEventListener('click', selectRoomFun);
let select = -1;

function selectRoomFun(event){
    let target = event.target;
    for (let i = 1; i < 4; i++){
        if ((target.id ===`room${i}`)||(target.parentNode.id ===`room${i}`)||(target.parentNode.parentNode.id ===`room${i}`)){
            let room = document.getElementById(`room${i}`);
            room.style.backgroundColor = '#007DFF';
            room.style.color = '#ffffff';
            select = i;
            room.childNodes[3].style.display='block';
        }
    }
    for (let i = 1; i < 4; i++){
        if ((i!==select)&&(select!=-1)){
            let room = document.getElementById(`room${i}`);
            room.style.display = 'none';
        }
    }
}

// var input = document.getElementById("members_input");
// new Awesomplete(input, {list: "#mylist"});