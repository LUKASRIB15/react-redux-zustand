import {  MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { loadCourse } from "../store/slices/player";
import { useStore } from "../zustand-store";

export function Player(){
  //const modules = useAppSelector(state=>state.player.course?.modules)
  //const dispatch = useAppDispatch()
  const {load, course} = useStore()


  useEffect(()=>{
    //dispatch(loadCourse())
    load()
  },[])

  return (
    <div className="bg-zinc-950 text-zinc-50 h-screen flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header/>
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4"/>
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video/>
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            { course?.modules ? course?.modules.map(((module, index)=>{
              return <Module
                      key={module.id} 
                      indexOfModule={index} 
                      title={module.title} 
                      amountOfLessons={module.lessons.length}
                    />
            }))
            :
            <>
              <div className="w-full flex bg-zinc-800 gap-3 p-4 animate-pulse justify-center items-center">
              <div className="h-10 w-10 flex-2 rounded-full bg-zinc-700"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full  bg-zinc-700"></div>
                <div className="h-3 w-16 bg-zinc-700"></div>
              </div>
              </div>
              <div className="w-full flex bg-zinc-800 gap-3 p-4 animate-pulse justify-center items-center">
              <div className="h-10 w-10 flex-2 rounded-full bg-zinc-700"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full  bg-zinc-700"></div>
                <div className="h-3 w-16 bg-zinc-700"></div>
              </div>
            </div>
          </>
          }
            
          </aside>
        </main>
      </div>
    </div>
  )
}