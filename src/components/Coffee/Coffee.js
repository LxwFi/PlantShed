import NavBar from '../NavBar/NavBar'
import Product from '../Product/Product'
import './Coffee.css'

function Coffee() {
    return (
        <div className="Coffee">
            <header className="Coffee-header">
                <NavBar />
            </header>
            <body className='Coffee-body'>
                <p>Coffee</p>

                <div class="row">
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                    <Product name="Costa" description="Costa Coffee" imgUrl="https://i2-prod.mirror.co.uk/incoming/article23813339.ece/ALTERNATES/s1200c/0_THP_COSTA_50th_012.jpg" price="10.00" />
                </div>
            </body>
        </div>
    )
}

export default Coffee;