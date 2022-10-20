import React from "react"
import { motion } from "framer-motion"

export default function MyPast() {
    return (
        <motion.div
            className="mypast-section"
            initial={{ y: 50, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8 }}
        >
            <h1 className="mypast-projects">
                What I did in my Jobs
            </h1>
            <p className="mypast-description">
                前職では機械学習用のデータ準備と評価などを行い、テキスト生成やテキスト分類用のAIモデルを作成していました。<br />
                実際に作ったAIモデルは、俳句を生成するモデルや不適切発言を自動で分類するためのモデルです。<br />
                開発を行うというよりかはデータアナリストとしての役割で、企画 → 分析 → 機械学習 といったサイクルの作業を行なっていました。<br />
                開発に関する知識が欠けていることで業務を遂行することの幾つも壁があったので、この度開発の案件に自分の身を置ける環境を探し始めました。<br />
                新卒の会社では、営業を経験しました。
            </p>
            <a href="https://www.resume.id/yujis">経歴などはこちらから確認できます。（RESUMEへ）</a>
        </motion.div>
    )
}