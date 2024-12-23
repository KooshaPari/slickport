import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../lib/data/types';
export function GET({ request }: RequestEvent) {
	const authKey = request.headers.get('Authorization');
	auth(authKey);
 
	return json({} as Project);
}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
