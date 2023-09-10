// import React, { useState } from 'react';
// import { mockData } from './mock';

// const HeaderAndFilter = ({ categories, onCategoryChange }) => {
//     console.log("categories" + categories)
//     // Assuming 'Latest Articles' is the default category
//     const defaultCategory = 'Latest Articles';

//     const [searchCategory, setSearchCategory] = useState(defaultCategory);

//     // Calculate the most recent timestamps for each category
//     const categoryTimestamps = {};
//     categories.forEach((category) => {
//         const articlesInCategory = mockData.filter((article) => article.category === category);
//         console.log("articlesInCategory:" + articlesInCategory)
//         if (articlesInCategory.length > 0) {
//             const mostRecentArticle = articlesInCategory.reduce((prev, current) =>
//                 prev.timestamp > current.timestamp ? prev : current
//             );
//             categoryTimestamps[category] = mostRecentArticle.timestamp;
//         }
//     });

//     console.log("categoryTimestamps:" + categoryTimestamps)
//     // Sort the categories by timestamp and get the top three
//     const recentCategories = categories
//         .sort((a, b) => categoryTimestamps[b] - categoryTimestamps[a])
//         .slice(0, 5);

//     const handleCategoryChange = (category) => {
//         setSearchCategory(category);
//         onCategoryChange(category);
//     };

//     return (
//         <div className="flex items-center justify-between m-10 mb-8">
//             <h1 className="text-3xl font-semibold">Latest Articles</h1>
//             <div className="flex items-center">
//                 {recentCategories.map((category, index) => (
//                     <button
//                         key={index}
//                         className={`px-2 py-1 border rounded mr-2 group hover:bg-cards-light transition duration-300 ${
//                             searchCategory === category ? 'bg-blue-500 text-white' : ''
//                         }`}
//                         onClick={() => handleCategoryChange(category)}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HeaderAndFilter;



import React, { useState, useEffect } from 'react';
import { mockData } from './mock';

const HeaderAndFilter = ({ categories, onCategoryChange }) => {
    const defaultCategory = 'Latest Articles';
    const [searchCategory, setSearchCategory] = useState(defaultCategory);
    const [recentCategories, setRecentCategories] = useState([]); // Use state to hold recentCategories.

    useEffect(() => {
        const categoryTimestamps = {};

        categories.forEach((category) => {
            const articlesInCategory = mockData.filter((article) => article.category.toLowerCase() === category.toLowerCase());

            if (articlesInCategory.length > 0) {
                const mostRecentTimestamp = Math.max(...articlesInCategory.map((article) => article.timestamp));
                categoryTimestamps[category] = mostRecentTimestamp;
            }
        });

        const sortedCategories = categories.sort((a, b) => {
            return categoryTimestamps[b] - categoryTimestamps[a];
        });

        // Use setRecentCategories to update the state with the sorted categories.
        setRecentCategories(sortedCategories.slice(0, 3));

        setSearchCategory(defaultCategory);
    }, [categories]);

    const handleCategoryChange = (category) => {
        setSearchCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="flex items-center justify-between m-10 mb-8">
            <h1 className="text-3xl font-semibold">Latest Articles</h1>
            <div className="flex items-center">
                {recentCategories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 border rounded mr-2 group hover:bg-cards-light transition duration-300 ${
                            searchCategory.toLowerCase() === category.toLowerCase() ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeaderAndFilter;
