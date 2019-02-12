import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const SkipLinks = ({ links, ...restProps }) => {
  const hasLinks = links && links.length;

  if (hasLinks) {
    return (
      <section>
        <div className="c-links">
          <h2 className="vs-hidden">Accessibility links</h2>
          <ul>
            {links.map(link => (
              <li key={link.title}>
                <a
                  href={`#${link.to}`}
                  className="c-links__item"
                  {...restProps}
                >
                  {link.title}
                </a>
              </li>
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
  links: PropTypes.array.isRequired
};

export default SkipLinks;
