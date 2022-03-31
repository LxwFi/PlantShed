import NavBar from '../NavBar/NavBar'
import './Seeds.css'
import Product from '../Product/Product'


function Seeds() {
    return (
        <div className="Seeds">
            <header className="Seeds-header">
                <NavBar />
            </header>
            <body className='Seeds-body'></body>
            <p>Seeds</p>
            <div class="row">
                <Product name="Seed" description="A seed" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sunflower_Seeds_Kaldari.jpg/1200px-Sunflower_Seeds_Kaldari.jpg" price="100.00" />
            </div>
        </div>
    )
}

export default Seeds;