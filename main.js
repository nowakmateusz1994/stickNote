const board = document.querySelector('.board');
const bars = document.getElementsByClassName('bar');
const addNote = document.querySelector('form');
const removeBtns = document.getElementsByClassName('remove')

let active = false;


let xAxis;
let yAxis;


let insertBarX;
let insertBarY;

const chooseNote = (e) => {
    active = true;
    insertBarX = e.offsetX;
    insertBarY = e.offsetY;
}

const moveNote = (e) => {
    if (active) {
        xAxis = e.clientX - insertBarX;
        yAxis = e.clientY - insertBarY;
        e.target.parentNode.style.left = `${xAxis}px`;
        e.target.parentNode.style.top = `${yAxis}px`;
    }
}

const leavNote = () => {
    active = false;
}

const addNodeFunc = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') {
        const newNote = document.createElement('div')
        newNote.classList.add('note');
        const newBar = document.createElement('div');
        newBar.classList.add('bar');
        const btn = document.createElement('button');
        btn.textContent = 'Delete Note';
        btn.classList.add('remove');
        const masage = document.createElement('div');
        masage.classList.add('masage');
        masage.textContent = input.value;

        xAxis = Math.random() * (board.offsetWidth - 150);
        yAxis = Math.random() * (board.offsetHeight - 150);
        newNote.style.left = `${xAxis}px`;
        newNote.style.top = `${yAxis}px`;



        newBar.appendChild(btn);
        newNote.appendChild(newBar);
        newNote.appendChild(masage);
        board.appendChild(newNote);

        input.value = '';

        let barArray = [...bars]
        let removeBtnsArray = [...removeBtns]
        barArray.forEach(bar => {
            bar.addEventListener('mousedown', chooseNote);
            bar.addEventListener('mouseup', leavNote);
        });
        removeBtnsArray.forEach(removeBtn => {
            removeBtn.addEventListener('click', removeNote);
        });
    }
}

const removeNote = (e) => {
    e.target.parentNode.parentNode.remove();
}


addNote.addEventListener('submit', addNodeFunc);
document.addEventListener('mousemove', moveNote);