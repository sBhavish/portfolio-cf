import { z } from "zod";
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const contactSchema = z.object({
    name: z.string()
        .min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number length should be atleast 10").regex(phoneRegex, 'Invalid Number!'),
    message: z.string().optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;