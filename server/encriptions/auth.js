import bcrypt from 'bcrypt';
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (error, salt) => {
      if (error) {
        reject(error);
      } else {
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          } else {
            resolve(hashedPassword);
          }
        });
      }
    });
  });
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

export {hashPassword,comparePassword};
