import {useAppSelector} from '@/common/hooks/useAppSelector.ts'
import {TodolistItem} from '@/features/todolists/ui/Todolists/TodolistItem/TodolistItem.tsx'
import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper'
import {selectTodolists} from "@/features/todolists/model/todolist-selectors.ts";

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists)

  return (
      <>
        {todolists.map(todolist => (
            <Grid key={todolist.id}>
              <Paper sx={{p: '0 20px 20px 20px'}}>
                <TodolistItem todolist={todolist}/>
              </Paper>
            </Grid>
        ))}
      </>
  )
}