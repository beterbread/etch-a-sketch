function clear() {
const boxes = document.querySelectorAll('#container > div');
boxes.forEach((box) => {
  box.style.backgroundColor = 'white';
});
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  
let rainbow = false;
let mouseoverListener;
function createGrid(num) {
const container = document.querySelector('#container');
container.innerHTML = '';
for (let i = 0; i < num; i++) {
  const row = document.createElement('div');
  row.style.display = 'flex';
  for (let j = 0; j < num; j++) {
    const div = document.createElement('div');
    let size = 300 / num;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    row.appendChild(div);
  }
  container.appendChild(row);
}
const boxes = document.querySelectorAll('#container > div');
mouseoverListener = (e) => {
  e.stopPropagation();
  if (rainbow === false) {
    e.target.style.backgroundColor = 'black';
  } 
  else {
    e.target.style.backgroundColor = getRandomColor();
  }
};
boxes.forEach((box) => {
  box.addEventListener('mouseover', mouseoverListener);
});
}

createGrid(16);
  
const slider = document.querySelector('#slider');
slider.addEventListener('input', () => {
  let value = slider.value;
  const size = document.querySelector('p');
  size.textContent = value + " x " + value;
  clear();
  const boxes = document.querySelectorAll('#container > div');
  boxes.forEach((box) => {
    box.removeEventListener('mouseover', mouseoverListener);
  });
  createGrid(value);
});
  
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  clear();
});
  
const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
  rainbow = true;
});

const normalBtn = document.querySelector('#normal');
normalBtn.addEventListener('click', () => {
  rainbow = false;
});  