interface UIStateInterface {
  name: string
}

interface AppStateInterface {
  ui: UIStateInterface
}

export { AppStateInterface, UIStateInterface }
