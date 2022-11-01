import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://635bee588aa87edd91551365.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const res = await axios.post("/contacts", newContact)
            const {name, phone, id} = res.data
            return {name, phone, id}
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
