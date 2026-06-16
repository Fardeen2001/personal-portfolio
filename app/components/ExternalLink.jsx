const ExternalLink = ({ href, children, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className={className}
  >
    {children}
  </a>
);

export default ExternalLink;
