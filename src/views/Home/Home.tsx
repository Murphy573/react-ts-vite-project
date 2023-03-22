import welcome from '@/assets/images/welcome01.png'
import HomeStyle from './Home.module.less'

const Home = () => {
  return (
    <div className={HomeStyle.home}>
      <img src={welcome} alt="welcome" />
    </div>
  )
}

export default Home
