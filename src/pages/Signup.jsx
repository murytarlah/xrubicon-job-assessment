import { useState } from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import '../styles/Signup.scss'
import FormInput from "../components/FormInput";

const Signup = () => {

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');

  const PasswordValidator = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  PasswordValidator.test(pwd);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  }

  const handlePwd2Change = (e) => {
    setPwd2(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://moni-typescript-test.herokuapp.com/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        pwd,
        pwd2
      })
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    setFirstName('');
    setLastName('');
    setEmail('');
    setPwd('');
    setPwd2('');
  }

  return ( 
    <div className="signup">
      <div className="slider">
        <div>
          <Slider/>
        </div>
      </div>
      <div className="content">
        <div>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid">
            	<FormInput label={'First Name'} name={'first_name'} valueChange={handleFirstNameChange} type={'text'} icon={'material-symbols:person'} placeholder={'John'} value={first_name}/>
            	<FormInput label={'Last Name'} name={'last_name'} valueChange={handleLastNameChange} type={'text'} icon={'material-symbols:person'} placeholder={'Doe'} value={last_name}/>
            </div>
            <FormInput label={'Email'} name={'email'} valueChange={handleEmailChange} placeholder={'johndoe@gmail.com'} icon={'line-md:email'} value={email} />
						<div className="grid">
							<FormInput label={'Password'} name={'password'} valueChange={handlePwdChange} placeholder={'********'} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true} value={pwd}/>
							<FormInput label={'Confirm Password'} name={'confirmPassword'} valueChange={handlePwd2Change} placeholder={'********'} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true}  value={pwd2}/>
						</div>
            <div className="passwordConditions">
              <FormInput type={'radio'}  label={'Contains at least one uppercase letter'} />
							<FormInput type={'radio'} label={'Contains at least one special character'} />
							<FormInput type={'radio'} label={'Contains at least one number'} />
							<FormInput type={'radio'} label={'Passowords are matching'} />
            </div>
            <FormInput type={'submit'} value={'Sign Up'} />
          </form>
					<p>Already a member? <Link to={'/login'}>Sign In</Link></p>
        </div>
      </div>
    </div>
   );
}
 
export default Signup;