interface ProductInterface {
  id: string
  name: string
  slug: string
}

interface ProductListingInterface {
  list: ProductInterface[]
}

export { ProductInterface, ProductListingInterface }
