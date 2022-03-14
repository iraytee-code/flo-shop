import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumbers:", pageNumbers);
  return (
    <div>
      <footer className="d-flex justify-content-center align-items-center py-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item px-2">
              <a
                className="page-link"
                aria-label="Previous"
                onClick={() => paginate(pageNumbers[0])}
              >
                <i className="fa fa-step-backward" aria-hidden="true" />
              </a>
            </li>
            <li className="page-item px-2">
              <a className="page-link" href="#" aria-label="Previous">
                <i className="fa fa-step-backward" aria-hidden="true" />
              </a>
            </li>

            <li className="page-item px-2  d-flex">
              {pageNumbers.map((item) => {
                return (
                  <a className="page-link mx-2" onClick={() => paginate(item)}>
                    {item}
                  </a>
                );
              })}
            </li>
            <li className="page-item px-2">
              <a className="page-link" href="#" aria-label="Next">
                <i className="fa fa-step-forward" aria-hidden="true" />
              </a>
            </li>
            <li className="page-item px-2">
              <a
                className="page-link"
                aria-label="Next"
                onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
              >
                <i className="fa fa-step-forward" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Pagination;
