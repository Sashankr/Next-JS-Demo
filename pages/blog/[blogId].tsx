import { useRouter } from "next/router"


export default function IndividualBlog(){
    
    const router = useRouter();
    console.log(router);
    
    
    return (
        <h1>These are individual blogs</h1>
    )
}