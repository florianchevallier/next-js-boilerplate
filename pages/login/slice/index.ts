import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { IRandomData, LoginState } from './types';

export const initialState: LoginState = {
  getRandomData: {
    loading: false,
    success: false,
  }
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getRandomData(state) {
      state.getRandomData.loading = true;
      state.getRandomData.success = false;
    },
    getRandomDataSuccess(state, action: PayloadAction<IRandomData>) {
      state.getRandomData.loading = false;
      state.getRandomData.success = true;
      state.getRandomData.data = action.payload
    },
    getRandomDataError(state) {
      state.getRandomData.loading = false;
      state.getRandomData.success = false;
    },
  },
});

export const { actions: loginActions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */