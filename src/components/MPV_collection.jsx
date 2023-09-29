import { mvpData } from "../constants/index";
import Button from "./Button";


const MPV_collection = () => {
 return (
   <>
     <div className="flex flex-col">
       <p className="pb-4">Don't miss</p>
       <div className="grid grid-cols-2 gap-0">
         {mvpData.map((item, index) => (
           <img
             key={index}
             className="w-[100%] h-[100%]"
             src={item.url}
             alt=""
           />
         ))}
       </div>
       <h1 title="hello" className="text-center mt-10">
         MVP COLLECTION
       </h1>
       <p className="text-primary text-center">
         Elevate your look with our MVP collection - a striking blend of bold
         colors and classic styles
       </p>
       <div className="flex justify-center my-10">
         <Button name={"More"} roundedFull />
       </div>
     </div>
   </>
 );
};

export default MPV_collection;