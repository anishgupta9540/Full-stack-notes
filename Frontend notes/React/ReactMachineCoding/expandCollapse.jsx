// import React, { useState } from "react";

// const ExpandCollapse = () => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleExpand = () => {
//         setIsExpanded((prev) => !prev);
//     };

//     return (
//         <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
//             <button onClick={toggleExpand}>
//                 {isExpanded ? "Collapse" : "Expand"}
//             </button>

//             {isExpanded && (
//                 <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
//                     This is the content that expands and collapses!
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ExpandCollapse;

import React, { useState } from 'react';

const datas = [
    {
        id: 1,
        username: 'Anish',
    },
    {
        id: 2,
        username: 'Gupta',
    },
];

function App() {
    const [expand, setExpand] = useState(null); // start with null instead of false for ID comparison

    const handleExpand = (id) => {
        setExpand((prevId) => (prevId === id ? null : id));
    };

    return (
        <div>
            {datas.map((data) => {
                return (
                    <div key={data.id} onClick={() => handleExpand(data.id)}>
                        {data.id}
                        {expand === data.id && <p>{data.username}</p>}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
