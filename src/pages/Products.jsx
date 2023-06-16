import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "P1",
    title: "Product 1",
  },
  {
    id: "P2",
    title: "Product 2",
  },
  {
    id: "P3",
    title: "Product 3",
  },
  {
    id: "P4",
    title: "Product 4",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/products/${product.title}`}>{product.title}</Link> */}
            <Link to={product.title}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
