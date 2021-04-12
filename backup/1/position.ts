type PositionType = {
  x:number,
  y:number,
}

const position:PositionType = {
  x: 0,
  y: 0,
}

type MoveMode = 'up'|'down'|'left'|'right';
function move(mode:MoveMode):void {
  switch (mode) {
    case 'up':
      position.y++;
      break;
    case 'down':
      position.y--;
      break;
    case 'left':
      position.x--;
      break;
    case 'right':
      position.y++;
      break;
  
    default:
      throw new Error("알 수 없는 mode 입니다.");
      break;
  }
}

console.log('position', position);
move('up');
console.log('position', position);
move('down');
console.log('position', position);