import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const commentData = {
    'Row 13': [
        "Home Screen: There is a known brand's logo in the testimonials section.",
        "About Page: The background image contains a copyrighted photo without proper licensing.",
        "Footer: An icon in the footer is a registered trademark, which may require permission for use.",
        "Services Page: The use of a brand's logo without permission in the 'Our Partners' section.",
        "Gallery Page: Images used appear to have watermarks from a stock photo site, indicating they are not properly licensed."
    ],
    'Row 14': [
        "Home Page: The text color does not provide enough contrast against the background, making it hard to read.",
        "Services Page: The layout is inconsistent, with overlapping sections and misaligned text.",
        "Contact Us Page: Font size varies significantly across sections, disrupting the visual hierarchy.",
        "About Us Page: Poor alignment of images and text creates an unbalanced layout.",
        "Header: The logo and navigation links are not properly aligned, causing a visual imbalance."
    ],
    'Row 15': [
        "Home Page: Navigation is not intuitive, users might struggle to find important sections.",
        "Services Page: Inconsistent button styles create confusion about clickable areas.",
        "Contact Us Page: Forms are not user-friendly, with fields poorly labeled or hard to interact with.",
        "Footer: Important links are buried in the footer, making them hard to find.",
        "Gallery Page: The grid layout is not consistent, leading to a disjointed user experience."
    ],
    'Row 16': [
        "Services Page: On mobile, images overflow the viewport causing horizontal scrolling.",
        "Home Page: Text alignment issues on tablets cause content to be cut off.",
        "About Us Page: On small screens, the header overlaps with the main content.",
        "Footer: The footer layout breaks on mobile devices, causing misalignment of links.",
        "Gallery Page: Images are not responsive, leading to poor display on smaller screens."
    ],
    'Row 17': [
        "Home Page: Text content includes outdated or potentially offensive terminology.",
        "About Us Page: Some images include inappropriate content that may not be suitable for all audiences.",
        "Contact Us Page: A contact form field label is worded in a way that could be offensive.",
        "Services Page: Testimonials include customer names that may not have given consent for use.",
        "Footer: A disclaimer in the footer includes language that could be considered discriminatory."
    ],
    'Row 18': [
        "Home Page: Spelling error in the main headline, reducing professionalism.",
        "About Us Page: Several paragraphs contain grammatical errors that affect readability.",
        "Services Page: Inconsistent use of punctuation across different sections.",
        "Contact Us Page: An address is listed with incorrect spelling, leading to potential confusion.",
        "Footer: The company name is misspelled, which could lead to brand inconsistency."
    ],
    'Row 20': [
        "Home Page: The main hero section breaks layout on smaller screens.",
        "Services Page: Containers do not maintain proper spacing, causing content to appear cluttered.",
        "Gallery Page: The grid layout fails on certain breakpoints, leading to misalignment of images.",
        "Blog Section: Articles stack awkwardly on mobile devices, making the text difficult to read.",
        "Contact Us Page: The form fields are misaligned, causing a disjointed appearance."
    ],
    'Row 21': [
        "Home Page: The header and footer are missing on the mobile version of the site.",
        "Services Page: The footer is not consistently displayed across all pages.",
        "About Us Page: The header does not resize properly on different screen sizes.",
        "Blog Section: The header covers the first section of content on tablet view.",
        "Gallery Page: The footer overlaps with content, making the bottom of the page unreadable."
    ],
    'Row 22': [
        "Home Page: JavaScript errors prevent the site from loading properly.",
        "Services Page: Broken links within the page lead to 404 errors.",
        "Gallery Page: Image carousel fails to load on mobile, causing a poor user experience.",
        "Contact Us Page: Form submission errors occur without a clear error message.",
        "Footer: Social media icons are not clickable due to a broken script."
    ],
    'Row 24': [
        "Home Page: The color palette does not follow brand guidelines, leading to inconsistency.",
        "Services Page: Typography styles are not uniform, causing a disjointed appearance.",
        "Contact Us Page: Button styles vary too much, leading to a lack of cohesion.",
        "About Us Page: Inconsistent use of iconography leads to a confusing user experience.",
        "Footer: The color scheme used in the footer clashes with the rest of the site."
    ],
    'Row 25': [
        "Home Page: Some images include text, which cannot be edited directly.",
        "Services Page: Buttons include text as part of the image, reducing accessibility.",
        "Gallery Page: Images with embedded text are not responsive, leading to display issues.",
        "Contact Us Page: Banner images contain text that is not readable on mobile devices.",
        "About Us Page: Infographics used as images contain vital information that is not accessible."
    ],
    'Row 26': [
        "Home Page: Hover states on buttons are inconsistent, with some buttons lacking any visual feedback.",
        "Services Page: Links do not change color on hover, making it unclear that they are clickable.",
        "Gallery Page: Images do not zoom or change on hover, reducing interactivity.",
        "Contact Us Page: Submit button does not show hover state, making it seem unresponsive.",
        "Footer: Social media icons do not display any hover effects, leading to poor user experience."
    ],
    'Row 27': [
        "Home Page: Some links direct to incorrect or outdated pages.",
        "Services Page: Internal links are broken, leading to 404 error pages.",
        "Gallery Page: Images link to non-existent resources, causing errors.",
        "Contact Us Page: External links are not properly formatted, leading to errors.",
        "Footer: Some footer links are dead or lead to incorrect destinations."
    ],
    'Row 28': [
        "Home Page: Navigation links do not direct to the correct sections on the page.",
        "Services Page: Some menu items do not correspond with the correct pages.",
        "Blog Section: Categories in the sidebar do not match the content.",
        "Gallery Page: Breadcrumbs do not reflect the correct page hierarchy.",
        "Footer: Footer navigation links do not correspond to the correct sections."
    ],
    'Row 29': [
        "Home Page: Custom fonts used are not supported on all devices.",
        "Services Page: The font family changes unexpectedly between sections.",
        "Contact Us Page: Non-standard fonts are used, leading to poor readability on some devices.",
        "About Us Page: The primary font is not loading correctly, defaulting to a generic font.",
        "Footer: Fonts used in the footer do not match the rest of the site."
    ],
    'Row 30': [
        "Home Page: The URL slug does not match the page title, causing SEO issues.",
        "Services Page: URLs are too long and not user-friendly.",
        "Blog Section: Permalinks are inconsistent, leading to confusion.",
        "Gallery Page: Some URLs include special characters, making them difficult to share.",
        "Contact Us Page: The URL structure does not follow best practices, affecting search engine ranking."
    ],
    'Row 32': [
        "Home Page: Font size for main content is below 12px, making it hard to read.",
        "Services Page: Some text elements fall below the minimum readable size.",
        "Gallery Page: Image captions are too small to be legible.",
        "About Us Page: Footnote text is below the minimum size requirement.",
        "Contact Us Page: The font size used in form labels is too small to be easily read."
    ],
    'Row 33': [
        "Home Page: Background and text color combinations fail contrast requirements.",
        "Services Page: Buttons do not meet the minimum contrast ratio, making them hard to see.",
        "Gallery Page: Image overlays obscure text, failing contrast standards.",
        "About Us Page: Text over images does not meet contrast guidelines.",
        "Contact Us Page: Low contrast between form labels and background makes text difficult to read."
    ],
    'Row 34': [
        "Home Page: No H1 tag found on the page, affecting SEO.",
        "Services Page: Multiple H1 tags used on the page, reducing SEO effectiveness.",
        "Gallery Page: Important content is missing an H1 tag.",
        "About Us Page: The main heading is not marked as an H1 tag.",
        "Contact Us Page: H1 tag is used for non-essential content, reducing SEO impact."
    ],
};

function CommentList({ row }) {
    if (!row) return null;

    const comments = commentData[row];

    return (
        <div>
            <h2>Common Comments <FontAwesomeIcon icon={faCheckCircle} /></h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <span><FontAwesomeIcon icon={faCheckCircle} /> {comment}</span>
                        <button onClick={() => navigator.clipboard.writeText(comment)}>
                            <FontAwesomeIcon icon={faCopy} /> Copy
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentList;
