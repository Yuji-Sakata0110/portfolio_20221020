import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Sns() {
    return (
        <motion.div
            className="sns-section"
            initial={{ y: 50, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.0 }}
        >
            <h1 className="sns-para">My SNS Accounts</h1>
            <div className="accounts">
                <ul className="sns-accounts">
                    <li className="sns-account">
                        <Link href='https://github.com/Yuji-Sakata0110'>
                            <a>
                                <Image
                                    className="site_image"
                                    src='/images/github.png'
                                    alt='github'
                                    width='200'
                                    height='200'
                                />
                            </a>
                        </Link>
                    </li>
                    <li className="sns-account">
                        <Link href='https://qiita.com/Yuji-Sakata0110'>
                            <a>
                                <Image
                                    className="site_image"
                                    src='/images/qiita.jpg'
                                    alt='qiita'
                                    width='200'
                                    height='200'
                                />
                            </a>
                        </Link>
                    </li>
                    <li className="sns-account">
                        <Link href='https://twitter.com/yujis_dev_x20a'>
                            <a>
                                <Image
                                    className="site_image"
                                    src='/images/twitter.png'
                                    alt='twitter'
                                    width='200'
                                    height='200'
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sns-account-description">
                <p className="sns-account-description-text">
                    GitHub・Qiita・Twitterを活用し情報発信し始めています。<br />
                    今後は開発案件や自分の個人プロジェクトを通して学んだことをどんどん発信して、日本のエンジニア情報界に貢献したいとも思っています。<br />
                    今回作成したPortfolioは、<a href="https://github.com/Yuji-Sakata0110/portfolio_20221020" alt="link to this project github">こちら</a>からコードを確認できます。
                </p>
            </div>
        </motion.div>
    )
}