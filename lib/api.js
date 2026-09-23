export const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkout(id) {
  const response = await fetch(`${API_URL}/${id}`, { next: { revalidate: 3600 } });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Unable to load workout");
  return response.json();
}
