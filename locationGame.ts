interface Position1 {
	x:number,
	y:number,
}

const position1: Position1 = {
	x: 0,
	y: 0,
}

type Mode = 'up' | 'down' | 'left' | 'right';

function move(mode: Mode) {
	switch (mode) {
		case 'up':
			position1.y += 1;
			break;
		case 'down':
			position1.y -= 1;
			break;
		case 'left':
			position1.x -= 1;
			break;
		case 'right':
			position1.x += 1;
			break;
	
		default:
			break;
	}
}

console.log(position1);
move('up');
console.log(position1);
move('down');
console.log(position1);
move('left');
console.log(position1);
move('right');
console.log(position1);