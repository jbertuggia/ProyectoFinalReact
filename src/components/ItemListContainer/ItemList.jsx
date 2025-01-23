import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}
export default ItemList