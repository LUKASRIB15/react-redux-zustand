import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from "../store"
import { next } from "../store/slices/player"
import { Loader } from "lucide-react"
import { useStore } from "../zustand-store"

export function Video(){
  //const dispatch = useAppDispatch()

  // const lesson = useAppSelector(state=>{
  //   const {currentLessonIndex, currentModuleIndex} = state.player

  //   const currentLesson = state.player.course?.modules[currentModuleIndex].lessons[currentLessonIndex]

  //   return currentLesson
  // })

  // const {isLoading} = useAppSelector(state=>state.player)
  const lesson = useStore(state=>{
    const {currentLessonIndex, currentModuleIndex} = state
    const currentLesson = state.course?.modules[currentModuleIndex].lessons[currentLessonIndex]
    return currentLesson
  })
  const {isLoading, next} = useStore(store=>{
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {  isLoading ?
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin"/>
        </div>
      :
      <ReactPlayer 
        width="100%"
        height="100%"
        playing
        onEnded={()=>{
          //dispatch(next())
          next()
        }}
        controls
        url={`https://www.youtube.com/watch?v=${lesson?.id}`}
      />
      }
    </div>
  )
}