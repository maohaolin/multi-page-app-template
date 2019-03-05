/**
 * @author Lem
 * @date 2019-3-4
 * @desc 
 */
import Nerv from 'nervjs'
// import { getList } from '@/common/api/home';

import './home.scss'

class Home extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
    // this.getData()
  }

  render () {
    return (
      <div className='home'>
        Hello Home!
      </div>
    )
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }

  // getData() {
  //   getList()
  // }
}

Nerv.render(<Home />, document.getElementById('J_container'))
