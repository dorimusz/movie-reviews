const UserService = require("../service/user");
const http = require('axios')

const apiSignInWithGoogle = async (req, res, next) => {
   console.log(req.body.code)
   try {
      const response = await http.post('https://oauth2.googleapis.com/token',{
        "code": req.body.code,
        "client_id": process.env.client_id,
        "client_secret": process.env.client_secret,
        "redirect_uri": "http://localhost:3000/callback",
        "grant_type": "authorization_code"
      })
      const decoded = jwt.decode(response.data.id_token)
      console.log(decoded);

      let option = { "entity.provider": "Google", "entity.id": decoded.sub };
      const user = await UserService.getUserByCredential(option);
      if (user.length > 0) {
         const token = generateToken(user[0]._id);
         res.json({
            token: token
         });
      } else {
         req.body.entity = { provider: "Google", id: decoded.sub }
         req.body.email = decoded.email
         req.body.givenName = decoded.given_name
         req.body.familyName = decoded.family_name
         const newUser = await UserService.saveUser(req.body);
         if (newUser) {
            const token = generateToken(newUser._id);
            res.json({
               token: token
            });
         }
      }

   } catch (error) {
      res.status(500).json({error: error})      
   }
}

module.exports = { 
   apiSignInWithGoogle
}