export const getWorkDetail = async () => {
  const response = await fetch(`/api/work/${slug}`);
  if (!response.ok) {
    throw new Error("Content not found");
  }
  const data = await response.json();
  return data;
};
