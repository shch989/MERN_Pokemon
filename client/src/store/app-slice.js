import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const appActions = appSlice.actions
export default appSlice