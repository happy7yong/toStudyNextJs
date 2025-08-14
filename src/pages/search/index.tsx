import {useRouter} from "next/router";
import {ReactNode} from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import fetchBook from "@/lib/fetch-book";

export const getServerSideProps = async(context : GetServerSidePropsContext)=>{

    const q = context.query.q
    const books = await fetchBook(q as string)

    return{
        props:{
            books
        },
    }
}

export default function Page({books}:InferGetServerSidePropsType<typeof getServerSideProps>){
    return <div>
        {books.map((book)=>(
            <BookItem key={book.id} {...book}/>
        ))}
    </div>
}

Page.getLayout = (page:ReactNode)=>{
    return <SearchableLayout>{page}</SearchableLayout>
}