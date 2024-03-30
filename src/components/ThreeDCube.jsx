import React from 'react'
import '../style/threeCube.css'
import { Image} from '@chakra-ui/react'
const ThreeDCube = () => {
  return (
    <div 
        className="cube_loader">
      <div 
          className="cube_top">
            <Image src='./reactIcon.png'  width={'100%'} height={'100%'}/>
      </div>
      <div 
          className="cube_wrapper">
        <span 
            className="cube_span" style={{ '--i': 0 }}>
            <Image src='./javaIcon.png'  width={'100%'} height={'100%'}/>
        </span>
        <span 
            className="cube_span" style={{ '--i': 1 }}>
            <Image src='./pythonIcon.webp'  width={'100%'} height={'100%'}/>
        </span>
        <span 
            className="cube_span" style={{ '--i': 2 }}>
            <Image src='./javaScriptIcon.png'  width={'100%'} height={'100%'}/>
        </span>
        <span 
            className="cube_span" style={{ '--i': 3 }}>
            <Image src='./sqlIcon.png'  width={'100%'} height={'100%'}/>
        </span>
      </div>
    </div>
  )
}

export default ThreeDCube