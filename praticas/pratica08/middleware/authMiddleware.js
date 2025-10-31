const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    try {
      const { authorization } = req.headers;
      const token = authorization; 
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = payload;
      next();
    } catch (err) {
      return res.status(401).json({ msg: "Token Inválido" });
    }
  }

 function gerarToken(payload) {
    try{
        const expiresIn = 120;
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn} );
        return token
    } catch (err) {
        throw Error ("Erro ao gerar um token");
    } 
 }


 module.exports = {gerarToken, verificarToken}