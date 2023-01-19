import React from 'react'
import styles from './css_modules/FadeIn.module.css'

export default function FadeIn({ children }) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        }, { rootMargin: "0px", threshold: 0 });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div ref={domRef} className={`${styles["fade-in"]} ${isVisible ? styles["is-visible"] : ""}`}>
            { children }
        </div>
    )
}
