const bcrypt = require('bcrypt');

// Function to hash the password
const hashPassword = (password) =>
{
    return new Promise((resolve, reject) =>
    {
        // Generate a salt with a cost factor of 12
        bcrypt.genSalt(12, (err, salt) =>
        {
            if (err) {
                // If there's an error generating salt, reject the promise
                reject(err);
            }
            // Hash the password using the generated salt
            bcrypt.hash(password, salt, (err, hash) =>
            {
                if (err) {
                    // If there's an error hashing the password, reject the promise
                    reject(err);
                }
                // Resolve the promise with the hashed password
                resolve(hash);
            });
        });
    });
};

// Function to compare the entered password with the hashed password
const comparePassword = (password, hashed) =>
{
    return bcrypt.compare(password, hashed);
};

// Export the functions for external use
module.exports = {
    hashPassword,
    comparePassword
};
