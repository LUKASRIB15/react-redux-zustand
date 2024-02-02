import { describe, expect, it } from "vitest";
import { useStore } from ".";

describe("Zustand Store", ()=>{
  it("should be able to play", ()=>{
    const {play} = useStore.getState()

    play([1,2])

    const {currentLessonIndex, currentModuleIndex} = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })
})