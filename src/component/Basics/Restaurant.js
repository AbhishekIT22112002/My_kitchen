import React ,{useState} from 'react'
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from './Navbar';

const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
        return curElem.category;
    })),
    "All",
];

const Restaurant = () => {
    const[menuData,setMenuData] = useState(Menu);
    const[MenuList,SetMenuList] = useState(uniqueList);

    const filterItem = (category) =>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>
        {
            return curElem.category === category;
        });
        setMenuData(updatedList);

    };
  return (
    <>
    <Navbar filterItem={filterItem} MenuList={MenuList}/>
    <MenuCard menuData={menuData}/>
    
    </>
  )
}

export default Restaurant;