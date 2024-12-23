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
    */
    return {
        links: [
            {
                to: 'https://byteport.io',
                label: 'Byteport',
                newTab: true,
            },
        ],
        color: 'blue',
        period: {
            from: new Date('2020-01-01'),
        },
        type: 'project',
        skills: [
            {
                slug: '',
                name: '',
                logo: {
                    url: '',
                    alt: 'React logo',
                },
                description: 'A JavaScript library for building user interfaces',
            },
        ],
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
