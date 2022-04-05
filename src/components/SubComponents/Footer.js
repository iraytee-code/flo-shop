import React from "react";

const Footer = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer className="d-flex justify-content-center align-items-center py-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item px-2">
            <a className="page-link" href="#0" aria-label="Previous">
              <i className="fa fa-step-backward" aria-hidden="true" onClick={() => paginate(pageNumbers[0])}/>
            </a>
          </li>
          <li className="page-item px-2">
            <a className="page-link" href="#0" aria-label="Previous"  onClick={() => paginate(pageNumbers[0])}>
              <i className="fa fa-step-backward" aria-hidden="true" />
            </a>
          </li>
          <li className="page-item px-2 d-flex">
            {pageNumbers.map((number) => {
              return (
                <a
                  className="page-link"
                  href="#0"
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              );
            })}
          </li>
          <li className="page-item px-2">
            <a className="page-link" href="#0" aria-label="Next">
              <i className="fa fa-step-forward" aria-hidden="true" onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}/>
            </a>
          </li>
          <li className="page-item px-2">
            <a className="page-link" href="#0" aria-label="Next">
              <i className="fa fa-step-forward" aria-hidden="true" onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
