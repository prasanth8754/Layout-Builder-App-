import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-cont">
          {showLeftNavbar && (
            <nav className="left-nav-cont">
              <h1 className="nav-h1">Left Navbar Menu</h1>
              <ul className="nav-ul-cont">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </nav>
          )}
          {showContent && (
            <div className="content-cont">
              <h1 className="nav-h1">Content</h1>
              <p className="content-p">
                Lorem ipsum dolor sit amet. Nam cupiditate recusandae aut
                quaerat sequi sit harum accusamus est necessitatibus nostrum.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <nav className="left-nav-cont right-nav-cont">
              <h1 className="nav-h1 nav-right-h1">Right Navbar Menu</h1>
              <div className="nav-ul-cont">
                <div className="nav-right-item">Ad 1</div>
                <div className="nav-right-item">Ad 2</div>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
