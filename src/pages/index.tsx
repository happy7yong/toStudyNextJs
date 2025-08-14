//CSS Module
import style from "./index.module.css"
import SearchableLayout from "@/components/searchable-layout";
import {ReactNode, useEffect} from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";
import {InferGetServerSidePropsType} from "next";
import fetchBook from "@/lib/fetch-book";
import fetchRandomBooks from "@/lib/fetch-random-books";
//@ : src폴더를 가리킴

export const getServerSideProps = async () => {
    const [allBooks, recoBooks] = await Promise.all([
        fetchBook(),
        fetchRandomBooks(),
    ])

    return {
        props:{
            allBooks,
            recoBooks,
        },
    }
};

export default function Home({allBooks,recoBooks}:InferGetServerSidePropsType<typeof getServerSideProps>) {

    useEffect(()=>{
    },[])

    return (
    <div className={style.container}>
        <section>
            <h3>지금 추천하는 도서</h3>
            {recoBooks.map((book)=>
                (<BookItem key={book.id}{...book}/>
                    ))}
        </section>
        <section>
            <h3>등록된 모든 도서</h3>
            {allBooks.map((book)=>
                (<BookItem key={book.id}{...book}/>
                ))}
        </section>
    </div>
  );
}

Home.getLayout = (page:ReactNode)=>{
    return <SearchableLayout>{page}</SearchableLayout>
}
