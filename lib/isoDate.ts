export function ensureIndianIsoDatetime(
  dateValue?: string,
): string | undefined {
  if (!dateValue) return undefined;
  if (dateValue.includes("T")) return dateValue;
  return `${dateValue}T00:00:00+05:30`;
}

export default ensureIndianIsoDatetime;
