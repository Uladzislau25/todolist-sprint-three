import List from "@mui/material/List";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "@/model/tasks-reducer.ts";
import type {ChangeEvent} from "react";
import ListItem from "@mui/material/ListItem";
import {getListItemSx} from "@/TodolistItem.styles.ts";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "@/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTasks} from "@/model/tasks-selectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import type {Todolist} from "@/app/App.tsx";

type Props = {
    todolist: Todolist
}
export const Tasks = ({todolist}: Props) => {
    const {id, filter} = todolist;
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(selectTasks)
    const todolistTasks = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }
    return (
        <>
            {filteredTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map(task => {
                        const deleteTaskHandler = () => {
                            dispatch(deleteTaskAC({todolistId: id, taskId: task.id}))
                        }

                        const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            const newStatusValue = e.currentTarget.checked
                            dispatch(changeTaskStatusAC({todolistId: id, taskId: task.id, isDone: newStatusValue}))
                        }

                        const changeTaskTitleHandler = (title: string) => {
                            dispatch(changeTaskTitleAC({todolistId: id, taskId: task.id, title}))
                        }

                        return (
                            <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
                                <div>
                                    <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                                    <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
                                </div>
                                <IconButton onClick={deleteTaskHandler}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        )
                    })}
                </List>
            )}
        </>
    );
};
