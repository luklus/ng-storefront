import { createSelector } from '@ngrx/store'
import { AppStateInterface, UIStateInterface } from './app.state'

const uiNameSelector = createSelector(
  (state: AppStateInterface) => state.ui,
  (ui: UIStateInterface) => ui.name
)

const uiIDSelector = createSelector(
  (state: AppStateInterface) => state.ui,
  (ui: UIStateInterface) => ui.id
)

export { uiIDSelector, uiNameSelector }
