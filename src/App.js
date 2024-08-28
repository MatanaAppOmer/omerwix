import React, { useState } from 'react';
import './App.css';
import './styles.css';
import CategorySelection from './components/CategorySelection';
import RowSelection from './components/RowSelection';
import CommentList from './components/CommentList';

const fullTextData = {
    'Row 13': "The site doesn’t use any trademarked logos, branded content or copyrighted materials such as images, videos, music or custom fonts.",
    'Row 14': "The template demonstrates strong graphic design, following principles such as contrast, layout, typography, balance, hierarchy and proportion.",
    'Row 15': "The design follows UX/UI design principles, such as usability and consistency.",
    'Row 16': "The design looks great on all devices and breakpoints, and there is no horizontal scrolling on any breakpoint caused by elements falling outside of the viewport.",
    'Row 17': "The site contains no offensive or inappropriate content, as outlined in our content guidelines. The text and visuals are inclusive, appropriate for a general audience and free from discrimination against any identifiable group or person.",
    'Row 18': "All text is free from spelling and grammar errors.",
    'Row 20': "The main structure of the site uses layout units such as sections, containers, Grid, Stack or others, in a way that doesn’t break the layout or hide content across different breakpoints.",
    'Row 21': "All pages within the template contain a header and footer, with the exception of intro pages.",
    'Row 22': "The template is free of bugs.",
    'Row 24': "The template uses a cohesive, themed design system including a color palette, typography styles and design elements such as buttons.",
    'Row 25': "All text is fully editable. Images should not contain text, as text in images is not editable.",
    'Row 26': "Links and buttons have defined hover states to show that they are clickable.",
    'Row 27': "All links used within the template work and point to a valid URL.",
    'Row 28': "Pages listed in the navigation menu or footer link to their corresponding pages.",
    'Row 29': "The template only uses default or Google fonts included in Wix Studio—no custom fonts are used.",
    'Row 30': "Each page’s URL slug matches the page name.",
    'Row 32': "Text size minimum value is 12px.",
    'Row 33': "Background and font colors of all texts have enough contrast on all devices. Color contrast on small text and buttons is at least 4.5:1 and at least 3:1 on large text.",
    'Row 34': "For each page, uses H1 heading once on the page for the most important heading that describes the page content.",
};

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRow, setSelectedRow] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedRow('');  // Reset row selection when category changes
    };

    const handleRowSelect = (row) => {
        setSelectedRow(row);
    };

    return (
        <div className="App">
            <h1>Comment Bank</h1>
            <CategorySelection onSelectCategory={handleCategorySelect} />
            {selectedCategory && (
                <>
                    <RowSelection category={selectedCategory} onSelectRow={handleRowSelect} />
                    {selectedRow && (
                        <div className="full-text">
                            <h3>{selectedRow} Description</h3>
                            <p>{fullTextData[selectedRow]}</p>
                        </div>
                    )}
                </>
            )}
            {selectedRow && <CommentList row={selectedRow} />}
        </div>
    );
}

export default App;
