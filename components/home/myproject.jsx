import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function MyProject() {
    return (
        <motion.div
            className="myproject-section"
            initial={{ y: 50, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
        >
            <div className="myproject-intro">
                <h1 className="myproject-title">
                    My Projects
                </h1>
            </div>
            <div className="row">
                <div className="column1">
                    <h2 className="todoapp">
                        todo app (Typescript, Django)
                    </h2>
                    <a className="project"
                        href="https://typescript-django-todoapp0110.herokuapp.com"
                    >
                        <Image
                            className="site_image"
                            src='/images/todoapp.png'
                            width='500'
                            height='300'
                        />
                    </a>
                    <p className="todo-desription">
                        フロントをTypeScriptで、バックエンドをDjangoで作成しています。<br />
                        普段の簡単な作業管理を自分のアプリで管理したいと思い、作成しました。
                    </p>
                </div>
                <div className="column2">
                    <h2 className="blog">
                        blog app (Django)
                    </h2>
                    <a className="project"
                        href="https://yujis-blog-djangoapp-0110.herokuapp.com">
                        <Image
                            className="site_image"
                            src='/images/blog.png'
                            width='600'
                            height='300'
                        />
                    </a>
                    <p className="blog-desription">
                        フロント、バックエンド共にDjangoのみで作成しています。<br />
                        チュートリアルを見ながら、初めて公開アプリを作成しました。
                    </p>
                </div>
            </div>
        </motion.div>
    )
}