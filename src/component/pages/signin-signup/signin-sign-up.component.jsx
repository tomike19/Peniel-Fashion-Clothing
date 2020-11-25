import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../signup/signup.component';
import './signin-signup.scss';



const SignInAndSignUpPage =() =>(
<div className='sign-in-and-sign-up'>
  <SignIn/>
  <SignUp/>
</div>
);


export default SignInAndSignUpPage;