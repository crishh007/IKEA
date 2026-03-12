import { useEffect } from 'react';

const useScrollReveal = (selector = '.reveal', options = {}) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            ...options
        });

        const elements = document.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [selector, options]);
};

export default useScrollReveal;
