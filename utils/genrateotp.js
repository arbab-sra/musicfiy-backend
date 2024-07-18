 export const genrateOtp = ()=>{
    const otp = Math.floor(10000 + Math.random() * 90000);
   return otp > 9999 ? otp : genrateOtp();
}