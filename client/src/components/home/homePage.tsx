import '../../assets/styleSheet/home.css'
interface Props {}

function HomePage(props: Props) {
    const {} = props

  
    return (
        <div className="hmBackPanel">
      <div className="hmLRPanel">
        <div className="leftPanel">
          <p className="tagline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit.
          </p>
        </div>

        <div className="rightPanel">
          <h1 className="greeting">
              Hi...
          </h1>


          <div className="formTextSection">
            <p className="actionTopic">Fill the Form</p>
            <form className="formData" >
              <input
                className="inputBox"
                type="text"
                placeholder="Name"
                
                required
              />
              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                
                required
              />
              <input
                className="inputBox"
                type="tel"
                placeholder="Phone Number"
               
                required
              />
              <input
                className="inputBox"
                type="file"
                accept=".pdf,.docx"
                
                required
              />

              <div className="buttonScection">
                <button className="buttons" type="submit">Submit</button>
                <button className="buttons" type="reset"

                >Reset</button>
                <button type="button" className="buttons" >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomePage
