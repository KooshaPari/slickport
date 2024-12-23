export function GET() {
	let authKey = request.headers.get('Authorization');
	auth(authKey);
	// return template data object (project)
	/*
    export interface Project<S extends string = string> extends Item<S> {
        links: Array<Link>;
        color: Color;
        period: {
            from: Date;
            to?: Date;
        };
        type: string;
        skills: Array<Skill<S>>;
    }
    export interface Item<S extends string = string> {
        slug: S;
        name: string;
        logo: Asset;
        shortDescription: string;
        description: string;
        screenshots?: Array<Screenshot>;
    }
    
    export interface Link {
        to: string;
        label: string;
        newTab?: boolean;
    }
    
    export interface IconLink extends Link {
        icon: Asset;
    }
    
    export interface SkillCategory<S extends string = string> {
        slug: S;
        name: string;
    }
    
    export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
        color: string;
        category?: SkillCategory;
    }
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
    */
	return {
		links: [
			{
				to: 'https://byteport.io',
				label: 'Byteport',
				newTab: true
			}
		],
		color: 'blue',
		period: {
			from: new Date('2020-01-01')
		},
		type: 'project',
		skills: [
			{
				slug: '',
				name: '',
				logo: {
					url: '',
					alt: 'React logo'
				},
				description: 'A JavaScript library for building user interfaces'
			}
		]
	};
}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
