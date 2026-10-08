import WorkoutAction from "@/components/workoutAction"
type Workout ={
    id : number
    name : string 
    image : string
    muscleGroups : string[] 
    equipment : string
    difficulty : string
    duration : number
    caloriesBurned : number
    sets : number
    reps : string
    rating : number
    description : string
    instructions : string[]
}
async function getWork(id:string):Promise<Workout> {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch workout")
    }
    return response.json()
}
export default async function WorkoutDetails({params,}:
    {
        params:Promise<{id:string}>
    }
) { 
    const {id}=await params
    const workout=await getWork(id)
    return(
        <main className="min-h-screen bg-[#090a0c] px-6 py-12 text-white">
            <div className="mx-auto max-w-7xl">
                {/* Details section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-black">
                        <img src={workout.image} alt={workout.name} className="h-full min-h-75 w-full lg:h-[520px] object-cover"/>
                    </div>
                    <div className="py-2">
                        <h1 className="font-oswald text-5xl font-bold sm:text-6xl">{workout.name}</h1>
                        <p className="mt-3 max-w-2xl text-sm text-zinc-500 leading-6">{workout.description}</p>
                        {/* categories */}
                        <div className="mt-3 flex flex-wrap gap-3">
                            {workout.muscleGroups.map((group)=>(
                                <span key={group} className="rounded-full bg-[#CCFF00] px-3 py-3 text-sm font-bold text-black">{group}</span>
                            ))}
                        </div>
                        <div className="mt-6 overflow-hidden rounded-lg border border-zinc-800 bg-[#1E2330]">
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">EQUIPMENT</span>
                                <span className="text-sm text-white">{workout.equipment}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">DIFFICULTY</span>
                                <span className="text-sm text-white">{workout.difficulty}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">SETS</span>
                                <span className="text-sm text-white">{workout.sets}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">REPS</span>
                                <span className="text-sm text-white">{workout.reps}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">DURATION</span>
                                <span className="text-sm text-white">{workout.duration}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">CALORIES</span>
                                <span className="text-sm text-white">{workout.caloriesBurned}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 px-4 py-3">
                                <span className="text-xs text-zinc-500">RATING</span>
                                <span className="text-sm text-white">{workout.rating}</span>
                            </div>
                        </div>
                        {/* Instructions */}
                        <section className="mt-6 max-w-4xl">
                        <h2 className="font-oswald text-2xl font-bold">INSTRUCTIONS</h2>
                            <ol className="mt-5 space-y-3">
                                {workout.instructions.map((instructions,index)=>(
                                    <li key={index} className="text-sm text-zinc-500">
                                        <span className="mr-2 font-bold leading-6 text-zinc-600">{index+1}</span>
                                        {instructions}
                                    </li>
                                ))}
                            </ol>
                        </section>
                        {/* button */}
                        <div className="mt-5 flex flex-wrap gap-3">
                            <WorkoutAction workout={workout}/>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
    )
    
}
