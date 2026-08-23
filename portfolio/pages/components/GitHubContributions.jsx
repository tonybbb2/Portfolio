import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const USERNAME = "tonybbb2";
const levelClasses = [
  "bg-zinc-100 dark:bg-zinc-800",
  "bg-green-200 dark:bg-green-900",
  "bg-green-400 dark:bg-green-700",
  "bg-green-600 dark:bg-green-500",
  "bg-green-800 dark:bg-green-300",
];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const starredProjects = [
  { name: "FiveNines", href: "https://github.com/tonybbb2/FiveNines" },
  { name: "Course Outline Planner", href: "https://github.com/tonybbb2/CourseOutlinePlanner" },
  { name: "AI Course Generator", href: "https://github.com/tonybbb2/AI_CourseGenerator" },
  { name: "VI Fitness", href: "https://github.com/MoKhedim/Projet3_Equipe2" },
];

export default function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const availableYears = Array.from(
    { length: currentYear - 2021 + 1 },
    (_, index) => currentYear - index
  );

  useEffect(() => {
    const controller = new AbortController();
    setData(null);
    setError(false);

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load GitHub contributions");
        return response.json();
      })
      .then(setData)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") setError(true);
      });

    return () => controller.abort();
  }, [year]);

  const days = useMemo(() => {
    if (!data?.contributions?.length) return [];
    const firstDay = new Date(year, 0, 1).getDay();
    const contributionsByDate = new Map(data.contributions.map((day) => [day.date, day]));
    const daysInYear = Math.round(
      (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 86400000
    );
    const calendarDays = Array.from({ length: daysInYear }, (_, dayIndex) => {
      const date = new Date(Date.UTC(year, 0, dayIndex + 1));
      const dateString = date.toISOString().slice(0, 10);
      return contributionsByDate.get(dateString) ?? {
        date: dateString,
        count: 0,
        level: 0,
      };
    });

    return [
      ...Array.from({ length: firstDay }, (_, index) => ({ empty: true, key: `empty-${index}` })),
      ...calendarDays.map((day) => ({ ...day, key: day.date })),
    ];
  }, [data, year]);

  const months = useMemo(() => {
    const firstDay = new Date(year, 0, 1).getDay();
    return monthNames.map((name, monthIndex) => {
      const dayOfYear = Math.round(
        (Date.UTC(year, monthIndex, 1) - Date.UTC(year, 0, 1)) / 86400000
      );
      return { name, column: Math.floor((firstDay + dayOfYear) / 7) + 1 };
    });
  }, [year]);

  return (
    <section className="mt-10 mb-20 sm:mt-14 sm:px-8" aria-labelledby="github-contributions-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/60">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DA3028]">My contributions this year</p>
              <h2 id="github-contributions-title" className="mt-1 flex items-center gap-1 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                <span>{data ? `${data.total?.[year] ?? 0} contributions in` : "GitHub contributions in"}</span>
                <select
                  value={year}
                  onChange={(event) => setYear(Number(event.target.value))}
                  aria-label="Contribution year"
                  className="cursor-pointer rounded-md border border-zinc-300 bg-white px-1.5 py-0.5 text-lg font-semibold text-zinc-800 outline-none transition hover:border-[#DA3028] focus:border-[#DA3028] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {availableYears.map((availableYear) => (
                    <option key={availableYear} value={availableYear}>{availableYear}</option>
                  ))}
                </select>
              </h2>
            </div>
            <Link
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 transition hover:text-[#DA3028] dark:text-zinc-300"
            >
              <FaGithub className="text-xl" />
              View profile
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="min-w-0">
              {error ? (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">The contribution graph is temporarily unavailable.</p>
              ) : !data ? (
                <div className="h-28 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-700" aria-label="Loading contribution graph" />
              ) : (
                <div className="overflow-x-auto pb-2">
                  <div className="min-w-[720px] w-max">
                <div
                  className="mb-2 ml-[42px] grid gap-[3px] text-xs text-zinc-500 dark:text-zinc-400"
                  style={{ gridTemplateColumns: "repeat(53, 10px)" }}
                >
                  {months.map((month) => (
                    <span key={month.name} style={{ gridColumn: `${month.column} / span 4` }}>{month.name}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="grid h-[88px] grid-rows-3 content-between pt-4 text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span>Mon</span><span>Wed</span><span>Fri</span>
                  </div>
                  <div
                    className="grid flex-1 gap-[3px]"
                    style={{
                      gridAutoFlow: "column",
                      gridTemplateRows: "repeat(7, 10px)",
                      gridAutoColumns: "10px",
                    }}
                    aria-label={`${data.total?.[year] ?? 0} GitHub contributions in ${year}`}
                  >
                    {days.map((day) => day.empty ? (
                      <span key={day.key} className="h-[10px] w-[10px]" />
                    ) : (
                      <span
                        key={day.key}
                        className={`h-[10px] w-[10px] rounded-[2px] border border-black/5 ${levelClasses[day.level]}`}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      />
                    ))}
                  </div>
                </div>
                    <div className="mt-3 flex items-center justify-end gap-1 pr-1 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="mr-1">Less</span>
                      {levelClasses.map((levelClass, index) => <span key={index} className={`h-[10px] w-[10px] rounded-[2px] ${levelClass}`} />)}
                      <span className="ml-1">More</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="border-t border-zinc-200 pt-4 dark:border-zinc-700 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0" aria-label="Featured projects">
              <div className="grid h-full grid-rows-4 gap-2">
                {starredProjects.map((project) => (
                  <Link
                    key={project.href}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg border border-zinc-200 px-3 transition hover:border-[#DA3028] hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-[#DA3028] dark:hover:bg-zinc-700/50"
                  >
                    <span className="block truncate text-xs font-semibold text-zinc-800 dark:text-zinc-100">{project.name}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
