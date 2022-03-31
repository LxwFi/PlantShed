import NavBar from '../NavBar/NavBar'
import './Plants.css'
import Product from '../Product/Product'


function Plants() {
    return (
        <div className="Plants">
            <header className="Plants-header">
                <NavBar />
            </header>
            <body className='Plants-body'></body>
            <p>Plants</p>
            <div class="row">
                <Product name="Rose" description="A rose" imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/62/Rosa_Ingrid_Bergman_2018-07-16_6611_%28cropped%29.jpg" price="5.00" />
            </div>
        </div>
    )
}

export default Plants;