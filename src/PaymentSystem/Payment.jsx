import React from 'react'
import { useLocation } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";

const Payment = () => {
    const info = useLocation();
    let totalAmount = info.state.totalAmount;
    let totalItem = info.state.totalItem;
    
    
    let transaction_uuid=uuidv4()

    let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
     var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
 var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    console.log(transaction_uuid)
    return (
        <div>
            <form 
            action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" 
            method="POST">
                <input 
                type="text" 
                id="amount" 
                name="amount"
                value={totalAmount} 
                required />
                
                <input
                 type="text" 
                 id="tax_amount"
                 name="tax_amount" 
                 value="0"
                 required />
               
                <input 
                type="text" 
                id="total_amount"
                name="total_amount" 
                value={totalAmount} 
                required />
                
                <input 
                type="text"
                id="transaction_uuid" 
                name="transaction_uuid"
                value={transaction_uuid}
                required />
                
                <input 
                type="text" 
                id="product_code" 
                name="product_code" 
                value="EPAYTEST" 
                required />
               
                <input 
                type="text" 
                id="product_service_charge" 
                name="product_service_charge" 
                value="0" 
                required />
                
                <input 
                type="text"
                id="product_delivery_charge" 
                name="product_delivery_charge" 
                value="0" 
                required />
                
                <input 
                type="text"
                id="success_url" 
                name="success_url" 
                value="http://localhost:5173/Success"
                required />
               
                <input 
                type="text" 
                id="failure_url" 
                name="failure_url" 
                value="http://localhost:5173/Failure" 
                required />
                
                <input 
                type="text" 
                id="signed_field_names" 
                name="signed_field_names" 
                value="total_amount,transaction_uuid,product_code"
                required />
               
                <input 
                type="text" 
                id="signature" 
                name="signature"
                value={hashInBase64}
                required />

               <div className="space-y-2">
               <h1>Total Item: {totalItem}</h1>
               <h1>Total Amount Rs: {totalAmount}</h1>
               </div>

                
               <input value="Payment" type="submit" className=" w-[82px] p-2 bg-amber-500 rounded-[50px] text-white hover:bg-orange-600" />
            </form>
        </div>
    )
}

export default Payment
