// import React, { useState } from 'react';
// // import './App.css';

// const App = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;
//     const totalItems = 25; // Example total number of items

//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const getItemsForCurrentPage = () => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         return Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`).slice(
//             startIndex,
//             endIndex
//         );
//     };

//     const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//     return (
//         <div className="App">
//             <h1>Pagination Example</h1>
//             <ul>
//                 {getItemsForCurrentPage().map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>
//             <div className="pagination">
//                 {pageNumbers.map((number) => (
//                     <button
//                         key={number}
//                         onClick={() => handlePageChange(number)}
//                         disabled={currentPage === number}
//                     >
//                         {number}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default App;
// --------------------------------------------------------------------
import React, { useState } from "react";

const PaginationExample = () => {
    const data = [
        { id: 1, name: "Item 1", value: 10 },
        { id: 2, name: "Item 2", value: 20 },
        { id: 3, name: "Item 3", value: 30 },
        { id: 4, name: "Item 4", value: 40 },
        { id: 5, name: "Item 5", value: 50 },
        { id: 6, name: "Item 6", value: 60 },
        { id: 7, name: "Item 7", value: 70 },
        { id: 8, name: "Item 8", value: 80 },
        { id: 9, name: "Item 9", value: 90 },
        { id: 10, name: "Item 10", value: 100 },
        { id: 11, name: "Item 11", value: 110 },
        { id: 12, name: "Item 12", value: 120 },
        { id: 13, name: "Item 13", value: 130 },
        { id: 14, name: "Item 14", value: 140 },
        { id: 15, name: "Item 15", value: 150 },
        { id: 16, name: "Item 16", value: 160 },
        { id: 17, name: "Item 17", value: 170 },
        { id: 18, name: "Item 18", value: 180 },
        { id: 19, name: "Item 19", value: 190 },
        { id: 20, name: "Item 20", value: 200 },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Slice the data based on the current page
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Pagination Example</h2>
            <ul>
                {currentData.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.value}
                    </li>
                ))}
            </ul>
            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        style={{ margin: "0 5px", backgroundColor: page === currentPage ? "gray" : "" }}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationExample;
