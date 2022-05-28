import FormInput from '../components/FormInput';
import '../styles/login.scss'
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

export default function Login(){
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
          <FormInput label={'Email'} placeholder={'johndoe@gmail.com'} icon={'line-md:email'} />
          <FormInput label={'Password'} placeholder={'********'} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true} />
          <FormInput type={'submit'} value={'Sign In'} />
          <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
   );
}