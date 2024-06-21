import errImage from "app/images/svg/err.svg";
export default function ErrorIllustrator( { message }: { message:string }) {
   
    return (
        <>
            <div className="border-dashed flex flex-col gap-6 border-red-500 h-fit border-2 bg-red-100 py-6">
                <h3 className="capitalize text-xl text-red-600 text-center font-mono">{ message }</h3>
                <img draggable={false} src={errImage} className="h-40 w-fit mx-auto object-contain" alt="Something went wrong" />
            </div>
        </>
    );
}