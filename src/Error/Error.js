import React from 'react'
import '../Error/Error.css';
import { useNavigate } from 'react-router-dom';
function Error() {
  const errNavig = useNavigate();
  return (
    <section className='errCont'>
      <h2>404</h2>
      <h1>ERROR</h1>
      <button onClick={() => errNavig('/')}>Go Back</button>
    </section>
  )
}

export default Error
