export const extractYouTubeId = (url: string | null) => {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url?.match(regExp);

  return match ? match[1] : null;
};
