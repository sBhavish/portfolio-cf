import { ActionFunction, HeadersFunction, json, redirect } from "@remix-run/node"
import { useActionData, useFetcher } from "@remix-run/react"
import { CACHE_LIV, blogs } from "~/Constants"
import z from "zod"
import { contactSchema, ContactSchema } from "~/Form Schemas/ContactSchema";
import { useEffect, useRef } from "react";
import { sendEmail } from "~/components/portfolio.server";
import toast, { Toaster } from "react-hot-toast";

export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const meta: MetaFunction = ({ data }) => {
    return [
        { title: 'Contact | Bhavish' },
        {
            name: 'description',
            content: `Contact Bhavish`,
        },
    ]
}
export const action: ActionFunction = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    // await new Promise((r) => setTimeout(r, 10000));
    try {
        const validatedData = contactSchema.parse(formData);
    await sendEmail(process.env.MAIL_USER ?? "", process.env.MAIL_PASS ?? "",process.env.POCKETBASE_EMAIL ?? ``, `Message from Portfolio contact page`, JSON.stringify(validatedData,null,2))
        return redirect('./',{
            status : 201
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = error.flatten();
            return json({ errors: errors.fieldErrors, values: "formData" }, { status: 400 });
        }
        throw error;
    }
};
export default function Contact() {
    const fetcher = useFetcher<{ errors?: Partial<Record<keyof ContactSchema, string[]>>, values?: Partial<ContactSchema> }>()
    useEffect(() => {
    }, [fetcher.data?.errors]);

    let $form = useRef<HTMLFormElement>(null);

    const isNavigating = fetcher.state === "submitting";

    useEffect(
        function resetFormOnSuccess() {
            if (fetcher.state === "idle" && (fetcher.data === "") ) {
                $form.current?.reset();
                toast(`You're request has been received will contact you shortly 😉`,
                    {
                        icon: '👏',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            }
        },
        [fetcher.state, fetcher.data]
    );

    return (
        <main className="py-6 flex flex-col gap-6 font-mono px-4">
            <h1 className="text-4xl text-center h-fit tracking-wide">Contact Me</h1>
            <p className="md:text-center text-pretty max-w-2xl mx-auto">Let's get this conversation started. Tell me a bit about yourself, and I'll get in touch with you as soon as i can.</p>
            <fetcher.Form ref={$form} preventScrollReset className="w-full max-w-lg mx-auto grid" method="post" action="./?index">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name<sup>*</sup>
                        </label>
                        <input className={`appearance-none capitalize block w-full bg-gray-200 border-dashed text-gray-700 border ${(fetcher.data?.errors?.name) ? "border-red-500" : "border-gray-500" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} minLength={2} maxLength={50} id="name" name="name" type="text" required placeholder="Jon Doe"/>
                        {fetcher.data?.errors?.name?.map((item, index) => {
                            return (
                                <p className="text-red-500 text-xs italic" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            E-mail<sup>*</sup>
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 border-dashed text-gray-700 border ${(fetcher.data?.errors?.email) ? "border-red-500" : "border-gray-500" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} minLength={3} id="email" name="email" type="email" required placeholder="jon@hotmail.com" />
                        {fetcher.data?.errors?.email?.map((item, index) => {
                            return (
                                <p className="text-red-500 text-xs italic" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 border-dashed text-gray-700 border ${(fetcher.data?.errors?.phone) ? "border-red-500" : "border-gray-500" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} minLength={10} maxLength={15} id="phone" name="phone" type="text" placeholder="+1 9000000009" />
                        {fetcher.data?.errors?.phone?.map((item, index) => {
                            return (
                                <p className="text-red-500 text-xs italic" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" name="message" className={`appearance-none block w-full h-20 bg-gray-200 text-gray-700 border ${(fetcher.data?.errors?.phone) ? "border-red-500" : "border-gray-500" }  border-dashed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none`} />
                            {/* <p className="text-gray-600 text-xs italic">Please leave me a message</p> */}
                        {fetcher.data?.errors?.message?.map((item, index) => {
                            return (
                                <p className="text-red-500 text-xs italic" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="flex -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <button disabled={isNavigating} type="reset" className="flex p-2 mx-auto items-center gap-2 border-dotted border-4 bg-gray-200 hover:bg-transparent focus-within:bg-transparent outline-dashed">
                            Clear 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 8 8m0-8-8 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <button disabled={isNavigating} type="submit" className={ `flex p-2 mx-auto items-center gap-2 border-dotted border-4 bg-gray-200 hover:bg-transparent focus-within:bg-transparent outline-dashed ${ (isNavigating) ? 'cursor-not-allowed': 'cursor-pointer' }` }>
                            
                            {
                                (isNavigating) ? 
                                <> 
                                    Submitting
                                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" width="24" height="24" viewBox="0 0 52 52" xmlSpace="preserve"><path d="M16 27.5v-3c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5m1.9 4.5c-.6-.6-1.5-.6-2.1 0L8 39.8c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l7.8-7.8c.6-.6.6-1.5 0-2.1zm16.2-12c.6.6 1.5.6 2.1 0l7.8-7.8c.6-.6.6-1.5 0-2.1L41.9 8c-.6-.6-1.5-.6-2.1 0L32 15.7c-.6.6-.6 1.5 0 2.1zM12.2 8c-.6-.6-1.5-.6-2.1 0L8 10.1c-.6.6-.6 1.5 0 2.1l7.8 7.8c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1zm24.1 24c-.6-.6-1.5-.6-2.1 0L32 34.1c-.6.6-.6 1.5 0 2.1l7.8 7.8c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1zm-8.8 4h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5m21-13h-11c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m-21-21h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5" /></svg>
                                </>
                                    
                                :
                                <>
                                    Submit
                                        <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.5 7 10l4-5" stroke="#000" /></svg>
                                </>
                                   
                            }
                            
                        </button>
                    </div>
                </div>
            </fetcher.Form>
            <Toaster
                position="bottom-center"
                reverseOrder={false} 
            />
        </main>
    )
}