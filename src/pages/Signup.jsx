import { useState } from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import '../styles/Signup.scss'
import FormInput from "../components/FormInput";

const Signup = () => {
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
          <form>
            <div className="grid">
            	<FormInput label={'First Name'} type={'text'} icon={'material-symbols:person'} placeholder={'John'}/>
            	<FormInput label={'Last Name'} type={'text'} icon={'material-symbols:person'} placeholder={'Doe'}/>
            </div>
            <FormInput label={'Email'} placeholder={'johndoe@gmail.com'} icon={'line-md:email'} />
						<div className="grid">
							<FormInput label={'Password'} placeholder={'********'} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true} />
							<FormInput label={'Confrim Password'} placeholder={'********'} icon={['ic:baseline-visibility-off', 'ic:baseline-visibility']} type={'password'} toggle={true} />
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