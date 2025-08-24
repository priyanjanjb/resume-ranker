import User from '../model/user.js';
import jwt from 'jsonwebtoken';

import { hashPassword ,comparePassword} from '../encriptions/auth.js';

//Register EndPoint
const registerUser = async (req, res) => {
  try {
    const { fName, lName, email, password } = req.body;

    // Validate input
    if (!fName || !lName || !email || !password) {
      return res.status(400).json({
        error: 'All fields are required',
      });
    }

    if (password.length < 5) {
      return res.status(400).json({
        error: 'Password should be at least 5 characters long',
      });
    }

    // Check if user already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(409).json({
        error: 'Email already taken',
      });
    }


    // Create user
    const user = await User.create({
      fName,
      lName,
      email,
      password
    });

    // Return safe response
    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Error in registerUser:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


//login EndPoint
const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body

        //user exist or not
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }

        //check the password is mach 
        const match = await comparePassword(password, user.password);
        if(match){
          jwt.sign({email: user.email, id: user._id , name: user.lName},
                    process.env.JWT_SECRET,
                    {},
                    (err,token)=>{
                      if(err) throw err;
                      res.cookie('token', token).json(user);
                    })
        }
        if (!match) {
            return res.status(401).json({ error: "Incorrect password Try again" });
        }


    }catch(error){
        console.log(error)
    }
}


//profile endpoint

const getProfile = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json(null);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // exclude password
    res.json(user);
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ error: "Invalid token" });
  }
};

//logout function
const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({success: true, message : "Logged  out successfully"});

};


export { registerUser , loginUser , getProfile , logoutUser };