import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {createTaskAC} from '@/model/tasks-reducer'
import type {Todolist} from './app/App'
import {CreateItemForm} from './CreateItemForm'
import {TodolistTitle} from "@/TodolistTitle.tsx";
import {Tasks} from "@/Tasks.tsx";
import {FilterButton} from "@/FilterButton.tsx";

type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
    const dispatch = useAppDispatch()

    const createTaskHandler = (title: string) => {
        dispatch(createTaskAC({todolistId: todolist.id, title}))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTaskHandler}/>
            <Tasks todolist={todolist}/>
            <FilterButton  todolist={todolist}/>
        </div>
    )
}
