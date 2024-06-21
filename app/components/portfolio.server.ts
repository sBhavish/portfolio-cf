import PocketBase from 'pocketbase';
import nodemailer from 'nodemailer';



export async function sendEmail(from:string, pass:string, to:string, subject:string, text : string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: from,
            pass: pass
        }
    });
   
    const mailOptions = {
        from: from,
        to,
        subject,
        text
    };
        await transporter.sendMail(mailOptions);
}
const pb = new PocketBase(process.env.POCKETBASE_BASE_URL);
export default pb;

export const auth = async()=>{
    let authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL as string, process.env.POCKETBASE_PASS as string);
    return authData;
}
