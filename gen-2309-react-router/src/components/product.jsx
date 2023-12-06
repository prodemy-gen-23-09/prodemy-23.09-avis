import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export function Products(props){
    return (
        <Link to={`/product/${props.id}`}>
            <div className='productList flex justify-center items-center h-full'>
                <div key={props.id} className='productCard bg-blue-200 relative pb-10 pt-10 p-4 w-80 h-full flex flex-col max-w-md transition duration-200 transform hover:scale-105 rounded-xl'>
                    <img src={props.image} alt='product-img' className='productImage w-full h-100 object-cover'></img>

                    <div className='productCard_content flex flex-col justify-between h-full'>
                        <div className='h-56 flex flex-col justify-between'>
                            <h3 className='productName'>{props.name}</h3>
                            <div className='displayStack__1'>
                                <div className='productPrice'>${props.price}</div>
                                <div className='productSales'>{props.totalSales} units sold</div>
                            </div>
                            <div className='displayStack__2 flex items-center'>
                                <div className='productRating flex'>
                                    {[...Array(props.rating)].map((_, index) => (
                                        <FaStar id={index + 1} key={index} className='mr-1' />
                                    ))}
                                </div>
                                <div className='productTime'>{props.timeLeft} days left</div>
                            </div>
                        </div>
                        <div className='productIcons flex justify-between'>
                            <FaShoppingCart className={"productCard-cart"}/>
                            <FaRegBookmark className={"productCard_wishlist"}/>
                            <FaFireAlt className={"productCard-fastSelling"}/>
                        </div>
                        <div className='productReleaseDate'>Released: {props.releaseDate}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
