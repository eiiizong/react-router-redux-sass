import React, { Component } from 'react';
// import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Search from '../../components/Search'
import axios from '../../utils/axios';
import qs from 'qs';

class SearchContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    city: PropTypes.array.isRequired,
    cate: PropTypes.array.isRequired,
    isLinkToOtherPages: PropTypes.bool.isRequired
  }
  static defaultProps = {
    history: {},
    city: [],
    cate: []
  }
  constructor(props) {
    super(props);
    this.state = {
      // 选中的条件
      active: {},
      data: [
        {
          name: '城市',
          name_en: 'city_name',
          type: 'checkbox',
          isShow: true,
          list: []
        },
        {
          name: '场景分类',
          name_en: 'cate',
          type: 'checkbox',
          isShow: true,
          list: []
        },
        {
          name: '细分场景',
          name_en: 'scene',
          type: 'checkbox',
          isShow: true,
          list: []
        },
        {
          name: '需求类别',
          name_en: 'request_type',
          type: 'checkbox',
          isShow: true,
          list: []
        },
        {
          name: '需求供给',
          name_en: 'type',
          type: 'radio',
          isShow: true,
          list: [
            {
              name: '需求',
              checked: false
            },
            {
              name: '供给',
              checked: false
            }
          ]
        },
        {
          name: '企业政府',
          name_en: 'nature',
          type: 'radio',
          isShow: false,
          list: [
            {
              name: '政府',
              checked: false
            },
            {
              name: '企业',
              checked: false
            }
          ]
        }
      ]
    }
  }
  componentWillReceiveProps (props) {
    const { city, cate } = props
    let data = [...this.state.data]
    if (city) {
      data[0].list = city
    }
    if (cate) {
      data[1].list = cate
    }
    this.setState({
      data
    })
  }
  change = (type, name, index1, index2) => {
    const data = [...this.state.data]
    let active = { ...this.state.active }
    if (type === 'checkbox') {
      // 取反
      data[index1].list[index2].checked = !data[index1].list[index2].checked
      // 收集选中
      data.forEach(item => {
        if (item.type === 'checkbox') {
          active[item['name_en']] = []
          item.list.forEach(e => {
            if (e.checked) {
              active[item['name_en']].push(e.name)
            }
          })
        }
      })
      // 检测成都市 显示企业政府
      console.log(active['city_name'].join().indexOf('成都市'))
      if (active['city_name'].join().indexOf('成都市') !== -1) {
        data.forEach(item => {
          if (item.name_en === 'nature') {
            item.isShow = true
          }
        })
      } else {
        data.forEach(item => {
          if (item.name_en === 'nature') {
            item.isShow = false
          }
        })
      }
    } else {
      data[index1].list.forEach((item, index) => {
        if (index2 === index) {
          item.checked = true
        } else {
          item.checked = false
        }
      })
      data.forEach(item => {
        if (item.type === "radio") {
          item.list.forEach((e, i) => {
            if (e.checked) {
              active[item['name_en']] = i + 1
            }
          })
        }
      })
    }

    this.setState({
      data,
      active
    }, () => {
      if (name === 'city_name' || name === 'cate') {
        const { city_name, cate } = this.state.active
        this.requestSearch(city_name.join(), cate.join())
      }
    })
    console.log(type, index1, index2)
  }
  requestSearch (city_name, cate) {
    const data = {
      city_name,
      cate
    }
    axios.post('/list/searchList', qs.stringify(data)).then(res => {
      if (res.status === 200 && res.data.status === "200") {
        const { request_type, scene } = res.data
        const data = [...this.state.data]
        if (request_type) {
          data[3].list = request_type.map(item => {
            return {
              name: item,
              checked: false
            }
          })
        }
        if (scene) {
          data[2].list = scene.map(item => {
            return {
              name: item,
              checked: false
            }
          })
        }
        this.setState({
          data
        })
        console.log(request_type, scene)
      }
    })
  }
  clickSearch = () => {
    const { isLinkToOtherPages } = this.props
    const { keyword = '', city_name = [], cate = [], nature = '', type = '', request_type = [], scene = [] } = this.state.active
    if (isLinkToOtherPages) {
      const { history } = this.props
      const url = {
        pathname: `/list?keyword=${keyword}&city_name=${city_name.join()}&nature=${nature}&type=${type}&cate=${cate.join()}&request_type=${request_type.join()}&scene=${scene.join()}`
      }
      history.push(url)
    } else {
      const { currentPageSearch } = this.props
      currentPageSearch(keyword, city_name.join(), cate.join(), nature, type, request_type.join(), scene.join())
    }
  }
  inputChange = (e) => {
    const active = { ...this.state.active }
    active.keyword = e;
    this.setState({
      active
    })
  }

  render () {
    const { data } = this.state
    return (
      <Search data={data} change={this.change} clickSearch={this.clickSearch} inputChange={this.inputChange}></Search>
    );
  }
}


export default SearchContainer