import {withAuth} from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn:"/auth/SignIn",
    }
})


export const config = {
    matcher:["/admin/:path*"]
}