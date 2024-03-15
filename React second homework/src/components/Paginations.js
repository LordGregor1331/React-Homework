import React from "react";

const Color = ({page}) => {
    return(
    <div style={{color: `rgb(${page * 16}, ${page * 16}, ${page * 16})`}}>{page}</div>
    )
}
const Pagination = ({render, max}) => {
    const Render = render
    const [currentPage, setCurrentPage] = React.useState(1)
    const goToPage = (page) => {
        if (page >= 1 && page <= max) {
            setCurrentPage(page)
        }
    }
    const goBack = () => {
        goToPage(currentPage - 1)
    }
    const goForward = () => {
        goToPage(currentPage + 1)
    }
    const goToFirstPage = () => {
        goToPage(1)
    }
    const goToLastPage = () => {
        goToPage(max)
    }
    const pages = []
    for (let i = 1; i <= max; i++) {
        pages.push(
            <button key={i} onClick={() => goToPage(i)}>
                {i}
            </button>
        )
    }
    return (
        <div>
        <Render page={currentPage} />
        <div className="pagination">
          <button onClick={goToFirstPage}>«</button>
          <button onClick={goBack}>‹</button>
          {pages}
          <button onClick={goForward}>›</button>
          <button onClick={goToLastPage}>»</button>
        </div>
      </div>
    )
}
export default Pagination
