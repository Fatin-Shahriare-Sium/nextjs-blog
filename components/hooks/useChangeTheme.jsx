import {useState} from 'react'
let useChangeTheme=()=>{
    let[dark,setDark]=useState(true)
    let changeTheme=()=>{
        let root=document.documentElement
        let preBackColor=root.style.getPropertyValue('--back-color')
        console.log('preBackColor',preBackColor);
        if(preBackColor=='#000000' || preBackColor==''){
            root.style.setProperty('--back-color','#ffffff')
            root.style.setProperty('--text-color','#000000')
        }else{
            root.style.setProperty('--back-color','#000000')
            root.style.setProperty('--text-color','#ffffff')
        }
        setDark(pre=>!pre)
    }
    return {dark,changeTheme}
}
export default useChangeTheme;