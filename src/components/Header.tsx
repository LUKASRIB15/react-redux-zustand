import { useEffect } from "react"
import { useStore } from "../zustand-store"

export function Header(){
  // const {currentLesson, currentModule} = useAppSelector(state=>{
  //   const {currentLessonIndex, currentModuleIndex} = state.player
  //   const currentModule = state.player.course?.modules[currentModuleIndex]
  //   const currentLesson = currentModule?.lessons[currentLessonIndex]
  
  //   return {currentModule, currentLesson}
  // })
  const {currentLesson, currentModule} = useStore(state=>{
    const {currentLessonIndex, currentModuleIndex} = state
    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return {currentLesson, currentModule}
  })


  useEffect(()=>{
    document.title = `Assistindo: ${currentLesson?.title}`
  }, [currentLesson])

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Modulo "{currentModule?.title}"</span>
    </div>
  )
}