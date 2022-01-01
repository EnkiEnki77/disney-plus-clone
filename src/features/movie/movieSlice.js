import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:
  {  recommend: '',
    newDisney: '',
    trending: '',
    original: ''}
}

const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            state.value = {recommend: action.payload, newDisney: action.payload, trending: action.payload, original: action.payload}
        }
    }
})

export const {setMovies} = movieSlice.actions

export default movieSlice.reducer