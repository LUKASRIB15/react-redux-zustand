import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import { useStore } from '../zustand-store';

interface ModuleProps{
  indexOfModule: number
  title: string
  amountOfLessons: number
}
export function Module({indexOfModule, title, amountOfLessons}:ModuleProps){
  //const dispatch = useAppDispatch()
  //const {currentLessonIndex, currentModuleIndex} = useAppSelector(state=>state.player)
  //const lessons = useAppSelector(state=>state.player.course?.modules[indexOfModule].lessons)
  const {currentLessonIndex, currentModuleIndex, play, lessons} = useStore(store=>{
    return {
      currentLessonIndex: store.currentLessonIndex,
      currentModuleIndex: store.currentModuleIndex,
      lessons: store.course?.modules[indexOfModule].lessons,
      play: store.play
    }
  })

  return (
    <Collapsible.Root className='group'>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">{indexOfModule + 1}</div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform"/>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons && lessons.map((lesson, lessonIndex)=>{
            const isCurrent = currentModuleIndex === indexOfModule && 
                              currentLessonIndex === lessonIndex
            return <Lesson
                    key={lesson.id} 
                    title={lesson.title} 
                    duration={lesson.duration}
                    onPlay = {()=>{
                      //dispatch(play([indexOfModule, lessonIndex]))
                      play([indexOfModule, lessonIndex])
                    }}
                    isCurrent = {isCurrent}
                  />
          })}
          
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}