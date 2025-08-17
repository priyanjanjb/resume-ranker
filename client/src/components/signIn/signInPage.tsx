import '../../assets/styleSheet/Style.css'
interface Props {}

function SignInPage(props: Props) {
    const {} = props

    return (
      <div className="formBackPanel">
        <div className="LRPanel">
          <div className="leftPanelSGin">
            <p className="tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit
            </p>
          </div>

          <div className="rightPanel">
            <h1 className="greetingSignIn">Welcome back</h1>
            <div className="formTextSection">
              <p className="actionTopic">Login to your account</p>
              <form className="formData" >
              <input
                className="inputBox"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                
                required
              />

              <input
                className="inputBox"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />

              <button className="buttons" type="submit">
                Login
              </button>
              </form>

              <p>
                <a className="linkslg" href="/signup">Create new Account</a>
              </p>
              <p>
                <a className="linkslg" href="#">Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default SignInPage
