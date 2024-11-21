import SearchableLayout from "@/components/searchable-layout"
import { ReactNode } from "react"
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { q } = router.query;
    return (
        <div>

        </div>
    )
}


Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}