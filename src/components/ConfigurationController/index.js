import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowContent = () => {
        onToggleShowContent()
      }

      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-cont">
          <h1 className="config-h1">Layout</h1>
          <div className="input-cont">
            <input
              id="content"
              type="checkbox"
              onChange={toggleShowContent}
              checked={showContent && true}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="input-cont">
            <input
              id="leftNav"
              type="checkbox"
              onChange={toggleShowLeftNavbar}
              checked={showLeftNavbar && true}
            />
            <label htmlFor="leftNav" className="label">
              Left Navbar
            </label>
          </div>
          <div className="input-cont">
            <input
              id="rightNav"
              type="checkbox"
              onChange={toggleShowRightNavbar}
              checked={showRightNavbar && true}
            />
            <label htmlFor="rightNav" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
