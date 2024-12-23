import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../../lib/data/types';
import { db } from '$lib/db/db.server';
import { table } from '$lib/db/schema';

// Helper function to add CORS headers
function addCorsHeaders(response: Response, origin: string) {
	response.headers.set('Access-Control-Allow-Origin', origin);
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	response.headers.set('Access-Control-Allow-Credentials', 'true');
	return response;
}

// Handle OPTIONS preflight requests
export function OPTIONS({ request }: RequestEvent) {
	const origin = request.headers.get('origin') ?? 'http://localhost:5173';
	return addCorsHeaders(new Response(null, { status: 204 }), origin);
}

export async function GET({ request }: RequestEvent) {
	const origin = request.headers.get('origin') ?? 'http://localhost:5173';
	const authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';

	try {
		//auth(authKey);
	} catch (e) {
		return addCorsHeaders(json({ e }), origin);
	}

	return addCorsHeaders(json((await pullFirstDatabase()) as unknown as Project), origin);
}

async function pullFirstDatabase() {
	// postgres drizzle orm
	const [firstProject] = await db.select().table.limit(1).execute();
	return firstProject;
}
function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	}
}
