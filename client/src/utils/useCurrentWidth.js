import { useState, useEffect } from "react";

const getWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

const useCurrentWidth = () => {
    const [currentWidth, setCurrentWidth] = useState(getWidth())
    useEffect(() => {
        // timeout for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimout
            clearTimeout(timeoutId);
            // change wodth of the state object after 150 milliseconds
            timeoutId = setTimeout(() => setCurrentWidth(getWidth()), 150);
        }

        // set resize listener
        window.addEventListener('resize', resizeListener);

        //clean up function
        return () => {
            //remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return currentWidth;
}

export default useCurrentWidth;
