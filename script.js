const jwt = require('jsonwebtoken');



const encrypt = (payload, secret) => {
  return jwt.sign(payload,secret,{expiresIn:'1h'})
  // your code here and return token
};

const verifyToken = (token,secret)=>{
  try {
    const decoded = jwt.verify(token,secret)
    return {valid:true,expired:false,decoded}
  } catch (error) {
    return {valid:false,expired:error.name==='TokenExpiredError'}
    
  }
}

const secret = "SH123OKN"
const payload = {userId:123,role:'admin'};

const token = encrypt(payload,secret)
console.log("Generated Token:",token);

setTimeout(()=>{
  const result =verifyToken(token,secret)
  console.log('Tpken verification:',result)
},2000)

module.exports = {encrypt,verifyToken};
