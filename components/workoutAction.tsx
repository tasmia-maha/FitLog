"use client"
import { useState } from "react"
type Workout ={
    id: number
  name: string
  image: string
  muscleGroups: string[]
  equipment: string
  difficulty: string
  duration: number
  caloriesBurned: number
  sets: number
  reps: string
  rating: number
  description: string
  instructions: string[]
}
type WorkoutActionProps={
    workout: Workout
}
export default function WorkoutAction({
    workout,}:WorkoutActionProps){
        const [message,setMessage]=useState("")
        const addToPlan =()=>{
            const savedPlan=localStorage.getItem("fitlog-plan")
            const plan:Workout[]=savedPlan ? JSON.parse(savedPlan):[]
            const alreadyAdded = plan.some((item)=>item.id===workout.id)
            if(alreadyAdded){
                console.log("Plan updated event sent")
                setMessage("Added to today's plan")
                return
            }
            const updatedPlan=[...plan,workout]
            localStorage.setItem("fitlog-plan",JSON.stringify(updatedPlan))
            window.dispatchEvent(new Event("fitlog-updated"))
            
            setMessage("Already in today's plan")
        }
        const savedForLater=()=>{
            const savedWorkouts = localStorage.getItem("fitlog-saved")
            const saved:Workout[]=savedWorkouts ? JSON.parse(savedWorkouts):[]
            const alreadySaved = saved.some((item)=>item.id===workout.id)
            if(alreadySaved){
                setMessage("Already saved")
                return
            }
            const updatedSaved =[...saved,workout]
            localStorage.setItem("fitlog-saved",JSON.stringify(updatedSaved))
            window.dispatchEvent(new Event("fitlog-updated"))
            setMessage("Saved for later")
        }
    return(
        <div>
            <div className="flex mt-5 flex-wrap gap-3">
                <button onClick={addToPlan} className="rounded-md px-5 py-3 text-sm bg-[#CCFF00] font-bold text-black transition hover:scale-105">Add today&apos;s plan</button>
                <button onClick={savedForLater} className="rounded-md px-5 py-3 text-sm border border-zinc-800 font-bold text-white transition hover:scale-105">Save for later</button>
            </div>
            {message && (
                <p className="mt-3 text-sm text-[#CCFF00]">{message}</p>
            )}
        </div>
    )
}

