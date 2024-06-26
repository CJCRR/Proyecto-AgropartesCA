import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: Math.ceil(this.props.totalItems / this.props.itemsPerPage)
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.props.paginate(page);
  };

  handlePreviousPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.handlePageChange(currentPage - 1);
    }
  };

  handleNextPage = () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.handlePageChange(currentPage + 1);
    }
  };

  render() {
    const { itemsPerPage, totalItems } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    this.state.totalPages = totalPages;

    return (
      <div className="paginateBox">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" aria-label="Previous" onClick={this.handlePreviousPage}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li className={this.state.currentPage === i + 1? "active" : "page-item"} key={i} onClick={() => this.handlePageChange(i + 1)} ><a className="page-link" >{i + 1}</a></li>
          ))}
          <li className="page-item">
            <a className="page-link" aria-label="Next" onClick={this.handleNextPage}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;