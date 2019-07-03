import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'

class Search extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  static defaultProps = {
    data: []
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  change (type, name, index1, index2) {
    const { change } = this.props
    if (change) {
      change(type, name, index1, index2)
    }
  }
  clickSearch = () => {
    const { clickSearch } = this.props
    if (clickSearch) {
      clickSearch()
    }
  }
  inputChange = (e) => {
    const value = e.target.value
    const { inputChange } = this.props
    if (inputChange) {
      inputChange(value)
    }
  }
  componentDidMount () {
    console.log(this)
  }
  render () {
    const { data } = this.props
    return (
      <div className="search">
        <div className="input-wrapper">
          <input type="text" placeholder="请输入产品需求" onChange={this.inputChange} />
        </div>
        <div className="type-wrapper">
          {
            data.map((item, index) => {
              if (item.type === 'checkbox' && item.isShow && item.list.length > 0) {
                return (
                  <div className="type-item" key={item.name + index}>
                    <h3>{item.name}</h3>
                    <div className="checkbox-group">
                      {
                        item.list.map((listItem, listIndex) => {
                          return (
                            <label key={listItem.name + listIndex}>
                              <input type="checkbox" checked={listItem.checked} onChange={this.change.bind(this, 'checkbox', item.name_en, index, listIndex)} />
                              <span>{listItem.name}</span>
                            </label>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              } else if (item.type === 'radio' && item.isShow && item.list.length > 0) {
                return (
                  <div className="type-item" key={item.name + index}>
                    <h3>{item.name}</h3>
                    <div className="checkbox-group">
                      {
                        item.list.map((listItem, listIndex) => {
                          return (
                            <label key={listItem.name + listIndex}>
                              <input type="radio" name={item.name_en} checked={listItem.checked} onChange={this.change.bind(this, 'radio', item.name_en, index, listIndex)} />
                              <span>{listItem.name}</span>
                            </label>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              } else { return null }
            })
          }
        </div>
        <div className="btn-wrapper">
          <button onClick={this.clickSearch}>搜索</button>
        </div>
      </div>
    );
  }
}

export default Search;