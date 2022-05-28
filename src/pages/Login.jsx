import { useRef, useState, useEffect, useContext } from 'react';
import FormInput from '../components/FormInput';
import AuthContext from '../context/AuthContext';
import '../styles/login.scss'
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePwdChange = async (e) => {
    setPwd(e.target.value);
  }

  useEffect(() => {
      setEmail('');
      setPwd('');
  }, [email, pwd])

  const handleSubmit = (e) => {
    e.preventDefault();

    var raw = JSON.stringify({email, pwd});
    console.log(raw);
    var requestOptions = {
      method: 'POST',
      body: raw,
      // redirect: 'follow'
    };

    fetch("https://moni-typescript-test.herokuapp.com/api/user/login", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    setEmail('');
    setPwd('');
  }
  return ( 
    <div className="login">
      <div className='slider'>
        <div>
          <Slider/>
        </div>
      </div>
      <div className="content">
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <FormInput label={'Email'} name={'email'} placeholder={'johndoe@gmail.com'} valueChange={handleEmailChange} icon={'line-md:email'}  value={email}/>
            <FormInput label={'Password'} name={'password'} placeholder={'********'} value={pwd} valueChange={handlePwdChange} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true} />
            <FormInput type={'submit'} valueChange={handleSubmit} value={'Sign In'} />
          </form>
          <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
   );
}