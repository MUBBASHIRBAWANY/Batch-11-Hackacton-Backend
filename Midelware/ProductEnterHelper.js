export const allowToGetProduct = () => {
    return (req, res, next) => {
        const {userid} =  req.body
        try {
            // Assuming user ID is available in req.user.id
            if (userid == '123') {
                return res.status(403).json({ message: 'Access denied for this user' });
            } else {
                return next(); // Allow access
            }
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: 'Server error' });
        }
    };
};
