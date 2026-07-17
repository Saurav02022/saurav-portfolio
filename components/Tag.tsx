import { cn } from '@/lib/utils';

/** The mono metadata pill the design uses for every tech tag. */
export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'border border-line px-2.25 py-1 font-mono text-[11px] text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  tags,
  className,
  tagClassName,
}: {
  tags: string[];
  className?: string;
  /** Experience sits on --bg2, where the tag border needs the stronger line. */
  tagClassName?: string;
}) {
  return (
    <div className={cn('flex flex-wrap gap-1.75', className)}>
      {tags.map((tag) => (
        <Tag key={tag} className={tagClassName}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}
