import ProductCard from './ProductCard';
import './ProductList.css';

const product = { id: 2, name: 'Banana', price: 40, image: 'assets/images/banana.jpg' };

const products = [
  { id: 3, name: 'Milk', price: 50, image: 'assets/images/milk.jpg' },
  { id: 4, name: 'Cheese', price: 200, image: 'assets/images/cheese.jpg' },
  { id: 5, name: 'TEST', price: 100, image: 'assets/images/cheese.jpg' },
];

function ProductList() {
  return (
    <div className={"ProductList"}>
      
      <ProductCard key="1" price="120" image='assets/images/apple.jpg'/>
      <ProductCard key={product.id} {...product} />

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;