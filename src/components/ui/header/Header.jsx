import Nav from '../navigation/Navigation'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__input">
                    <input type="text" placeholder='Поиск'/>
                </div>
                <a href="#!" className="header__logo">
                    <img src="./logo.png" alt="logo" />
                    <div className="logo__descr">
                        <img src="./logo-text.png" alt="" className="logo__descr-text" />
                    </div>
                </a>
                <div className="header__user-items">
                    <div className="user-item__favorite">
                        <a href="#!" className="user-item__link">
                            <img src="./heart.png" alt="favotire" />
                            <div className="favorite__quantity">0</div>
                        </a>
                    </div>
                    <div className="user-item__cart">
                        <a href="#!" className="user-item__link">
                            <img src="./cart.png" alt="cart" />
                            <div className="cart__quantity">0</div>
                        </a>
                    </div>
                    <div className="user-item__user">
                        <a href="#!" className="user-item__link">
                            <img src="./user.png" alt="user" />
                            <div className="cart__quantity"></div>
                        </a>
                    </div>
                </div>
            </div>

            <Nav/>
        </div>
    </header>
  )
}

export default Header
