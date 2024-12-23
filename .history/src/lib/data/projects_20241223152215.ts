import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const olditems: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Reporsitory' },
			{ to: 'https://svelte.dev/', label: 'Svelte' },
			{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.Unknown,
		name: 'Slick Portfolio With Svelte',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];
// pull new items from self/byteport/client GET, append
const newItems = (await fetch('/byteport/client').then((res) =>
	res.json()
)) as unknown as Array<Project>;
// ensure all stringified json processed
// correct period:
// {"from": "2024-12-23T23:18:37.764Z"}
// incorrect period:
// {"from": "2024-12-23T07:37:02.005Z","to": "2024-12-23T07:37:02.005Z"}
newItems.forEach((item) => {
	if (typeof item.links === 'string') {
		item.links = JSON.parse(item.links);
	}
	if (typeof item.skills === 'string') {
		item.skills = JSON.parse(item.skills);
	}
	if (typeof item.screenshots === 'string') {
		item.screenshots = JSON.parse(item.screenshots);
	}
	if (typeof item.period === 'string') {
		// parse as date
		item.period = JSON.parse(item.period);
		item.period.from = new Date(item.period.from);
		if (item.period.to !== null) { item.period.to = new Date(item.period.to); }
		//item.period = JSON.parse(item.period);
	}
});
const items = [...olditems, ...newItems];

const title = 'Projects';
console.log('Items: ', items);
const ProjectsData = { title, items };

export default ProjectsData;
