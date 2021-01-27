import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
      initialPage: 1
    };
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.state.initialPage);
      this.setState({
        pageSize: this.props.pageSize
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.state.initialPage);
    }
  }

  setPage = page => {
    let { items, pageSize } = this.props;
    let pager = this.state.pager;

    pager = this.getPager(items.length, page, pageSize);

    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager: pager });

    this.props.onChangePage(pageOfItems);
  };

  getPager = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;

    pageSize = pageSize || 10;

    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  render() {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (

      <div className="pagination">
        <div className="pagination__position">
          <span>{((pager.currentPage - 1) * 6) === 0 ? 1 : (pager.currentPage - 1) * 6}</span>
          <span>-</span>
          <span>{pager.totalItems > pager.currentPage * 6 ? pager.currentPage * 6 : pager.totalItems}</span>
          <span className="pagination__position-opasity"> out of </span>
          <span className="pagination__position-opasity">{pager.totalItems}</span>
        </div>
        <ul className="pagination__list">
          <li className="pagination__list-item">
            <button 
              className={"pagination__list-item_btn " + (pager.currentPage === 1 ? 'disabled' : null)}
              disabled={pager.currentPage === 1}
              onClick={() => this.setPage(pager.currentPage - 1)}
            >
              Previous
            </button>
          </li>
          <li className="pagination__list-item">
            <button
              className={"pagination__list-item_btn " + (pager.currentPage === pager.totalPages ? 'disabled' : null)}
              disabled={pager.currentPage === pager.totalPages}
              onClick={() => this.setPage(pager.currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>

    );
  }
}

export default Pagination;
