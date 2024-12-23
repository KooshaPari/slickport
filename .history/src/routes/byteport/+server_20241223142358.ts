import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Project } from '../../lib/data/types';
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

export function GET({ request }: RequestEvent) {
	const origin = request.headers.get('origin') ?? 'http://localhost:5173';
	const authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';

	try {
		//auth(authKey);
	} catch (e) {
		return addCorsHeaders(json({ e }), origin);
	}

	return addCorsHeaders(
		json({
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
		} as unknown as Project),
		origin
	);
}

function pushToDatabase(project: Project) {
	const dbProject = {
		...project,
		logo: JSON.stringify(project.logo)
	};
	db.insert(table).values({
        dbProject.name, 
        dbProject.slug,
        dbProject.logo,
        dbProject.shortDescription,
        dbProject.description,
        dbProject.screenshots,
        dbProject.links,
        dbProject.color,
        dbProject.period,
        dbProject.type,
        dbProject.skills,
        dbProject.company,
        dbProject.location,
        dbProject.contract,
        dbProject.organization,
        dbProject.
    }).execute();
}

export async function POST({ request }: RequestEvent) {
	const origin = request.headers.get('origin') ?? 'http://localhost:5173';
	const allowedOrigins = [
		'http://localhost:5173',
		'http://localhost:3000',
		'http://*'
		// Add other allowed origins here
	];

	if (!allowedOrigins.includes(origin)) {
		return json({ error: 'Cross-site form submission is not allowed.' }, { status: 403 });
	}

	const authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';
	console.log('AUTH: ', authKey);
	try {
		//auth(authKey);
		const project = await request.json();
		pushToDatabase(project);
		return addCorsHeaders(json('Success'), origin);
	} catch (e) {
		return addCorsHeaders(json({ e }), origin);
	}
}

function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	}
}
