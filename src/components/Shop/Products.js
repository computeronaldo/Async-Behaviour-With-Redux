import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "e1",
    title: "Test Item 1",
    price: 6,
    description: "This is the first product - amazing!",
  },
  {
    id: "d2",
    title: "Test Item 2",
    price: 8,
    description: "This is the second product - amazing!",
  },
  {
    id: "e3",
    title: "Test Item 3",
    price: 5,
    description: "This is the third product - amazing!",
  },
  {
    id: "r1",
    title: "Test Item 4",
    price: 10,
    description: "This is the fourth product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            ></ProductItem>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
