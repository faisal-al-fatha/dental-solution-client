import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Dental Solution`;
    },[title])
}

export default useTitle;