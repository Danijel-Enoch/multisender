import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from "ethers";
import abi from ".//abi.json"

async function  connectToMetamask() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  this.setState({ selectedAddress: accounts[0] })
}

const multi_send=async(addresses,amount)=>{
  try{
    const Addresses_array=addresses.split(",");
   // const amount_list_array=amount.split(",");
    let amount_array=[];
    for(let i=0;i<=Addresses_array.length;i++){
      amount_array.push(amount+"000000000000000000");
      }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const address = "0xeA90ccC65D86Cb2549567368C1d4841FFd1B89DC";
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);   
    const tx = await contract.functions._multiSendToken(address,Addresses_array,amount_array);
    const receipt = await tx.wait();
    console.log("receipt", receipt);
    alert("sent")
  }catch(error){
    console.log(error)
  }
 
}

function App() {
  const [addresses, set_addressess] = useState("");
  const [amount_list,set_amount_list]=useState();
  
  const handleSubmit = (event) => {
    multi_send(addresses,amount_list)
    // event.preventDefault();
    // alert(`The name you entered was: ${amount_list}`)
  }

  

 

  return (
    <>
   <h2>
    Bistols- Multi Sender
   </h2>
    <form>
      <label>Enter List of Wallet Address:
        <input
          type="text" 
          value={addresses}
          onChange={(e) => set_addressess(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter Single Amount:
        <input
          type="text" 
          value={amount_list}
          onChange={(e) => set_amount_list(e.target.value)}
        />
      </label>
      <input type="button"  value={"sendd"} onClick={handleSubmit} />
      <input type="button" value={"connect"} placeholder='Connect Wallet ' onClick={connectToMetamask} />
    </form>
    <h7>
      Developed by enoch Daniel
    </h7>
    </>
  );
}

export default App;
