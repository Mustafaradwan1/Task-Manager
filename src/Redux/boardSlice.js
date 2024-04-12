import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Data.json"
const initialState = {
    DadaBoards : Data.boards,
    headerName : "Platform Launch"
}
const boardSlice = createSlice({
    name:"boards",
    initialState,
    reducers:{
        changeHeaderName : (state,action)=>{
            state.headerName = action.payload;
            state.DadaBoards.map((ele) =>{
                if(ele.name === state.headerName){
                    ele.isActive = true
                }else{
                    ele.isActive = false
                }
                return ele
            })
        },
        AddToData:(state,action)=>{
            const isActive = state.DadaBoards.length > 0 ? false : true;
            const board = {
                name:action.payload.name,
                isActive,
                columns: [],
            }
            board.columns = action.payload.newInput
            state.DadaBoards.push(board)
        },
        AddTask : (state,action)=>{
            const { title,description,subtasks,states, newNum } = action.payload
            const task = { title, description, subtasks, states };
            const board = state.DadaBoards.find((board) => board.isActive);
            const column = board.columns.find((col, index) => index === newNum);
            column.tasks.push(task);
        },
        dragTask: (state, action) => {
            const { Ind, Colind, text } = action.payload;
            const board = state.DadaBoards.find((board) => board.isActive);
            const prevCol = board.columns.find((col, i) => i === Colind);
            const task = prevCol.tasks.splice(text, 1)[0];
            board.columns.find((col, i) => i === Ind).tasks.push(task);
          },
    }
})
export const getData = (state)=> state.boards.DadaBoards
export const changeName = (state)=> state.boards.headerName
export const {changeHeaderName,AddToData,AddTask,dragTask} = boardSlice.actions
export default boardSlice.reducer