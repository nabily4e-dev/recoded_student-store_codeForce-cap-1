import { useState } from "react"

import { SectionWrapper } from "@/components/hoc"
import ProductList from "@/components/ProductList"
import products from "@/components/ProductList/products"

import Buttons from "../Buttons"

const filters = [
  {
    filter: "Book",
    image: "/images/Book.png",
    alt: "Book",
  },
  {
    filter: "Furniture",
    image: "/images/Furniture.png",
    alt: "Furniture",
  },
  {
    filter: "Electronics",
    image: "/images/Electronic.png",
    alt: "Electronics",
  },
  {
    filter: "Two-wheeler",
    image: "/images/Two-wheeler.png",
    alt: "Two-wheeler",
  },
]

function CategoryFilter() {
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleCategoryFilter = (filter) => setSelectedFilter(filter)

  return (
    <div>
      <Buttons filters={filters} handleCategoryFilter={handleCategoryFilter} />
      <ProductList selectedFilter={selectedFilter} products={products} />
    </div>
  )
}

export default SectionWrapper(CategoryFilter)
