import React from 'react';

const rowData = {
    'Design & Content': [
        { id: 'Row 13', text: "No trademarked logos or copyrighted materials." },
        { id: 'Row 14', text: "Strong graphic design principles." },
        { id: 'Row 15', text: "Follows UX/UI design principles." },
        { id: 'Row 16', text: "Design looks great on all devices." },
        { id: 'Row 17', text: "No offensive or inappropriate content." },
        { id: 'Row 18', text: "Free from spelling and grammar errors." },
    ],
    'Layout & Structure': [
        { id: 'Row 20', text: "Maintains layout integrity across devices." },
        { id: 'Row 21', text: "Header and footer are present on all pages." },
        { id: 'Row 22', text: "The template is free of bugs." },
    ],
    'Experience': [
        { id: 'Row 24', text: "Consistent design system used." },
        { id: 'Row 25', text: "Text is fully editable." },
        { id: 'Row 26', text: "Hover states indicate clickable elements." },
        { id: 'Row 27', text: "All links work and point to valid URLs." },
        { id: 'Row 28', text: "Navigation links correspond to pages." },
        { id: 'Row 29', text: "Only default or Google fonts used." },
        { id: 'Row 30', text: "URL slug matches the page name." },
    ],
    'Accessibility': [
        { id: 'Row 32', text: "Text size is 12px or larger." },
        { id: 'Row 33', text: "Text and background colors have sufficient contrast." },
        { id: 'Row 34', text: "Each page uses a single H1 heading." },
    ],
};

function RowSelection({ category, onSelectRow }) {
    if (!category) return null;

    const rows = rowData[category];

    return (
        <div>
            <h2>Select a Row</h2>
            <select onChange={(e) => onSelectRow(e.target.value)}>
                <option value="">--Select a Row--</option>
                {rows.map(row => (
                    <option key={row.id} value={row.id}>
                        {row.id}: {row.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default RowSelection;
