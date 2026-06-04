import { createSlice } from "@reduxjs/toolkit"


// create slice 
const registerSlice = createSlice({
    name: "register",
    initialState: {
        userName: "",
        email: "",
        password: ""
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

// export actions 
export const { setUserName, setEmail, setPassword } = registerSlice.actions

// export selectors / states
export const selectName = (state) => state.register.userName
export const selectEmail = (state) => state.register.email 
export const selectPassword = (state) => state.register.password

// export reducers
export default registerSlice.reducer