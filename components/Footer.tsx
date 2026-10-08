import Image from "next/image"
export default function Footer(){
    return(
        <footer className="w-full border-t border-zinc-900 px-5 py-4 bg-black">
            <div className="max-w-7xl mx-auto items-center justify-between">
                <div className="font-semibold text-white text-xl tracking-tight flex items-center"> <Image src="/assets/logo.png" alt="logo" width={30} height={5} priority/> FITLOG</div>
                <div className="text-right text-sm text-zinc-500">
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    )
}