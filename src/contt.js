import { useDispatch, useSelector } from "react-redux";
import { dev, MULTIPLy } from "./Counter";


function Countter(){
  const Countt = useSelector((state)=>state.Count)
    const dis = useDispatch();
    return(
      <>
        <p>{Countt}</p>
        <button onClick={()=>{
          dis(MULTIPLy())
        }}>Multiply</button>
        <button onClick={()=>{
          dis(dev())
        }}>Devision</button>
      </>
    )
  

}

export default Countter;

