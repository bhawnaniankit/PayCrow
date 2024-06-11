import { z } from "zod";

export const siginSchema=z.object({
    csrfToken:z.string(),
    phone:z.string().length(10),
    password:z.string()
})

export type siginType=z.infer<typeof siginSchema>