import { createSlice } from '@reduxjs/toolkit'
import { AuthService } from '../../services'

interface InitialState {
  loading: boolean
  login: any
  permissions: any[]
  menuList: any[]
}

const initialState: InitialState = {
  loading: false,
  login: 'test',
  permissions: [],
  menuList: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (/* builder */) => {
    // ----- SAMPLE -----
    // builder.addCase(AuthService.permission.pending, (state) => {
    //   state.loading = true
    // })
    // builder.addCase(AuthService.permission.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.permissions = action.payload.data
    // })
    // builder.addCase(AuthService.permission.rejected, (state, action: any) => {
    //   state.loading = false
    //   state.permissions = []
    //   CustomNotification({
    //     type: 'error',
    //     message: 'Failed get permission list',
    //     description: action.payload?.messages || action.payload?.errors,
    //   })
    // })
   
  },
})

export default authSlice.reducer
