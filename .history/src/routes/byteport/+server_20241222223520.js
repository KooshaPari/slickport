export function GET() {
    let authKey = request.headers.get('Authorization');
    auth(authKey);
    
}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}