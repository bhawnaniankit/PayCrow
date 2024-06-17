import { number, z } from "zod";

export const siginSchema=z.object({
    phone:z.string().length(10,{
        message:"Invalid Number"
    }),
    password:z.string()
})

export type siginType=z.infer<typeof siginSchema>

export const signUpSchema = z.object({
    name:z.string().trim(),
    email:z.string().trim().email(),
    number:z.string().trim().length(10),
    password:z.string().trim().min(8,{message:"Password must atleast 8 character"})
})

export type signUpType=z.infer<typeof signUpSchema>