import React from 'react';

const categories = ['Design & Content', 'Layout & Structure', 'Experience', 'Accessibility'];

function CategorySelection({ onSelectCategory }) {
    return (
        <div>
            <h2>Select a Category</h2>
            <select onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">--Select a Category--</option>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategorySelection;
