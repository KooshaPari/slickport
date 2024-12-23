export function GET() {}

export function POST() { }

function auth(authKey: string) {
    if (authKey !== '1234') {
        throw new Error('Unauthorized');
    }
}