interface LoadingState {
	state: 'loading';
}

interface SeccessState {
	state: 'success';
	response: {
		body: string;
	};
}

interface FailState {
	state: 'fail';
	reason: string;
}


type LoginState = LoadingState | SeccessState | FailState;

function printLoginState(login: LoginState): string {
	switch (login.state) {
		case 'loading':
			return "🐱‍👤 Loading...";
			break;
		case 'success':
			return "🤑 Seccess... | " + login.response.body;
			break;
		case 'fail':
			return "🤬 Fail... | " + login.reason;
			break;
	
		default:
			throw new Error('State is not found');
			break;
	}
}


const re1 = printLoginState({state: 'loading'});
const re2 = printLoginState({state: 'success', response: {body: 'Hello'}});
const re3 = printLoginState({state: 'fail', reason: '궙궝'});


console.log('re1', re1);
console.log('re2', re2);
console.log('re3', re3);