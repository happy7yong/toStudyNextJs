import {useRouter} from "next/router";

export default function Page(){

    const router = useRouter();//라우터 객체가 저장됨.
    const {q} = router.query;
    console.log(q)
    return <>
        <h1>setting</h1>
    </>
}