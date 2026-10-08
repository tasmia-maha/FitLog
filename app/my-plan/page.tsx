"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import {Clock, Flame ,Star, X } from "lucide-react"
type Workout={
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
export default function MyPlan() {
  const [plan, setPlan]=useState<Workout[]>([])
  const [completedId,setCompletedId]=useState<number[]>([])
  const [saved,setSaved]=useState<Workout[]>([])
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today")
  useEffect(()=>{
    const savedPlan = localStorage.getItem("fitlog-plan")
    if(savedPlan){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlan(JSON.parse(savedPlan))
    }
    const savedCompletedId=localStorage.getItem("fitlog-completed")
    if(savedCompletedId){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCompletedId(JSON.parse(savedCompletedId))
    }
    const saved=localStorage.getItem("fitlog-saved")
    if(saved){
      setSaved(JSON.parse(saved))
    }
  },[])
  const removeFromPlan=(id:number)=>{
    const updatedPlan=plan.filter((workout)=>workout.id !== id)
    setPlan(updatedPlan)
    localStorage.setItem("fitlog-plan",JSON.stringify(updatedPlan))
    window.dispatchEvent(new Event("fitlog-updated"))
  }
  const renoveFromSaved =(id:number)=>{
    const updatedSaved = saved.filter((workout)=> workout.id!==id)
    setSaved(updatedSaved)
    localStorage.setItem("fitlog-saved",JSON.stringify(updatedSaved))
  }
  const markAsDone=(id:number)=>{
    if(completedId.includes(id)){
      return
    }
    const updatedComplateId =[...completedId,id]
    setCompletedId(updatedComplateId)
    localStorage.setItem("fitlog-completed",JSON.stringify(updatedComplateId))
  }
  const totalMinutes = plan.reduce((total, workout)=> total+ workout.duration,0)
  const totalCalories = plan.reduce((total, workout)=> total+ workout.caloriesBurned,0)
  const activeWorkouts=activeTab==="today" ? plan : saved
  return (
    <main className="min-h-screen bg-[#090a0c] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="mb-10">
          
          <h1 className="text-xl font-bold tracking-tight sm:text-3xl font-oswald">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-5 h-20 items-center grid gap-4 sm:grid-cols-3 rounded-xl border border-zinc-800 bg-[#111318]">
          <div className="px-5">
            <p className="text-zinc-500">Exercise</p>
            <p className="text-[#C2F10D] text-xl font-bold tracking-tight sm:text-3xl font-oswald">{plan.length}</p>
          </div>
          <div className="px-5">
            <p className="text-zinc-500">Minutes</p>
            <p className="text-xl font-bold tracking-tight sm:text-3xl font-oswald">{totalMinutes}</p>
          </div>
          <div className="px-5">
            <p className="text-zinc-500">Calories</p>
            <p className="text-xl font-bold tracking-tight sm:text-3xl font-oswald">{totalCalories}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="rounded-xl items-center flex h-13 px-5 bg-[#111318] p-1 border border-zinc-800">
            <button 
             onClick={()=> setActiveTab("today")}
             className={`text-sm h-10 rounded-lg font-medium px-5 border-zinc-900 ${activeTab==="today" ? "text-white hover:text-white bg-[#2c303b]" : "text-zinc-500"}`}>Today&apos;s Plan</button>
            <button
             onClick={()=> setActiveTab("saved")}
             className={`rounded-lg text-sm px-5 font-medium h-10 transition ${activeTab==="saved" ? "text-white hover:text-white bg-[#2c303b]" : "text-zinc-500"}`}>Saved</button>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm text-zinc-500 font-medium">Sort By</p>
            <button className="rounded-xl h-12 font-medium transition hover:border-zinc-600 px-4 border border-zinc-800 bg-[#111318] text-sm text-white">Duration</button>
          </div>
        </div>

        {/* Empty state */}
        {activeWorkouts.length===0 ?(
           <div className="mt-5 flex flex-col items-center justify-center min-h-70 rounded-xl border border-zinc-800 bg-[#111318] px-5 text-center">
          <h2 className="text-2xl text-white uppercase font-bold tracking-tight font-oswald">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 text-sm text-zinc-500 mb-5">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/" className="rounded-full px-4 py-3 text-black bg-[#C2F10D] font-bold transition hover:scale-105">Go to workouts</Link>
        </div>

        ):(
          <div className="mt-5 space-y-3">
            {activeWorkouts.map((workout)=>(
              <div key={workout.id} className="flex justify-between items-center w-full rounded-lg border border-zinc-800 bg-[#111318] gap-5 mt-3 p-3 mb-3">
                <div className="flex items-center gap-5">
                  <img src={workout.image} alt={workout.name} className="h-32 w-32 rounded-lg object-cover"/>
                  <div>
                    <h2 className="text-xl font-bold py-3 text-white">{workout.name}</h2>
                    <p className="mt-2 text-sm text-zinc-500">{workout.equipment}</p>
                    <div className="mt-2 flex items-center gap-5 text-sm text-zinc-500">
                      <span className="flex gap-2"><Clock size={18}/>{workout.duration} min</span>
                      <span className="flex gap-2"><Flame size={18}/>{workout.caloriesBurned} kcal</span>
                      <span className="flex gap-2"><Star size={18}/>{workout.rating}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/workout/${workout.id}`}
                     className="text-sm text-white rounded-xl px-3 py-2 hover:scale-105 border border-zinc-800 bg-[#111318]">View Details</Link>
                    <button
                     onClick={()=>markAsDone(workout.id)}
                     disabled={completedId.includes(workout.id)}
                     className={`rounded-xl px-3 py-2 text-sm ${completedId.includes(workout.id) ? "bg-zinc-700 text-zinc-400": "bg-[#CCFF00] text-black hover:scale-105"}`}>Mark as Done</button>
                    <button
                     onClick={()=>
                      activeTab==="today" ? removeFromPlan(workout.id) : renoveFromSaved(workout.id)} 
                     className="text-zinc-500 hover:scale-110"><X size={22} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}