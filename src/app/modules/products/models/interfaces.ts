interface ProductInterface {
  desc?: string
  id: string
  name: string
  slug: string
}

interface ProductListingInterface {
  list: ProductInterface[]
}

export { ProductInterface, ProductListingInterface }
