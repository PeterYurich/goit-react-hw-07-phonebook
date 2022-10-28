import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    fetchingInProgress, fetchingError, fetchingSuccess
} from "./contactsSlice"

axios.defaults.baseURL = "https://635bee588aa87edd91551365.mockapi.io";

// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts")
//         dispatch(fetchingSuccess(response.data))
//     } catch (error) {
//         dispatch(fetchingError(error.message))
//     }
// }

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
async () => {
    const response = await axios.get("/contacts");
    return response.data
} )
