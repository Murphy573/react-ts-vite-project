import welcome from '@/assets/images/welcome01.png'
import HomeStyle from './Home.module.less'
import classNames from 'classnames'

const Home = () => {
  return (
    <div
      className={classNames(
        HomeStyle.home,
        'a123',
        {
          bclass: true,
          cClass: false,
        },
        ['dclass', { eclass: null, fclass: 1 }]
      )}>
      <img src={welcome} alt="welcome" />
    </div>
  )
}

export default Home
