import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getConferenceByYear, getConferenceProgram } from "@/lib/content";

interface ConferenceProgramPageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  const { getConferences } = await import("@/lib/content");
  const conferences = getConferences();
  return conferences.map((conf) => ({
    year: conf.year.toString(),
  }));
}

export default async function ConferenceProgramPage({
  params,
}: ConferenceProgramPageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const conference = getConferenceByYear(yearNum);

  if (!conference) {
    notFound();
  }

  const program = getConferenceProgram(yearNum);
  const groupedByDay = program.reduce(
    (acc, item) => {
      if (!acc[item.day_label]) {
        acc[item.day_label] = [];
      }
      acc[item.day_label].push(item);
      return acc;
    },
    {} as Record<string, typeof program>
  );

  return (
    <Section title="Program" eyebrow={`${conference.year} Conference`}>
      <div className="space-y-12">
        {Object.entries(groupedByDay).map(([day, items]) => (
          <div key={day}>
            <h2 className="text-2xl font-semibold text-primary mb-6">{day}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary bg-primary/5">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-primary">
                      Time
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-primary">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-primary">
                      Speakers
                    </th>
                    {items.some((item) => item.track) && (
                      <th className="text-left py-3 px-4 text-sm font-semibold text-primary">
                        Track
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-subtle-border hover:bg-surface-raised"
                    >
                      <td className="py-3 px-4 text-sm text-muted-text whitespace-nowrap">
                        {item.start_time} - {item.end_time}
                      </td>
                      <td className="py-3 px-4 text-sm text-primary">
                        <div className="font-medium">{item.title}</div>
                        {item.type && (
                          <div className="text-xs text-muted-text mt-1">
                            {item.type}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-text">
                        {item.speaker_names}
                      </td>
                      {items.some((i) => i.track) && (
                        <td className="py-3 px-4 text-sm text-muted-text">
                          {item.track || "-"}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
