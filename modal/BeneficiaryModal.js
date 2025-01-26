import mongoose from "mongoose";

const BeneficiarySchema = new mongoose.Schema({
    DepatmentName :{
       type : String,
       required : true
   },
   BeneficiaryName :{
    type : String,
    required : true
   },
   BeneficiaryPhoneNumber :{ 
    type : String,
    required : true
   },
   BeneficiaryEmail :{
    type : String,
   },
   BeneficiaryAddress :{
    type : String,
    required : true
   },
   BeneficiaryCnic :{
    type : String,
    required : true
   },
   TOken : {
    type : Number
   }


})

const BeneficiaryModal = mongoose.model('Beneficiary', BeneficiarySchema)
export default BeneficiaryModal
