import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = []

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        // prepare({name, phone}) {
        //     return {
        //         payload: {
        //             name,
        //             phone,
        //             id: name,
        //         }
        //     }
        // }

        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;