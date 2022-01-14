// boj 10828 (88) ('/dev/stdin')
const fs = require('fs');
const input = fs.readFileSync('stack/input', 'utf8').trim().split('\n');
// ! 다른사람 풀이

let stack = [];
let result = '';
for (let i = 0; i < input.length; i++) {
	let arr = input[i].split(' ');
	let len = stack.length;
	if (arr[0] === 'push') stack.push(arr[1]);
	else if (arr[0] === 'pop') result += (len === 0 ? -1 : stack.pop()) + '\n';
	else if (arr[0] === 'size') result += len + '\n';
	else if (arr[0] === 'empty') result += (len === 0 ? 1 : 0) + '\n';
	else if (arr[0] === 'top') result += (len === 0 ? -1 : stack[len - 1]) + '\n';
}
console.log(result);

// ! 내 풀이 = 시간초과
/*
const N = Number(input.shift());
const splited = input.map((el) => el.split(' '));

// push X: X를 스택에 넣음
// pop: 맨위 정수를 빼고 없으면 -1
// size: 스택에 들어있는 갯수
// empty: 스택이 비었으면 1, 아니면 0
// top: 스택의 가장 위에 있는 정수 출력, 없으면 -1

let Stack = [];

function pushStack(num) {
	Stack.push(num);
}

function popStack() {
	if (Stack.length === 0) {
		console.log(-1);
	} else {
		console.log(Number(Stack.pop()));
	}
}

function sizeStack() {
	console.log(Number(Stack.length));
}

function emptyStack() {
	if (Stack.length === 0) {
		console.log(1);
	} else {
		console.log(0);
	}
}

function topStack() {
	if (Stack.length === 0) {
		console.log(-1);
	} else {
		console.log(Number(Stack[Stack.length - 1]));
	}
}

function execution(command, num) {
	for (let i = 0; i < splited.length; i++) {
		if (splited[i][0] === 'push' && splited[i][1]) {
			pushStack(splited[i][1]);
		} else if (splited[i][0] === 'pop') {
			popStack(splited[i[1]]);
		} else if (splited[i][0] === 'size') {
			sizeStack();
		} else if (splited[i][0] === 'empty') {
			emptyStack();
		} else if (splited[i][0] === 'top') {
			topStack();
		}
	}
}

execution(splited);
*/
