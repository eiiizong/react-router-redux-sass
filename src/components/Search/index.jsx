import React, { Component } from 'react';

import './index.scss'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'E'
    }
  }
  render () {
    return (
      <div className="search">
        <div className="input-wrapper">
          <input type="text" placeholder="请输入产品需求" />
        </div>
        <div className="type-wrapper">
          <div className="type-item">
            <h3>城市</h3>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
            </div>
          </div>
          <div className="type-item">
            <h3>城市</h3>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
            </div>
          </div>
          <div className="type-item">
            <h3>城市</h3>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
            </div>
          </div>
          <div className="type-item">
            <h3>城市</h3>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
            </div>
          </div>
          <div className="type-item">
            <h3>城市</h3>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                <span>item</span>
              </label>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <button>搜索</button>
        </div>
      </div>
    );
  }
}

export default Search;