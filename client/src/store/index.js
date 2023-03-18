import { configureStore } from '@reduxjs/toolkit'

import appSlice from './app-slice'
import pokemonSlice from './pokemon-slice'

const store = configureStore({
  reducer: { app: appSlice, pokemon: pokemonSlice },
})

export default store