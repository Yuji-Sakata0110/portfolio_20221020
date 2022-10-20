// components import
import Navigation from '../components/common/nav'
import HeadSection from '../components/common/head'
import Title from '../components/home/title'
import Profile from '../components/home/profile'
import MyProject from '../components/home/myproject'
import MySkill from '../components/home/myskill'
import MyPast from '../components/home/mypast'
import Sns from '../components/home/sns'
import Footer from '../components/common/footer'

// jsfileにmotionモジュールをよみこむ

export default function Home() {

  return (
    <div className='content'>
      <HeadSection />

      <header>
        <Navigation />
      </header>

      <div className="container">

        <main>

          <Title />
          <Profile />
          <MyProject />
          <MySkill />
          <MyPast />
          <Sns />

        </main >

      </div >

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
