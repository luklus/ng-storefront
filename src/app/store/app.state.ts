const uiFeatureKey = 'ui'

interface UIStateInterface {
  id: string
  name: string
}

interface AppStateInterface {
  [uiFeatureKey]: UIStateInterface
}

export { AppStateInterface, UIStateInterface }
