import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../lib/data/types';
import { db } from '$lib/db/db.server';
import { myTable } from '$lib/db/schema';

let authKey: string = '1';
export function GET({ request }: RequestEvent) {
	authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
	try {
		//auth(authKey);
	} catch (e) {
		return json({ e });
	}
	// proj obj with eveyr field empty
	return json({
		name: '',
		slug: '',
		logo: { light: '', dark: '' },
		shortDescription: '',
		description: '',
		screenshots: [],
		links: [],
		color: 'primary',
		period: { from: new Date(), to: new Date() },
		type: '',
		skills: [],
		company: '',
		location: '',
		contract: '',
		organization: '',
		category: { slug: '', name: '' }
	} as Project);
}
function pushToDatabase(project: Project) {
	// push to database
	db.insert(myTable).values(project).execute();
}

export async function POST({ request }: RequestEvent) {
	authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
	try {
		//auth(authKey);
		const project = await request.json();
		pushToDatabase(project);
		return json('Success');
	} catch (e) {
		// post to database

		return json({ e });
	}
}

function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
