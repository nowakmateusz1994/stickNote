const board = document.querySelector('.board');
const note = document.querySelector('.note');
const bar = document.querySelector('.bar');
const addNote = document.querySelector('form');

let active = false;


let xAxis = 150;
let yAxis = 150;

note.style.left = `${xAxis}px`;
note.style.top = `${yAxis}px`;

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
        note.style.left = `${xAxis}px`;
        note.style.top = `${yAxis}px`;
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
        const masage = document.createElement('div');
        masage.classList.add('masage');
        masage.textContent = input.value;

        newNote.style.left = `${300}px`;
        newNote.style.top = `${300}px`;

        newBar.appendChild(btn);
        newNote.appendChild(newBar);
        newNote.appendChild(masage);
        board.appendChild(note);

        input.value = '';
    }
}

bar.addEventListener('mousedown', chooseNote);
note.addEventListener('mousemove', moveNote);
bar.addEventListener('mouseup', leavNote);
addNote.addEventListener('submit', addNodeFunc);