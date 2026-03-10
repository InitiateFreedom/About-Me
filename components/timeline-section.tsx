"use client";

import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
  const data = [
    {
      title: "2026",
      content: (
        <div className="text-justify">
          <h4 className="mb-4 text-lg font-semibold text-foreground md:text-2xl text-align">
            Business Development Analyst at Liebherr Singapore Pte Ltd
          </h4>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            At Liebherr Singapore, I led initiatives to streamline pricing and business processes, building a
            centralized Cost & Pricing database and an end-to-end business case model. These tools improved pricing
            consistency, provided visibility into cost, pricing, and margin performance, and helped restructure
            multi-million-dollar contracts to restore profitability. I also directed annual sales budget planning,
            performed pricing analysis and recommendations, and partnered with Finance to ensure accurate contract
            accounting and financial alignment.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
              Pricing strategy & analysis
            </span>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-600 dark:text-blue-400">
              Financial modeling & buiness case development
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400">
              Profitability & margin analysis
            </span>
            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-600 dark:text-orange-400">
              Budget planning & revenue forecasting
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="text-justify">
          <h4 className="mb-4 text-lg font-semibold text-foreground md:text-2xl">
            Commercial Analyst at Abbott Medical Pte Ltd
          </h4>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            As a Commercial Analyst at Abbott Medical Pte Ltd, I was responsible for analyzing Sales/Margins, Market
            Trends, Competitor Data etc to identify opportunities for growth. I also developed interactive dashboards
            and provided strategic recommendations to drive business decisions. My strong analytical skills and
            attention to detail helped the company achieve its sales targets and increase profitability.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
              Data analysis and insights generation
            </span>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-600 dark:text-blue-400">
              Data visualization
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400">
              Microsoft Excel
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="mb-4 text-lg font-semibold text-foreground md:text-2xl">
            Student at Singapore Institute of Management
          </h4>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            I am a data science and business analytics student at the Singapore Institute of Management, passionate
            about turning data into actionable insights. I am building expertise in statistics, machine learning, and
            data visualization tools like Tableau, and I enjoy applying analytical skills to solve real-world business
            problems.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
              Statistics & machine learning
            </span>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-600 dark:text-blue-400">
              R & Python programming
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400">
              Statistical methods for market research
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background px-8 md:px-4 pb-40 md:pb-60">
      <Timeline
        data={data}
        title="My Journey"
        description="I’m a results-driven analyst with a background in Data Science & Business Analytics from the Singapore Institute of Management. I’ve developed skills in statistics, machine learning, and data visualization, applying them to turn data into actionable insights."
      />
    </section>
  );
}
