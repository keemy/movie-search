import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { mySyncAction1, myAsyncAction1 } from '../actions'
import Posts from '../components/Posts'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  handleChange() {
    this.props.mySyncAction1({});
  }

  handleRefreshClick(e) {
    e.preventDefault()

    this.props.myAsyncAction1({});
  }

  render() {
    let posts = [{title:"wowe"},{title:"wowsers"}]
    return (
      <div>
        swig swoog
        <Posts
          posts={posts}
        />
      </div>
    )
  }
}

App.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    mySyncAction1: (actionData) => {
      dispatch(mySyncAction1(actionData))
    },
    myAsyncAction1: (actionData) => {
      dispatch(myAsyncAction1(actionData))
    },
  };
}

export default connect(mapStateToProps)(App)
