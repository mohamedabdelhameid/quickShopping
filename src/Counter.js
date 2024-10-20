// import { type } from "@testing-library/user-event/dist/type";

const MULTIPLY = "MULTIPLY";
const DEVISION = "DEVISION";


export const MULTIPLy= () =>({
  type : MULTIPLY
});

export const dev= () =>({
  type : DEVISION
});
const reduc = (state={Count:1},action)=>{
  if(action.type =MULTIPLY){
    return{...state,Count:state.Count*4}
  }

}

export default reduc;