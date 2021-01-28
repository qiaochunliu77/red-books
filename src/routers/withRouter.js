import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// 解决切换路由后，页面仍然停留在上一个页面的位置
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}
 
export default withRouter(ScrollToTop);