type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.28em] text-accent/80">
        {subtitle}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
