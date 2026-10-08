import Link from "next/link"
import {Clock, Flame ,Star } from "lucide-react"
type WorkoutCardsProps={
    id:number,
    name: string,
    categories: string[],
    equipment: string,
    duration: number,
    calories: number,
    rating: number,
    image: string;
}
export default function WorkoutCard({
    id,
    name,
    categories,
    equipment,
    duration,
    calories,
    rating,
    image,
}: WorkoutCardsProps){
    return(
        <Link href={`/workout/${id}`} className="block">
            <article className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111318] text-white">
                <div className="h-50 overflow-hidden">
                    <img src={image} alt={name}  className="h-full w-full object-cover"/>
                </div>
                <div className="px-5">
                    <div className="flex flex-wrap gap-2 py-5">
                        {categories.map((category)=>(
                            <span 
                            key={category} className="rounded-full bg-[#C2F800] px-3 py-2 text-xs font-bold text-black">{category}</span>
                        ))}
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{name}</h3>
                    <p className="mt-2 mb-2 text-sm text-zinc-500">{equipment}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-gray-500 px-5 py-5 border-t border-zinc-800 pt-3 text-sm font-semibold">
                    <div className="flex items-center gap-2">
                        <Clock size={18}/>
                        <p>{duration} min</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Flame size={18}/>
                        <p>{calories} kcal</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star size={18}/>
                        <p>{rating}</p>
                    </div>
                </div>
        </article>
        </Link>
    )
}