import SignInPage from "./signInPage"
import '../../assets/styleSheet/Style.css'
interface Props {}

function Signin(props: Props) {
    const {} = props

    return (
        <>
         <div className='backPanel'>
                <div className="signInPanel">
                    <SignInPage />
                </div>
            </div>
        </>
    )
}

export default Signin
