import { ProductInterface } from '../../products/models/interfaces'

interface CartInterface {
  id: string
  itemList: CartProductInterface[]
}

interface CartProductInterface extends ProductInterface {
  quantity: number
}

export { CartInterface, CartProductInterface }
