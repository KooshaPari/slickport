export function GET() {}

export function POST() { }

function auth(authKey: string) {
    if (authKey !== 'ILOVEKUSHPAPI') {
        throw new Error('Unauthorized');
    }
}