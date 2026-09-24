import Button from "../../../shared/button/button"

function HeaderBody() {


  return (
    <>
    <div className="header__body-wrap">
    <h1 className="header__body-head">Sell flights. Without the complexity.</h1>
        <p className="header__body-title">Any business – from travel startups to financial enterprises – can build with Duffel to search and book flights, add ancillaries, charge customers, and manage orders.</p>
        <div className="header__body-wrap">
       <Button/>
        </div>
    </div>
    
    <img src="./product.jpg" alt="product" />
    </>
  )
}

export default HeaderBody
