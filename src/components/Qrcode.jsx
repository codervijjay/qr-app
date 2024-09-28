import React from 'react'
import {  useState } from 'react'

export const Qrcode = () => {

  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const handleClick = () =>{
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
  }
  return (
    <div className='container'>
      <h1 className='h1_qr'>QR CODE GENERATOR</h1>
      <input type="text" placeholder='Enter a website url' className='input' onChange={(e)=>{setUrl(e.target.value)}} />
      <button className='btn' onClick={handleClick} >Generate</button>
      <div>
        <img src={qr}  className='qr_img' />
      </div>
    </div>
  )
}
