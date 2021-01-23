import { createReducer } from '@ngrx/store'
import { UIStateInterface } from './app.state'

export const initialState: UIStateInterface = {
  name: 'NGStorefront',
}

export const uiReducer = createReducer(initialState)
