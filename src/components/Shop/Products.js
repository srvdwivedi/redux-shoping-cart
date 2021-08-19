import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id : 'p1', price : 6, title : 'How to stay Happy', description : 'Just to start...'},
  {id : 'p2', price : 12, title : 'How to stay Happy Part-2', description : 'The second book to test'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Products</h2>
      <ul>
          {DUMMY_PRODUCTS.map( (product) => {
            return (
            <ProductItem
              key = {product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            /> )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
