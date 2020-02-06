const bcrypt = require('bcrypt');

const plainText = 'Aa@12345';

const fakePlainText = 'Aa@123456';

const handleHashing = async () => {
    /**
     * Tạo salt để hashing password
     */
    const salt = await bcrypt.genSaltSync(10);
    /**
     * Hashing passowd
     */
    const cipherText = await bcrypt.hashSync(plainText, salt);
    console.log(cipherText);
    /**
     * So sánh hashing password === password ?
     */
    const isMatched = await bcrypt.compare(fakePlainText, cipherText)
    if(!isMatched) console.log(`Plaintext and Ciphertext are not matched`)
}

handleHashing()
