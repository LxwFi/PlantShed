import './Product.css';

function Product(props) {
    return (
        <div class="column">
            <div class="card">
                <article className='product'>
                    <h3>{props.name}</h3>
                    <img src={props.imgUrl} />
                    <p>{props.description}</p>
                    <p>&pound;{props.price}</p>
                    <button>Add to cart</button>
                </article>
            </div>
        </div>

    )
}

export default Product;