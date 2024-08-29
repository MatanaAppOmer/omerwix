import React from 'react';

function SearchBar({ onSearch }) {
    const handleInputChange = (e) => {
        onSearch(e.target.value); // Pass the input value up to the parent
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search comments..."
                className="form-control"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
