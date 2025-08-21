import User from '../model/user.js';
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



export { registerUser };