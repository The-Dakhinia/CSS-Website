"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 1,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={
                                `${wordsArray[0] == 'Cultural' ?
                                    idx < 2 ? 'text-violet-500' : 'dark:text-white text-black'
                                    :
                                    idx < 3 ? 'text-violet-500' : 'dark:text-white text-black'
                                }
                                opacity-0`
                            }
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className={`${wordsArray[0] === "Unleash" ? 'text-1xl' : 'text-6xl'} dark:text-white text-black  leading-snug tracking-wide font-bold`}>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
