import { GetStaticProps } from "next";

export const getStaticProps : GetStaticProps = async (context) =>{
    return {
        props : {
            revalidate : 20000,
            myNumber : 7
        }
    }
}


export default function Dynamic(props){
    return <h1>Dynamic Number - {props.myNumber}</h1>
}