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
    */
    return {
        id: '1',
        name: 'Byteport',
        links: [
            {
                name: 'GitHub',
                url: ''
}

export function POST() {}

function auth(authKey) {
	if (authKey !== 'ILOVEKUSHPAPI') {
		throw new Error('Unauthorized');
	} else {
		return;
	}
}
