import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {IComment, IPost} from "../types";

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

export const getPosts = createAsyncThunk(
    "message/getPosts",
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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

export const getComments = createAsyncThunk(
    "message/getComments",
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
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
        posts: [],
        comments: [],
        filteredComments: [],
        currentPostId: null,
        currentUserId: null,
        filteredPosts: [],
    },
    reducers: {
        filterCommentsByPostId: (state: any, {payload}: { payload: any }) => {
            const postId = payload;
            if (state.currentPostId === postId) {
                state.currentPostId = null;
                state.filteredComments = [];
            } else {
                state.currentPostId = postId;
                state.filteredComments = state.comments.filter((comment: IComment) => comment.postId === postId);
            }
        },
        filterPostsByUserId: (state: any, {payload}: { payload: any }) => {
            const userId = payload;
            if (state.currentUserId === userId) {
                state.currentUserId = null;
                state.filteredPosts = [];
            } else {
                state.currentUserId = userId;
                state.filteredPosts = state.posts.filter((post: IPost) => post.userId === userId);
            }
        },
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
        }),
        builder.addCase(getPosts.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }),
        builder.addCase(getPosts.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.posts = payload;
        }),
        builder.addCase(getPosts.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        }),
        builder.addCase(getComments.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }),
        builder.addCase(getComments.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.comments = payload;
        }),
        builder.addCase(getComments.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        })
    }
})

const {actions, reducer} = messageSlice;

export default reducer;
export const {filterCommentsByPostId, filterPostsByUserId} = actions;