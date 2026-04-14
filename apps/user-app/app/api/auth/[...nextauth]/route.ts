import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"

const handler = NextAuth(authOptions)

//this is a important 
export { handler as GET, handler as POST }