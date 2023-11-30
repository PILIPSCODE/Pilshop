import {withAuth} from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn:"/user/signin",
    }
})


export const config = {
    matcher:["/admin/:path*"],
    
}