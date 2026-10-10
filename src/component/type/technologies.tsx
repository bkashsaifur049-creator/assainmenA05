
import { useEffect, useState } from "react";
import type { Technology } from "./typeData";

function TechnologyCard() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selected, setSelected] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data: Technology[]) => setTechnologies(data))
      .catch((error) => console.error(error));
  }, []);

  // Add or remove technology
  const toggleStack = (tech: Technology) => {
    setSelected((prev) =>
      prev.some((item) => item.id === tech.id)
        ? prev.filter((item) => item.id !== tech.id)
        : [...prev, tech]
    );
  };

  // Remove one technology
  const removeStack = (id: string) => {
    setSelected((prev) => prev.filter((tech) => tech.id !== id));
  };

  // Remove all technologies
  const removeAll = () => {
    setSelected([]);
  };

  return (
    <section className="min-h-screen bg-white px-5 py-10 text-slate-900 md:px-10 lg:px-16">
      <h1 className="text-3xl font-extrabold">
        Explore the{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>

      <p className="mt-2 mb-8 text-sm text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-4">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-3">
          {technologies.map((tech) => {
            const isSelected = selected.some(
              (item) => item.id === tech.id
            );

            return (
              <div
                key={tech.id}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-8 w-8 object-contain"
                  />

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-600">
                    {tech.badge}
                  </span>
                </div>

                <h2 className="text-lg font-bold">{tech.name}</h2>

                <p className="mt-2 min-h-12 text-xs leading-5 text-slate-500">
                  {tech.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="rounded bg-slate-100 px-2 py-1">
                    {tech.category}
                  </span>

                  <span>{tech.difficulty}</span>

                  <span className="font-semibold text-amber-500">
                    ⭐ {tech.rating}
                  </span>
                </div>

                <button
                  onClick={() => toggleStack(tech)}
                  className={`mt-4 w-full rounded-md px-3 py-2 text-sm font-medium transition ${
                    isSelected
                      ? "border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {isSelected ? "✓ Added · Remove" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Your Stack Sidebar */}
        <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-5">
          <h2 className="text-lg font-bold">Your Stack</h2>

          <p className="mb-4 text-xs text-slate-400">
            {selected.length} Technology{selected.length !== 1 ? "s" : ""} Selected
          </p>

          <div className="space-y-2">
            {selected.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {tech.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {tech.category}
                  </p>
                </div>

                <button
                  onClick={() => removeStack(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                  className="rounded px-2 py-1 text-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                >
                  ×
                </button>
              </div>
            ))}

            {selected.length === 0 && (
              <p className="rounded-lg bg-slate-50 p-4 text-center text-sm text-slate-400">
                No technologies selected yet.
              </p>
            )}
          </div>

          <button
            onClick={removeAll}
            disabled={selected.length === 0}
            className="mt-5 w-full rounded-md border border-rose-200 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Remove All
          </button>
        </aside>
      </div>
    </section>
  );
}

export default TechnologyCard;