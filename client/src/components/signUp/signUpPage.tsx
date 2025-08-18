import '../../assets/styleSheet/Style.css'

function SignUpPage() {
  

  return (
    <div className='backPanel'>
      <div className="LRPanel">
        <div className='leftPanelSGup'>
          <p className='tagline'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit
          </p>
        </div>

        <div className='rightPanel'>
          <h1 className="greetingSignUp">Shape Your Career in Minutes</h1>

          <div className="formTextSection">
            <p className='actionTopic'>Create your new account</p>

            <form className="signinFormData" >
              <input
                className='inputBox'
                type="text"
                id='fName'
                name="fName"
                placeholder='First Name'
                
                required
              />
              <input
                className='inputBox'
                type="text"
                id='lName'
                name="lName"
                placeholder='Last Name'
                required
              />
              <input
                className='inputBox'
                type="email"
                id='email'
                name="email"
                placeholder='Email'
                required
              />
              <input
                className='inputBox'
                type="password"
                id='password'
                name="password"
                placeholder='Password'
                required
              />
              <input
                className='inputBox'
                type="password"
                id='cPassword'
                name="cPassword"
                placeholder='Confirm Password'
                required
              />

              <div className="buttonScection">
                <button className='buttons' type='submit'>Sign Up</button>
                <button
                  className='buttons'
                  type='button'
                  
                >
                  Reset
                </button>
              </div>
            </form>

            <p className="para">
              Already have an account?
              <a className="linkssg" href="/signin"> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
