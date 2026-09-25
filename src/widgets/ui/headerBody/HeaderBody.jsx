import Button from "../../../shared/button/button"
import './headerBody.css'
import productImg from './product.jpg';
function HeaderBody() {


  return (    
  <div className="container">
    <div className="header__body-box">

      

    <div className="header__body-wrap">
    <h1 className="header__body-head">Sell flights. Without the complexity.</h1>
        <p className="header__body-title">Any business – from travel startups to financial enterprises – can build with Duffel to search and book flights, add ancillaries, charge customers, and manage orders.</p>
        <div className="header__body-wrap">
       <Button/>
        </div>
    </div>
    
    <div className="body-wrap-img">
     <img src={productImg} alt="product" />
      </div> 
    </div>
        </div>
     
  )
}

export default HeaderBody
