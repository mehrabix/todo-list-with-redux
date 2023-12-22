
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  name: string;
  note: string;
}

interface AppState {
  notes: Note[];
}

const initialState: AppState = {
    notes: [{
      name:'test1',
      note:'test note 1'
    }],
  };
  
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      setNote: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
    },
  });

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const { setNote } = appSlice.actions;
export default store;
