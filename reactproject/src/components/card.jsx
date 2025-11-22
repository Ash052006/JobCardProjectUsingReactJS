import React from 'react'
import { Bookmark } from 'lucide-react'
const card = (props) => {
  return (
    <div>
        <div className='card'>
       <div>
         <div className='top'>
          <img src={props.brandlogo} alt='dsdsc'/>
          <button> Save <Bookmark size={12}/> </button>
        </div>
        <div className='centre'>
          <h3>{props.company} <span>{props.post}</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
       </div>
        <div className='bottom'>
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default card