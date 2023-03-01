import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import addimage from '../../assets/div.png'

function index() {
  const dot = useParams()
  const [id,setId]=useState([])
  const [state, setState]=useState(1)

  useEffect(()=>{
      fetch(`https://api.escuelajs.co/api/v1/products/${dot.id}`).then((cos)=>cos.json()).then((acc)=>setId(acc))
  },[])

  return (
    <>
        <div className='prop_par'>
        <img src={id.images} className="prop_par_image" alt="" />
        <div className="prop_body">
        <h2 className='prop_par_title'>{id.title}</h2>
        <p className="prop_par_des">{id.description}</p>
        <h3 className='prop_par_price'>$  {id.price}</h3>

          <div className="quanity">
            <h2 className='quanity_num'>{state}</h2>
              <div className="brt">
              <button className="plus" onClick={()=>setState(state+1)}>
                +
              </button>
              <button className="plus" onClick={()=>setState(state -1)}>
                -
              </button>
              </div>
          </div>

        <div className="prop_par_btnbox">
        <button className='prop_par_btn blue'>Buy It Now</button>
        <button className='prop_par_btn light'>Add To Card</button>
        <button className='prop_par_btn white'>Add To Watchlist</button>
        </div>
        </div>

    </div>
    <div className="product_add">
      <img src={addimage} alt="" className="product_add_" />
    </div>
    </>
  )
}

export default index