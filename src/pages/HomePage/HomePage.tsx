import { Popup } from "@/components/Popup";
import { Menu } from "../../components/Menu";
import { Pagination } from "@/components/Pagination";


export const HomePage : React.FC = () =>{
  return (
    <div>
      <Menu/>
      <Popup/>
      <div style={{position:"absolute",bottom:20,left:"25%",right:"25%",zIndex:9,backgroundColor:"black",borderRadius:"20px",}}>
        <Pagination/>
      </div>
    </div>
  );
};