import { createReducer } from '@ngrx/store'
import { name } from '../../../package.json'
import { UIStateInterface } from './app.state'

export const initialState: UIStateInterface = {
  name,
}

export const uiReducer = createReducer(initialState)
