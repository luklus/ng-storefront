interface CartInterface {
  id: string
  itemList: CartProductInterface[]
}

interface CartProductInterface {
  id: string
  name: string
  quantity: number
  slug: string
}

export { CartInterface, CartProductInterface }
