import data from './../data';
import Rating from './Rating';
import { useParams, Link } from 'react-router-dom';

export default function ProductScreen(props) {
  const { id } = useParams();
  const product  = data.products.find(
    (x) => x._id === id
  );
  if (!product) {
    return <div> Product Not Found </div>;
  }
  return (
    <div>
      <Link to='/'>Back to Result</Link>
      <div className='row top'>
        <div className='col-2'>
          <img src={product.image} className='large' alt={product.name} />
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className='success'>In Stock</span>
                    ) : (
                      <span className='error'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
