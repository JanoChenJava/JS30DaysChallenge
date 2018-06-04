const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);

fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);

  empty.addEventListener('dragenter', dragEnter);

  empty.addEventListener('dragleave', dragLeave);
  
  empty.addEventListener('drop', dragDrop);
  
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  console.log('dragStart')
}

function dragEnd() {
  this.className = 'fill';
  console.log('dragsend')

}

function dragOver(e) {
  e.preventDefault();
  console.log('dragsOver')
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
  console.log('dragEnter')
}

function dragLeave() {
  this.className = 'empty';
  console.log('dragLeave')
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  console.log('dragDrop')
}
