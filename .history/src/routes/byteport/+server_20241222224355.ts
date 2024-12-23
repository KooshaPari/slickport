import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../lib/data/types';
let authKey: string = '1';
export function GET({ request }: RequestEvent) {
	authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
	auth(authKey);

	return json({} as Project);
}

export function POST() {}

function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
