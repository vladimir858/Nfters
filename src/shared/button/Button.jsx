import './Button.css';

function Button() {

  return (
<div className='button-wrap'>
 <a href="#" className='button-sign'>
  Sign up
  <svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.67999C10.7 4.25333 10.8933 3.87999 11.08 3.55999C11.28 3.23999 11.4733 2.97333 11.66 2.75999H-1.54972e-06V1.91999H11.66C11.4733 1.69333 11.28 1.41999 11.08 1.09999C10.8933 0.779992 10.7 0.413325 10.5 -7.7486e-06H11.2C12.04 0.973326 12.92 1.69333 13.84 2.15999V2.51999C12.92 2.97333 12.04 3.69333 11.2 4.67999H10.5Z" fill="white"/>
</svg>

  
  </a>
      
      
      <a href="#" className='button-contact'>Contact us</a>
</div>
  )
}

export default Button
 