import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const visibleContacts = createSelector([selectContacts, selectFilter],
    (contacts, filterValue) => {
        const filteredContacts = contacts.filter(person =>
            person.name.toLowerCase().includes(filterValue.toLowerCase())
          );

          return filteredContacts || contacts;
    })

