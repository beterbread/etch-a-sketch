const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.style.display = 'flex';
  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    let size = 400 / 16;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    row.appendChild(div);
  }
  container.appendChild(row);
}

const boxes = document.querySelectorAll('div');
boxes.forEach((box) => {
  box.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    box.style.backgroundColor = 'black'; 
  });
});
