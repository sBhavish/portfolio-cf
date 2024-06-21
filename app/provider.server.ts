export function getEnv(){
    return {
        BASE_URL: process.env.POCKETBASE_BASE_URL
    }
}
type ENV = ReturnType<typeof getEnv>

declare global{
    var ENV : ENV;
    interface Window{
        ENV: ENV;
    }
}