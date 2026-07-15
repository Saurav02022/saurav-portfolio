export function SectionHead({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <div className="secHead">
      <span className="secNum">{num}</span>
      <h2 className="secTitle" id={id}>
        {title}
      </h2>
      <span className="secRule" />
    </div>
  );
}
