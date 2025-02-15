import { useEffect, useState } from "react";

const UseIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only set to true if the element is intersecting and the state is currently false
                if (entry.isIntersecting && !isIntersecting) {
                    setIntersecting(true);
                }
            },
            {
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, isIntersecting]); // Add isIntersecting to the dependency array

    return isIntersecting;
}

export default UseIsVisible;