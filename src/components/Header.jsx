import React from 'react'

function Header() {
  return (
    <header className="Header">
        <h1>Solar System</h1>
        <div className="Wrapper">
          <div className="Sun">
            <div className="StarSun" />
          </div>
          <div className="Murcury">
            <div className="Planet">
              <div className="Shadow" />
            </div>
          </div>
          <div className="Venus">
            <div className="Planet">
              <div className="Shadow" />
            </div>
          </div>
          <div className="Terra">
            <div className="Planet">
              <div className="Shadow" />
            </div>
          </div>
          <div className="Mart">
            <div className="Planet">
              <div className="Shadow" />
            </div>
          </div>
          <div className="Jupiter">
            <div className="Planet">
              <div className="Shandow" />
            </div>
          </div>
          <div className="Saturno">
            <div className="Planet" />
          </div>
          <div className="Urano">
            <div className="Planet">
              <div className="Shandow" />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
