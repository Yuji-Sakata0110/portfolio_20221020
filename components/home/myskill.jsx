import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function MySkill() {
    return (
        <motion.div
            className="myskills"
            initial={{ y: 50, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="skill">
                <h1 className="skill-title">
                    MySkills
                </h1>
            </div>
            <div className="Programming">
                <ul className="languages">
                    <li className="language"><Image src='/images/Python.png' className="language" alt='' width='200' height='200' /></li>
                    <li className="language"><Image src='/images/django.png' className="language" alt='' width='200' height='200' /></li>
                    <li className="language"><Image src='/images/MySql.png' className="language" alt='' width='200' height='200' /></li>
                    <li className="language"><Image src='/images/Typescript.png' className="language" alt='' width='200' height='200' /></li>
                    <li className="language"><Image src='/images/React.jpg' className="language" alt='' width='200' height='200' /></li>
                </ul>
            </div>
            <div className="myskill-description">
                <p className="programming-description">
                    現在Python・Javascript・MySQLを中心に利用し、WEB開発を行なっています。<br />
                    一番得意な言語はPythonです。前職でデータ処理やデータ加工のために利用していました。<br />
                    ExcelやCSVファイルに書き起こす処理を結構やっていたこともあって、Pythonの構文などには慣れています。<br />
                    Javascriptは、今後もかなり活躍が期待できるフロントサイドの言語ということで開発をしながら学んでいます。<br />
                    こちらのポートフォリオはNext.jsを利用しています。<br />
                    データベース言語はMySQLを利用し、開発することが現状多いです。
                </p>
            </div>
        </motion.div>
    )
}