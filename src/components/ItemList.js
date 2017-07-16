// react
// component
// prop type
// from react
import React, { Component, PropTypes } from 'react';
// connect state and action, from react redux
import { connect } from 'react-redux';
// one of the action
import { itemsFetchData } from '../actions/items';

// component class item list, extends component
class ItemList extends Component {
    // when mount
    componentDidMount() {
      // where this fetch data
      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    //
    render() {
      // error
      if (this.props.hasErrored) {
          return <p>Sorry! There was an error loading the items</p>;
      }

      // loading
      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }

      //
      // item id and item label
      return (
          <ul>
              {this.props.items.map((item) => (
                  <li key={item.id}>
                      {item.label}
                  </li>
              ))}
          </ul>
      );
    }
}

// as you can see here
// the app complete state can have props
// and funcs
ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

// map state to attribute
const mapStateToProps = (state) => {
  // state
  return {
    // state has items
    items: state.items,
    // state has error
    hasErrored: state.itemsHasErrored,
    // state has loading
    isLoading: state.itemsIsLoading
  };
};

// map dispatch to attribute
const mapDispatchToProps = (dispatch) => {
  // send === dispatch
  return {
    // fetch as attribute
    // it is a func with url, then dispatch item fetch data (url)
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

// now export default
// connect attribute and func
// with this component item list
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
