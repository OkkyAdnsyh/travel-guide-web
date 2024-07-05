const { useState, useEffect } = require("react")

const useWindowWidth = () => {
    const [screen, setScreen] = useState();

    useEffect(() => {

        if(window.innerWidth < 768){
            setScreen('mobile')
        } else if (window.innerWidth === 768){
            setScreen('tablet')
        } else {
            setScreen('desktop')
        }

        return () => {}
    }, [])

    return { screen }
}

export default useWindowWidth