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
    defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
    */
    return {
        
}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
