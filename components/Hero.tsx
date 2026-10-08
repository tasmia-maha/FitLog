import Image from "next/image"
export default function Hero(){
    return(
        <section className="px-5 py-10 text-white">
            <div className="mx-auto flex min-h-100 max-w-7xl flex-col items-center justify-between rounded-2xl border border-zinc-800 bg-[#111318] lg:flex-row px-5 py-9 lg:px-10">
                <div className="z-10 max-w-2xl">
                    <p className="text-[#C2F800] mb-5 text-sm font-bold tracking-[0.2em]">WORKOUT LIBRARY</p>
                    <h1 className="text-4xl font-oswald font-bold tracking-tight sm:text-5xl">TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                    <p className="mt-5 max-w-xl text-gray-400 mb-5">FitLog is a dark, no-nonsense gym companion: pick a lift,lock it <br />into today&apos;s plan, and watch the week&apos;s work add up. </p>
                    <a href="#library" className="rounded-md px-5 py-3 text-sm font-black transition hover:scale-105 bg-[#C2F800] text-black ">BROWSE WORKOUTS</a>
                </div>
                <div>
                    <Image src="/assets/banner.png" alt="workout" width={400} height={400} className="object-contain"/>
                </div>
            </div>
        </section>
    )
}