import type {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export default function MainLayout({children}: Props){
    return (
        <div className="min-h-screen bg-white text-black">
            {children}
        </div>
    )
}