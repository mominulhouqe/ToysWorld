import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} -ToysWorld`;
    },[title])
}

export default useTitle;