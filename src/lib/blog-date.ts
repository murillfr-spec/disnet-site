const spanishMonths: Record<string, string> = {
  enero: "01",
  febrero: "02",
  marzo: "03",
  abril: "04",
  mayo: "05",
  junio: "06",
  julio: "07",
  agosto: "08",
  septiembre: "09",
  octubre: "10",
  noviembre: "11",
  diciembre: "12",
};

/** Parses the canonical Spanish "D de MMMM de YYYY" blog date into an ISO date string. */
export function parseSpanishDate(value: string): string {
  const match = value.match(/(\d{1,2}) de (\w+) de (\d{4})/i);
  if (!match) return new Date().toISOString().slice(0, 10);
  const [, day, monthName, year] = match;
  const month = spanishMonths[monthName.toLowerCase()] ?? "01";
  return `${year}-${month}-${day.padStart(2, "0")}`;
}
