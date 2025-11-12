import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts'
import {createTaskAC} from '@/features/todolists/model/tasks-reducer.ts'
import type {Todolist} from '../../../../../app/App.tsx'
import {CreateItemForm} from '../../../../../common/components/CreateItemForm/CreateItemForm.tsx'
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle.tsx";
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks.tsx";
import {FilterButton} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButton/FilterButton.tsx";

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
