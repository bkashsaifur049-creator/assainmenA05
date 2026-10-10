import { useEffect, useState } from "react";
import type { Technology } from "./typeData";

function TechnologyCard() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load data");
        }
        return res.json();
      })
      .then((data: Technology[]) => setTechnologies(data))
      .catch((error) => console.error("Data loading error:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className="rounded-xl border p-5 shadow-md"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-14 w-14 object-contain"
          />

          <h2 className="mt-3 text-xl font-bold">{tech.name}</h2>

          <p>{tech.category}</p>

          <p className="my-3">{tech.description}</p>

          <p>⭐ {tech.rating}</p>

          <p>{tech.difficulty}</p>

          <span>{tech.badge}</span>
        </div>
      ))}
    </div>
  );
}

export default TechnologyCard;