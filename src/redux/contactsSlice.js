import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts } from "./operations";

const contactInitialState = {
    items: [],
    isLoading: false,
    error: null,
}


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        // Выполнится в момент старта HTTP-запроса    
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        // Выполнится если HTTP-запрос завершился успешно    
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        // Выполнится если HTTP-запрос завершился с ошибкой    
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        // addContact(state, action) {
        //     state.push(action.payload);
        // },
        // deleteContact(state, action) {
        //     const index = state.findIndex(contact => contact.id === action.payload);
        //     state.splice(index, 1);
        // extraReducers: {
        //     [fetchContacts.pending](state, action) {},
        //     [fetchContacts.fulfilled](state, action) {},
        //     [fetchContacts.rejected](state, action) {},
        // }
    }
})

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingError, fetchingSuccess } =
//     contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;