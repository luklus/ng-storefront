import { createReducer } from '@ngrx/store'
import { name, version } from '../../../package.json'
import { UIStateInterface } from './app.state'

export const initialState: UIStateInterface = {
  id: version,
  name,
}

export const uiReducer = createReducer(initialState)
