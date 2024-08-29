import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const commentData = {
    'Row 13': [
        "Home Screen: There is a known brand's logo in the testimonials section.",
        "About Page: The background image contains a copyrighted photo without proper licensing.",
        "Footer: An icon in the footer is a registered trademark, which may require permission for use.",
        "Services Page: The use of a brand's logo without permission in the 'Our Partners' section.",
        "Gallery Page: Images used appear to have watermarks from a stock photo site, indicating they are not properly licensed.",
        "Home Screen: The logo used is very similar to a famous brand, which may cause legal issues.",
        "Footer: The footer contains third-party images that may require permission for use.",
        "Gallery Page: Unlicensed images are used for product showcase."
    ],
    'Row 14': [
        "Home Page: The text color does not provide enough contrast against the background, making it hard to read.",
        "Services Page: The layout is inconsistent, with overlapping sections and misaligned text.",
        "Contact Us Page: Font size varies significantly across sections, disrupting the visual hierarchy.",
        "About Us Page: Poor alignment of images and text creates an unbalanced layout.",
        "Header: The logo and navigation links are not properly aligned, causing a visual imbalance.",
        "Home Page: The font size is inconsistent across different sections.",
        "Services Page: The header text is too small, making it difficult to read.",
        "Contact Us Page: The background image overlays text, reducing readability."
    ],
    'Row 15': [
        "Home Page: Navigation is not intuitive, users might struggle to find important sections.",
        "Services Page: Inconsistent button styles create confusion about clickable areas.",
        "Contact Us Page: Forms are not user-friendly, with fields poorly labeled or hard to interact with.",
        "Footer: Important links are buried in the footer, making them hard to find.",
        "Gallery Page: The grid layout is not consistent, leading to a disjointed user experience.",
        "Home Page: Navigation menu is hidden on mobile, making it hard to access.",
        "Services Page: Button styles are inconsistent across different pages.",
        "Gallery Page: Image captions are misaligned, affecting the layout."
    ],
    'Row 16': [
        "Services Page: On mobile, images overflow the viewport causing horizontal scrolling.",
        "Home Page: Text alignment issues on tablets cause content to be cut off.",
        "About Us Page: On small screens, the header overlaps with the main content.",
        "Footer: The footer layout breaks on mobile devices, causing misalignment of links.",
        "Gallery Page: Images are not responsive, leading to poor display on smaller screens.",
        "Home Page: The main banner is not responsive, causing layout issues.",
        "Services Page: Text overlaps on small screens, making it unreadable.",
        "About Us Page: Image galleries are not responsive, leading to layout problems."
    ],
    'Row 17': [
        "Home Page: Text content includes outdated or potentially offensive terminology.",
        "About Us Page: Some images include inappropriate content that may not be suitable for all audiences.",
        "Contact Us Page: A contact form field label is worded in a way that could be offensive.",
        "Services Page: Testimonials include customer names that may not have given consent for use.",
        "Footer: A disclaimer in the footer includes language that could be considered discriminatory.",
        "Home Page: The content includes potentially offensive jokes.",
        "About Us Page: Outdated terms are used, which may be considered insensitive.",
        "Footer: The privacy policy includes terms that could be seen as discriminatory."
    ],
    'Row 18': [
        "Home Page: Spelling error in the main headline, reducing professionalism.",
        "About Us Page: Several paragraphs contain grammatical errors that affect readability.",
        "Services Page: Inconsistent use of punctuation across different sections.",
        "Contact Us Page: An address is listed with incorrect spelling, leading to potential confusion.",
        "Footer: The company name is misspelled, which could lead to brand inconsistency.",
        "Home Page: Grammatical errors in the tagline affect credibility.",
        "About Us Page: The company’s name is misspelled multiple times.",
        "Footer: Inconsistent punctuation throughout the footer section."
    ],
    'Row 20': [
        "Home Page: The main hero section breaks layout on smaller screens.",
        "Services Page: Containers do not maintain proper spacing, causing content to appear cluttered.",
        "Gallery Page: The grid layout fails on certain breakpoints, leading to misalignment of images.",
        "Blog Section: Articles stack awkwardly on mobile devices, making the text difficult to read.",
        "Contact Us Page: The form fields are misaligned, causing a disjointed appearance.",
        "Home Page: Hero section does not adapt well to different screen sizes.",
        "Gallery Page: Grid layout breaks on tablets, causing images to misalign.",
        "Blog Section: Sidebar widgets overlap on smaller screens."
    ],
    'Row 21': [
        "Home Page: The header and footer are missing on the mobile version of the site.",
        "Services Page: The footer is not consistently displayed across all pages.",
        "About Us Page: The header does not resize properly on different screen sizes.",
        "Blog Section: The header covers the first section of content on tablet view.",
        "Gallery Page: The footer overlaps with content, making the bottom of the page unreadable.",
        "Home Page: The mobile version does not display the footer.",
        "Services Page: Header is missing on the tablet view.",
        "About Us Page: Footer disappears on small screen devices."
    ],
    'Row 22': [
        "Home Page: JavaScript errors prevent the site from loading properly.",
        "Services Page: Broken links within the page lead to 404 errors.",
        "Gallery Page: Image carousel fails to load on mobile, causing a poor user experience.",
        "Contact Us Page: Form submission errors occur without a clear error message.",
        "Footer: Social media icons are not clickable due to a broken script.",
        "Home Page: JavaScript error prevents the slider from loading.",
        "Services Page: Image gallery fails to load due to script error.",
        "Gallery Page: Video player fails to load on mobile devices."
    ],
    'Row 24': [
        "Home Page: The color palette does not follow brand guidelines, leading to inconsistency.",
        "Services Page: Typography styles are not uniform, causing a disjointed appearance.",
        "Contact Us Page: Button styles vary too much, leading to a lack of cohesion.",
        "About Us Page: Inconsistent use of iconography leads to a confusing user experience.",
        "Footer: The color scheme used in the footer clashes with the rest of the site.",
        "Home Page: Typography styles differ significantly between sections.",
        "Services Page: The primary color is not used consistently throughout the page.",
        "Contact Us Page: Iconography styles are inconsistent, causing a jarring visual experience."
    ],
    'Row 25': [
        "Home Page: Some images include text, which cannot be edited directly.",
        "Services Page: Buttons include text as part of the image, reducing accessibility.",
        "Gallery Page: Images with embedded text are not responsive, leading to display issues.",
        "Contact Us Page: Banner images contain text that is not readable on mobile devices.",
        "About Us Page: Infographics used as images contain vital information that is not accessible.",
        "Home Page: Embedded text in images cannot be edited.",
        "Services Page: Images with text are not optimized for small screens.",
        "About Us Page: Images with text do not scale properly on different devices."
    ],
    'Row 26': [
        "Home Page: Hover states on buttons are inconsistent, with some buttons lacking any visual feedback.",
        "Services Page: Links do not change color on hover, making it unclear that they are clickable.",
        "Gallery Page: Images do not zoom or change on hover, reducing interactivity.",
        "Contact Us Page: Submit button does not show hover state, making it seem unresponsive.",
        "Footer: Social media icons do not display any hover effects, leading to poor user experience.",
        "Home Page: Buttons do not have hover effects, making them feel static.",
        "Services Page: Links are missing hover states, leading to confusion.",
        "Footer: Hover effects are inconsistent across different sections."
    ],
    'Row 27': [
        "Home Page: Some links direct to incorrect or outdated pages.",
        "Services Page: Internal links are broken, leading to 404 error pages.",
        "Gallery Page: Images link to non-existent resources, causing errors.",
        "Contact Us Page: External links are not properly formatted, leading to errors.",
        "Footer: Some footer links are dead or lead to incorrect destinations.",
        "Home Page: Outdated links lead to 404 pages.",
        "Services Page: Some external links are not correctly formatted.",
        "Footer: Broken links in the footer lead to dead pages."
    ],
    'Row 28': [
        "Home Page: Navigation links do not direct to the correct sections on the page.",
        "Services Page: Some menu items do not correspond with the correct pages.",
        "Blog Section: Categories in the sidebar do not match the content.",
        "Gallery Page: Breadcrumbs do not reflect the correct page hierarchy.",
        "Footer: Footer navigation links do not correspond to the correct sections.",
        "Home Page: Breadcrumbs do not update based on the page hierarchy.",
        "Services Page: Menu links are incorrectly mapped to content.",
        "Gallery Page: Navigation links do not match the sections they lead to."
    ],
    'Row 29': [
        "Home Page: Custom fonts used are not supported on all devices.",
        "Services Page: The font family changes unexpectedly between sections.",
        "Contact Us Page: Non-standard fonts are used, leading to poor readability on some devices.",
        "About Us Page: The primary font is not loading correctly, defaulting to a generic font.",
        "Footer: Fonts used in the footer do not match the rest of the site.",
        "Home Page: Fonts fail to load properly on mobile devices.",
        "Services Page: The primary font is not recognized on some browsers.",
        "About Us Page: The default font is used in place of custom fonts."
    ],
    'Row 30': [
        "Home Page: The URL slug does not match the page title, causing SEO issues.",
        "Services Page: URLs are too long and not user-friendly.",
        "Blog Section: Permalinks are inconsistent, leading to confusion.",
        "Gallery Page: Some URLs include special characters, making them difficult to share.",
        "Contact Us Page: The URL structure does not follow best practices, affecting search engine ranking.",
        "Home Page: URLs are not optimized for SEO, leading to lower rankings.",
        "Services Page: Long URL slugs are difficult to remember and share.",
        "Gallery Page: Non-standard characters in URLs cause errors."
    ],
    'Row 32': [
        "Home Page: Font size for main content is below 12px, making it hard to read.",
        "Services Page: Some text elements fall below the minimum readable size.",
        "Gallery Page: Image captions are too small to be legible.",
        "About Us Page: Footnote text is below the minimum size requirement.",
        "Contact Us Page: The font size used in form labels is too small to be easily read.",
        "Home Page: Text in the footer is too small to be readable.",
        "Services Page: Font size does not meet accessibility standards.",
        "Gallery Page: Image captions are too small to read on mobile devices."
    ],
    'Row 33': [
        "Home Page: Background and text color combinations fail contrast requirements.",
        "Services Page: Buttons do not meet the minimum contrast ratio, making them hard to see.",
        "Gallery Page: Image overlays obscure text, failing contrast standards.",
        "About Us Page: Text over images does not meet contrast guidelines.",
        "Contact Us Page: Low contrast between form labels and background makes text difficult to read.",
        "Home Page: Low contrast makes the content difficult to read.",
        "Services Page: Background images reduce the contrast of text elements.",
        "About Us Page: Color scheme does not meet accessibility standards."
    ],
    'Row 34': [
        "Home Page: No H1 tag found on the page, affecting SEO.",
        "Services Page: Multiple H1 tags used on the page, reducing SEO effectiveness.",
        "Gallery Page: Important content is missing an H1 tag.",
        "About Us Page: The main heading is not marked as an H1 tag.",
        "Contact Us Page: H1 tag is used for non-essential content, reducing SEO impact.",
        "Home Page: Missing H1 tag on the main content.",
        "Services Page: Misuse of H1 tags throughout the page.",
        "About Us Page: Important sections lack proper H1 tags."
    ],
};

function CommentList({ row, searchTerm }) {
    if (!row) return null;

    const comments = commentData[row];

    const filteredComments = searchTerm
        ? comments.filter(comment =>
            comment.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : comments;

    return (
        <div>
            <h2 className="mb-4">Common Comments <FontAwesomeIcon icon={faCheckCircle} /></h2>
            <ul className="list-group">
                {filteredComments.length > 0 ? (
                    filteredComments.map((comment, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <span><FontAwesomeIcon icon={faCheckCircle} /> <u>{comment.split(":")[0]}:</u> {comment.split(":")[1]}</span>
                            <button className="btn btn-primary" onClick={() => navigator.clipboard.writeText(comment)}>
                                <FontAwesomeIcon icon={faCopy} /> Copy
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No comments found.</li>
                )}
            </ul>
        </div>
    );
}


export default CommentList;
