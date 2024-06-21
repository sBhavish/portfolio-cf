

export default function Skeleton({count} : {count:number}) {
    const divArray = Array(count).fill(0);
    return (
        <>
            <div className="flex flex-wrap gap-6 items-center justify-center my-16 max-w-6xl mx-auto">
                {divArray.map((_, index) => (
                    <div key={index} className="flex w-40 aspect-square bg-gray-300 animate-pulse" />
                ))}
            </div>
        </>
    );
}