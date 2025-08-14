import {BookData} from "@/types";
//promise : 비동기
export default async function fetchBook(q?:string) : Promise<BookData[]>{
    let url = `http://localhost:12345/book`

    if(q){
        url += `/search?q=${q}`
    }

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error()
        }
        return await response.json()
    } catch (err){
        console.error(err);
        return [];
    }
}