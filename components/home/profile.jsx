import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Profile() {

    return (
        <motion.div
            className="myprofile"
            initial={{ y: 50, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}

        >
            <Image
                src='/images/myimage.jpg'
                alt='myimage'
                width='300'
                height='300'
            />
            <h1 className='myname'>Yuji Sakata（坂田祐次）</h1>
            <p className="mydescription">
                バックエンドエンジニアを極めたいと熱望して、駆け出し始めた人です。<br />
                フロントを作ることも好きですが、裏でAPIやデータベースを見て、データの流れや溜まったデータを眺めるのが非常に好きです。<br />
                将来はデータサイエンスの分野に舞台を移して生活ロボットの研究をしたいと思っています。<br />
                現在の自分の力でも協力できることがあれば、是非とも協力させてください。
                <br />
            </p>
        </motion.div>
    )
}