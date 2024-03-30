import React from 'react'
import '../style/hamster.css'
const Hamster = () => {
  return (
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel_and_hamster">
	      <div className="wheel"></div>
        <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb__fr"></div>
          <div className="hamster__limb hamster__limb__fl"></div>
          <div className="hamster__limb hamster__limb__br"></div>
          <div className="hamster__limb hamster__limb__bl"></div>
          <div className="hamster__tail"></div>
        </div>
        </div>
        <div className="spoke"></div>
    </div>
  )
}

export default Hamster