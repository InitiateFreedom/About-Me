"use client";

export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center bg-background px-8 md:px-4 py-20">
      <div className="mx-auto max-w-4xl text-justify">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a results-driven analyst with expertise in pricing strategy, financial modeling, and commercial analysis. I specialize in turning complex data into actionable insights, optimizing business processes, and supporting strategic decision-making to drive profitability and performance.
          </p>
          <p>
            Analytical, detail-oriented, and solution-focused, I thrive at the intersection of finance, strategy, and operations, delivering impactful, data-driven outcomes.
          </p>
          <p>
           I enjoy collaborating across teams to solve complex business challenges and provide clarity in decision-making. I am passionate about continuously improving processes, learning new analytical techniques, and contributing to projects that make a tangible impact on business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
