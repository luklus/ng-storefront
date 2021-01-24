const uiFeatureKey = 'ui'

interface UIStateInterface {
  name: string
}

interface AppStateInterface {
  [uiFeatureKey]: UIStateInterface
}

export { AppStateInterface, UIStateInterface }
