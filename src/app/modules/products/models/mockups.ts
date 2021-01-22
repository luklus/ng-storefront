import { ProductInterface, ProductListingInterface } from './interfaces'

class ProductFactory {
  id: string
  name: string
  slug: string

  constructor(id, name, slug) {
    this.id = id
    this.name = name
    this.slug = slug
  }
}

const ProductMockup: ProductInterface = new ProductFactory(
  '0001',
  'Product 1',
  'product1'
)

const ProductListingMockup: ProductListingInterface = {
  list: [
    ProductMockup,
    new ProductFactory('0002', 'Product 2', 'product2'),
    new ProductFactory('0003', 'Product 3', 'product3'),
    new ProductFactory('0004', 'Product 4', 'product4'),
  ],
}

export { ProductFactory, ProductMockup, ProductListingMockup }
