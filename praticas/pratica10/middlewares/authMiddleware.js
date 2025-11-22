const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


function verificarToken(req, res, next) {
  try{
        const { authorization } = req.headers;
        const token = authorization;
        
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.payload = payload;
        return next ();
    } catch (err) {
        return res.status(401).json({msg: "Token Inválido"})
    }}

function gerarToken(payload) {
   try{
        const expiresIn = 60;
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn} );
        return token
    } catch (err) {
        throw Error ("Erro ao gerar um token");
    }}


function cifrarSenha(senha) {
  const salto = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salto);
  return hash;
}


function compararSenha(senha, hash) {
  return bcrypt.compareSync(senha, hash);
}

module.exports = {verificarToken, gerarToken, cifrarSenha, compararSenha};
