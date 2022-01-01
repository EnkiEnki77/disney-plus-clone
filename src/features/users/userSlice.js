import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:
  {  name: '',
    email: '',
    photo: ''}
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.value = {name: action.payload.name, email: action.payload.email, photo: action.payload.photo}
        },
        setUserSignOut: (state ) => {
            state.value = initialState
        }
    }
})

export const {setUserLoginDetails, setUserSignOut} = userSlice.actions

// export const selectUserName = (state) => state.user.name
// export const selectUserEmail = (state) => state.user.email
// export const selectUserPhoto = (state) => state.user.photo

// console.log(selectUserName)

export default userSlice.reducer