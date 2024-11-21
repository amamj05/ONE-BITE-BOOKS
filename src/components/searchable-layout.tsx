import { ReactNode } from "react";

export default function SearchableLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}