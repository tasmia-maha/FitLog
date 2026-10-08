"use client"
import { useEffect, useState } from "react"
import WorkoutCard from "./WorkOutCards"
type Workout={
    id:number,
    name:string,
    image:string,
    equipment:string,
    muscleGroups:string[],
    duration:number,
    caloriesBurned:number,
    rating:number
}
export default function WorkoutLibrary(){
    const [workouts, setWorkouts]=useState<Workout[]>([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            try{
                const response=await fetch("https://api.api-store.workers.dev/api/fitlog")
                const data= await response.json()
                setWorkouts(data)
            }catch(error){
                console.error("Failed to fetch workouts",error)
            }finally{
                setLoading(false)
            }
        }
        fetchWorkouts()
    },[])
    return(
        <section id="library" className=" px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <h2 className="font-oswald font-bold tracking-tight text-2xl">THE LIBRARY</h2>
                    <p>Twelve lifts covering every major muscle group.</p>
                </div>
                {loading ? (
                    <div className="flex min-h-75 items-center justify-center">
                        <p>Loading Workouts...</p>
                    </div>
                ):(
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout)=>(
                            <WorkoutCard 
                            key={workout.id}
                            id={workout.id}
                            name={workout.name}
                            categories={workout.muscleGroups}
                            equipment={workout.equipment}
                            duration={workout.duration}
                            calories={workout.caloriesBurned}
                            rating={workout.rating}
                            image={workout.image} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}