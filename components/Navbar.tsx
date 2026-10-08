import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav className="border-b border-zinc-800 bg-black px-5 py-5">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="font-semibold text-white text-xl tracking-tight flex items-center"> <Image src="/assets/logo.png" alt="logo" width={30} height={5} priority/> FITLOG</Link>

                <div className="text-gray-400 flex items-center gap-5">
                    <Link href="/" className="hover:text-gray-200">Workout</Link>
                    <Link href="/my-plan" className="hover:text-gray-200">My Plan</Link>
                </div>

                <div className="text-gray-400 flex items-center gap-5">
                    <Link href="/my-plan" className="hover:text-gray-200">plan 0</Link>
                    <Link href="/my-plan" className="hover:text-gray-200">Saved 0</Link>
                </div>
            </div>
        </nav>
    )
}