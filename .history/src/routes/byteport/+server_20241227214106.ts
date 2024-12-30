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

	try {
		//auth(authKey);
	} catch (e) {
		return addCorsHeaders(json({ 'ERR:': e }), origin);
	}
	const sampleProject = {
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [
			{
				to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte',
				label: 'GitHub'
			}
		],
		logo: {
			light: '/logos/svelte.svg',
			dark: '/logos/svelte.svg'
		},
		name: 'Slick Portfolio',
		period: {
			from: '2024-12-24T00:50:16.399Z'
		},
		skills: [
			{
				slug: 'ts',
				color: 'blue',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
				logo: {
					light: '/logos/ts.png',
					dark: '/logos/ts.png'
				},
				name: 'Typescript',
				category: {
					name: 'Programming Languages',
					slug: 'pro-lang'
				}
			},
			{
				slug: 'sass',
				color: 'pink',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
				logo: {
					light: '/logos/sass.png',
					dark: '/logos/sass.png'
				},
				name: 'Sass',
				category: {
					name: 'Markup & Style',
					slug: 'markup-style'
				}
			},
			{
				slug: 'svelte',
				color: 'orange',
				description:
					'# Svelte\r\n\r\n---\r\n\r\n[`Svelte`](https://svelte.dev/) is a free and open-source front end component framework...',
				logo: {
					light: '/logos/svelte.svg',
					dark: '/logos/svelte.svg'
				},
				name: 'Svelte',
				category: {
					name: 'Libraries',
					slug: 'library'
				}
			}
		],
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	};
	return addCorsHeaders(
		json({
			...sampleProject,
			template: {
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
			} as unknown as Project
		} as unknown as Project),
		origin
	);
}

function pushToDatabase(project: Project) {
	console.log('Project: ');
	for (const link of project.links) {
		if (link.to && !link.to.startsWith('http')) {
			link.to = `http://${link.to}`;
		}
	}
	console.log('Pushing to database: ', project);
	db.insert(table)
		.values({
			name: project.name,
			slug: project.slug,
			logo: JSON.stringify(project.logo),
			shortDescription: project.shortDescription,
			description: project.description,
			screenshots: JSON.stringify(project.screenshots),
			links: JSON.stringify(project.links),
			color: project.color,
			period: JSON.stringify(project.period),
			type: project.type,
			skills: JSON.stringify(project.skills)
		})
		.execute();
	// validate by sleecting and printng
	db.select()
		.from(table)
		.execute()
		.then((res) => console.log('DB: ', res));
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

	//const authKey = request.headers.get('Authorization') ?? 'UNAUTHORIZED';

	//auth(authKey);
	const project = await request.json();
	console.log('Project: ');
	pushToDatabase(project);
	console.log('Pushed to database');
	return addCorsHeaders(json('Success'), origin);
}

function auth(authKey: string) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	}
}
