import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../lib/data/types';
let authKey: string = '1';
export function GET({ request }: RequestEvent) {
	authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
    try { auth(authKey); }
    catch(e) { return json({} as Project); }

	return json({} as Project);
}
func pushToDatabase(project: Project) {
    // push to database
}

export function POST({ request }: RequestEvent) {
    authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
    try {
        auth(authKey); 
        const project = await request.json();
        pushToDatabase(project);
        return json("Success");
    }
    // post to database

    catch(e) { return json({} as Project); }
    

}

function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
