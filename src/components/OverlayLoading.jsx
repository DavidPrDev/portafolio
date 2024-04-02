import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/OverlayLoading.css'

export const OverlayLoading = () => {
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isVisible && (
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: "#16161A",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        zIndex: 1040,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="loader">
                        <motion.img
                            className="loader__logo"
                            src="img/logo.png"
                            alt=""
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                delay: 1.3,
                                duration: 0.2,
                            }}
                        />

                        <div className="loader__wrapper">
                            <motion.div
                                className="loader__indicator"
                                initial={{ opacity: 0, x: -50, width: 80 }}
                                animate={{
                                    opacity: 1,
                                    x: 120,
                                    width: 100,
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 0.8,
                                    repeatType: "reverse",

                                }}
                            />

                        </div>
                    </div>

                </motion.div>
            )}
        </>
    );
};

