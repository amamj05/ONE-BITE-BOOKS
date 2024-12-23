import SearchableLayout from "@/components/searchable-layout"
import { ReactNode } from "react"
import { useRouter } from "next/router";
import books from '@/mock/books.json'
import BookItem from '@/components/book-item';

export default function Page() {
    const router = useRouter();
    const { q } = router.query;
    return (
        <div>
            {books.map((book)=><BookItem key={book.id}{...book}/>)}
        </div>
    )
}


Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}