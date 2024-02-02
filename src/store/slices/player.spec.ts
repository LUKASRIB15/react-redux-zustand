import { describe, expect, it } from "vitest";
import {playerSlice, player as reducer, play, next} from "../slices/player"

const initialState = playerSlice.getInitialState()
describe("player slice", ()=>{
  it("should be able to play", ()=>{
    const state = reducer(initialState, play([1,2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it("should be able to play next video automatically", ()=>{
    const state = reducer(initialState, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it("should be able to jump to the next module automatically", ()=>{
    const state = reducer({
      ...initialState,
      currentModuleIndex: 0,
      currentLessonIndex: initialState.course!.modules[0].lessons.length - 1
    }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })
})