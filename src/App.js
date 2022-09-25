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
    const Addresses_array=addresses.split("\n");
   // const amount_list_array=amount.split(",");
    let amount_array=[];
    for(let i=0;i<=Addresses_array.length;i++){
      amount_array.push(amount+"000000000000000000");
      }
   const provider=new ethers.providers.JsonRpcProvider("https://evm.cronos.org")
    const address = "0x71A590f47B0Ee8d81389C226419d9C8baB05d5F5";
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);   
    const tx = await contract.functions._multiSendToken(address,Addresses_array,amount_array);
    const receipt = await tx.wait();
    console.log("receipt", receipt);
    console.log(Addresses_array)
    alert("sent")
  }catch(error){
    console.log(error)
  }
 
}
const multi_send_pebbles_arbitrum=async(addresses,amount)=>{
  try{
    const Addresses_array=addresses.split("\n");
   // const amount_list_array=amount.split(",");
    let amount_array=[];
    for(let i=0;i<=Addresses_array.length;i++){
      amount_array.push(amount+"000000000000000000");
      }
    const provider=new ethers.providers.JsonRpcProvider("https://evm.cronos.org")
    const address = "0x71A590f47B0Ee8d81389C226419d9C8baB05d5F5";
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
const multi_send_pebbles_cronos=async(addresses,amount)=>{
  try{
    const Addresses_array=addresses.split("\n");
   // const amount_list_array=amount.split(",");
    let amount_array=[];
    for(let i=0;i<=Addresses_array.length;i++){
      amount_array.push(amount+"000000000000000000");
      }
    const provider=new ethers.providers.JsonRpcProvider("https://evm.cronos.org")
    const address = "0x71A590f47B0Ee8d81389C226419d9C8baB05d5F5";
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

  const handleSubmit_pebbles_cronos = (event) => {
    multi_send_pebbles_cronos(addresses,amount_list)
  }
  const handleSubmit_pebbles_arbi = (event) => {
    multi_send_pebbles_arbitrum(addresses,amount_list)
  }
  

 

  return (
    <>
   <h2>
    Bistols- Multi Sender
   </h2>
    <form>
      <label>Enter List of Wallet Address:
        <textarea
          // type="textarea"
          value={addresses}
          onChange={(e) => set_addressess(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter Single Amount:  </label>
        <br></br>
        <input
          type="text" 
          value={amount_list}
          onChange={(e) => set_amount_list(e.target.value)}
        />
    
      <div>
        <label>
          Change network to cronos or arbitrum to send
        </label>
      <label> Change network to arbitrum </label>
      <br></br>
      <input type="button"  value={"sendd"} onClick={handleSubmit} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* //send pebbles Arbitrum */}
      <div>
      <label> Change network to arbitrum </label>
      <br></br>
      <input type="button"  value={"send pebbles Arbi "} onClick={handleSubmit_pebbles_arbi} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <label> Change network to Cronos </label>
      {/* //send pebbles cronos */}
      <input type="button"  value={"send pebble Cronos"} onClick={handleSubmit_pebbles_cronos} />
      <br></br>
      <input type="button" value={"connect"} placeholder='Connect Wallet ' onClick={connectToMetamask} />
    </form>
    <h7>
      Developed by enoch Daniel
    </h7>
    </>
  );
}

export default App;
