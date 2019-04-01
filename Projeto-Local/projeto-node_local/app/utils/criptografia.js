const crypto = require("crypto");
const DADOS_CRIPTOGRAFAR = {
  algoritmo : "aes256",
  codificacao : "utf8",
  segredo : "chaves",
  tipo : "hex"
};


function criptografia(){

    criptografia.prototype.criptografar = function (senha) {
        const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        cipher.update(senha);
        return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
      };

    criptografia.prototype.descriptografar = function descriptografar(senha) {
        const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
        return decipher.final();
    };

}


module.exports = criptografia;
