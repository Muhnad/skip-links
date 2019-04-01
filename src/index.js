import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const LinkItem = ({ to, title, ...restProps }) => (
  <li>
    <a href={`#${to}`} className="c-links__item" {...restProps}>
      {title}
    </a>
  </li>
);

const SkipLinks = ({ links }) => {
  const hasLinks = links && links.length;

  if (hasLinks) {
    return (
      <section>
        <div className="c-links">
          <h2 className="u-vs-hidden">Accessibility links</h2>

          <ul>
            {links.map(link => (
              <LinkItem key={link.title} {...link} />
            ))}
          </ul>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

SkipLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SkipLinks;
