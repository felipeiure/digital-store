import './Section.css';

function Section({
  title,
  titleAlign = 'left',
  link,
  children,
}) {
  return (
    <section className={`section section-${titleAlign}`}>

      <div className="section-header">
        <h2 className="section-title">
          {title}
        </h2>

        {link && (
          <a
            href={link.href}
            className="section-link"
          >
            {link.text}
          </a>
        )}
      </div>

      <div className="section-content">
        {children}
      </div>

    </section>
  );
}

export default Section;