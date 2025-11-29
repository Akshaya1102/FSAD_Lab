import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Fresh Apple', price: 120, image: 'assets/images/apple.jpg' },
  { id: 2, name: 'Banana', price: 40, image: 'assets/images/banana.jpg' },
  { id: 3, name: 'Milk', price: 50, image: 'assets/images/milk.jpg' },
  { id: 4, name: 'Bread', price: 35, image: 'assets/images/bread.jpg' },
  { id: 5, name: 'Tomatoes', price: 30, image: 'assets/images/tomato.jpg' },
  { id: 6, name: 'Yogurt', price: 30, image: 'assets/images/yogurt.jpg' },
  { id: 7, name: 'Spinach', price: 25, image: 'assets/images/spinach.jpg' }
];

function ProductList() {
  return (
    <div className={"ProductList"}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;