import React from "react"
import { motion } from "framer-motion"

export default function Title() {
    return (
        <div className="mypage-title">
            <motion.h1
                className='mypage-title-text'
                initial={{ y: 50, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}

            >
                Yujis Portfolio Page
            </motion.h1>
        </div>
    )
}