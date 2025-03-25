import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "message/getUsers",
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        users: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        return builder.addCase(getUsers.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }),
        builder.addCase(getUsers.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.users = payload;
        }),
        builder.addCase(getUsers.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        })
    }
})

const {actions, reducer} = messageSlice;

export default reducer;
export const {} = actions;