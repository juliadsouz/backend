const { cifrarSenha, compararSenha, gerarToken } = require('../middlewares/authMiddleware.js');
const usuariosModel = require('../models/usuariosModel.js');


async function criar(req, res) {
  try {
    const senhaCifrada = await cifrarSenha(req.body.senha);
    const novoUsuario = await usuariosModel.create({
      email: req.body.email,
      senha: senhaCifrada
    });

    return res.status(201).json({_id: novoUsuario._id, email: novoUsuario.email});
  } catch (err) {
    return res.status(422).json({ msg: "Email e Senha são obrigatórios" });
  }
}

async function entrar(req, res) {
  try {
    const usuarioEncontrado = await usuariosModel.findOne({email: req.body.usuario});

   if (usuarioEncontrado) {
      const senhaConfere = compararSenha(
        req.body.senha,
        usuarioEncontrado.senha
      );

      if (senhaConfere) {
        const token = gerarToken({ email: req.body.usuario });
        return res.status(200).json({ token });
      }
    }

    return res.status(401).json({ msg: "Credenciais inválidas" });

  } catch (err) {
    return res.status(401).json({ msg: "Credenciais inválidas" });
  }
}


async function renovar(req, res) {
    const token = gerarToken({ email: req.body.emal });
    return res.status(200).json({ token });
  
}

async function remover(req, res) {
    await usuariosModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).send();
  } 

module.exports = { criar, entrar, renovar, remover };
