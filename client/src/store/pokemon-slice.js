import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
})

export const pokemonActions = pokemonSlice.actions
export default pokemonSlice