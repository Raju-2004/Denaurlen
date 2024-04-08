import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    items: string[]; // Change the type as per your item's type
}

const initialState: CategoryState = {
    items: []
};

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        removeCategory: (state,action:PayloadAction<string>) => {
            const index = state.items.indexOf(action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addCategory, removeCategory, clearCart } = categorySlice.actions;

export default categorySlice.reducer;
