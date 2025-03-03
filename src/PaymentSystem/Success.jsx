import { useSearchParams } from "react-router-dom";

function Success() {
  const [search] = useSearchParams();
  const info = search.get("data");
  let decodedInfo = atob(info);
  let newInfo = JSON.parse(decodedInfo);
  console.log(decodedInfo);
  console.log(newInfo);
  return (
    <div>
      <div className="  shadow-2xl   shadow-gray   rounded-2xl  p-2 w-96 m-auto  flex flex-col  justify-center  items-center  mt-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmfS1oxxuVEVrXahVK2N4nLr4rlpoKbUFGA&s"
          alt=""
        />
        <h1>Payment Success</h1>
       <div className="mt-[20px] space-y-2">
        <h1>Total Amount: {newInfo.total_amount}</h1>
         <h1>Transaction Code: {newInfo.transaction_code}</h1>
        <h1>Status: {newInfo.status}</h1>
     </div> 
      </div>
    </div>
  );
}

export default Success;