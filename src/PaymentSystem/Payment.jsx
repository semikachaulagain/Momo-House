import React from 'react'
import { useLocation } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";

const Payment = () => {
    const info = useLocation();
    let totalAmount = info.state.totalAmount;
    let totalItem = info.state.totalItem;


    let transaction_uuid = uuidv4()

    let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
    var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    // console.log(transaction_uuid)
    return (
        <div className="flex justify-center mt-[50px]">
            <form
                 className="flex flex-col justify-center items-center p-4 shadow-2xl shadow-gray-600 h-62 w-62 rounded-2xl space-y-6"
                action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                method="POST">
                <input
                    type="hidden"
                    id="amount"
                    name="amount"
                    value={totalAmount}
                    required />

                <input
                    type="hidden"
                    id="tax_amount"
                    name="tax_amount"
                    value="0"
                    required />

                <input
                    type="hidden"
                    id="total_amount"
                    name="total_amount"
                    value={totalAmount}
                    required />

                <input
                    type="hidden"
                    id="transaction_uuid"
                    name="transaction_uuid"
                    value={transaction_uuid}
                    required />

                <input
                    type="hidden"
                    id="product_code"
                    name="product_code"
                    value="EPAYTEST"
                    required />

                <input
                    type="hidden"
                    id="product_service_charge"
                    name="product_service_charge"
                    value="0"
                    required />

                <input
                    type="hidden"
                    id="product_delivery_charge"
                    name="product_delivery_charge"
                    value="0"
                    required />

                <input
                    type="hidden"
                    id="success_url"
                    name="success_url"
                    value="https://momo-house-orpin.vercel.app/Success"
                    required />

                <input
                    type="hidden"
                    id="failure_url"
                    name="failure_url"
                    value="https://momo-house-orpin.vercel.app/Failure"
                    required />

                <input
                    type="hidden"
                    id="signed_field_names"
                    name="signed_field_names"
                    value="total_amount,transaction_uuid,product_code"
                    required />

                <input
                    type="hidden"
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
