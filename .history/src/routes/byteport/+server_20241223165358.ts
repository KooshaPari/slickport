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
    const sampleProject = 
    `{
    "slug": "slick-portfolio-svelte",
    "color": "#ff3e00",
    "description": "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    "shortDescription": "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    "links": [
        {
            "to": "https://github.com/RiadhAdrani/slick-portfolio-svelte",
            "label": "GitHub"
        }
    ],
    "logo": {
        "light": "/logos/svelte.svg",
        "dark": "/logos/svelte.svg"
    },
    "name": "Slick Portfolio",
    "period": {
        "from": "2024-12-24T00:50:16.399Z"
    },
    "skills": [
        {
            "slug": "ts",
            "color": "blue",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
            "logo": {
                "light": "/logos/ts.png",
                "dark": "/logos/ts.png"
            },
            "name": "Typescript",
            "category": {
                "name": "Programming Languages",
                "slug": "pro-lang"
            }
        },
        {
            "slug": "sass",
            "color": "pink",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
            "logo": {
                "light": "/logos/sass.png",
                "dark": "/logos/sass.png"
            },
            "name": "Sass",
            "category": {
                "name": "Markup & Style",
                "slug": "markup-style"
            }
        },
        {
            "slug": "svelte",
            "color": "orange",
            "description": "# Svelte\r\n\r\n---\r\n\r\n[`Svelte`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\r\n\r\nThe compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\r\n\r\n<br/>\r\n\r\nSvelte is :\r\n\r\n- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.\r\n- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.\r\n- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.\r\n\r\n<br/>\r\n\r\n## Example\r\n\r\n```ts\r\n<script>\r\n    let count = 1;\r\n    $: doubled = count * 2;\r\n</script>\r\n\r\n<p>{count} * 2 = {doubled}</p>\r\n\r\n<button on:click={() => count = count + 1}>Count</button>\r\n\r\n// comment here\r\n```\r\n\r\n### Heading 3\r\n\r\n#### Heading 4\r\n\r\n##### Heading 5\r\n\r\n###### Heading 6\r\n\r\n> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.\r\n",
            "logo": {
                "light": "/logos/svelte.svg",
                "dark": "/logos/svelte.svg"
            },
            "name": "Svelte",
            "category": {
                "name": "Libraries",
                "slug": "library"
            }
        }
    ],
    "type": "Website Template",
    "screenshots": [
        {
            "label": "screen 1",
            "src": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "label": "2",
            "src": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "label": "3",
            "src": "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "label": "4",
            "src": "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "label": "5",
            "src": "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "label": "6",
            "src": "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ]
}`
	return addCorsHeaders(
		json({
            template: sampleProject
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
