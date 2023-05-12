const createTokenUser = (user) =>{
    return{
        name: user.name,
        userId:user._Id,
        role:user.role
    };
};

module.exports = createTokenUser;