import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
}

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.props.paginate(page);
  };

  render() {
    const { itemsPerPage, totalItems } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => this.handlePageChange(i + 1)}
            className={this.state.currentPage === i + 1? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
