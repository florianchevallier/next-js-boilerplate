import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/redux/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.login || initialState;

export const selectLogin = createSelector([selectSlice], state => state);

export const selectLoginQuote = createSelector([selectSlice], state => state.getRandomData);
