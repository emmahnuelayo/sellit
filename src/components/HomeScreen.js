import data from '../data';
import Product from './Product';

export default function HomeScreen() {
  return (
    <div>
      <div className='row center'>
        {data.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
