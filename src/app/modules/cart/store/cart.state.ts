import { AppStateInterface } from 'src/app/store/app.state'
import { CartInterface } from '../models/CartModel'

const cartFeatureKey = 'cart'

interface CartStateInterface extends AppStateInterface {
  [cartFeatureKey]: CartInterface
}

export { CartStateInterface, cartFeatureKey }
