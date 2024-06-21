export default function Button({active,text}:{active:boolean, text:string}) {
    return (
        <>
            <button className={`rounded-md px-2 py-1 text-sm ${(active) ? 'active' : ''}` }>
                {text}
            </button>
        </>
    );
}