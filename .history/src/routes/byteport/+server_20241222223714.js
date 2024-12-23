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
        id: '1',
        name: 'Byteport',
        links: [
            {
                name: 'GitHub',
                url: '',
            },

}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
