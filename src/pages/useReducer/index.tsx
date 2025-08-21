import { Box, Container, Typography } from '@mui/material';
import { useReducer } from 'react';
import Button from '../../components/ui/Button';
import { Item, ItemCard } from '../../components/ItemCard';
import { ListItems } from './styles';

const initialState = { tasks: [] as Item[], tasksCompleted: 0 };

interface Action {
    type: 'add-task' | 'remove-task' | 'completed-task';
    payload: Item;
}

const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case 'add-task':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'remove-task':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            };
        case 'completed-task':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                ),
                tasksCompleted: state.tasksCompleted + (action.payload.completed ? -1 : 1)
            };
        default:
            return state;
    }
};

export const PageUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                Tasks: {state.tasks.length}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                Completed: {state.tasksCompleted}
            </Typography>

            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button
                    onClick={() =>
                        dispatch({
                            type: 'add-task',
                            payload: {
                                id: Date.now().toString(),
                                title: `Task ${state.tasks.length + 1}`,
                                body: `This is task number ${state.tasks.length + 1}`
                            }
                        })
                    }
                >
                    Add Task
                </Button>
                <Button
                    onClick={() =>
                        dispatch({
                            type: 'remove-task',
                            payload: state.tasks[state.tasks.length - 1]
                        })
                    }
                >
                    Remove Last Task
                </Button>
            </Box>

            <ListItems>
                {state.tasks.map((task) => (
                    <ItemCard
                        key={task.id}
                        item={task}
                        onClick={() => dispatch({ type: 'completed-task', payload: task })}
                    />
                ))}
            </ListItems>
        </Container>
    );
};
