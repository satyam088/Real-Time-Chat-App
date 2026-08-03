const PRESET_COLORS = [
  '#e11d48', // rose
  '#ea580c', // orange
  '#d97706', // amber
  '#059669', // emerald
  '#0d9488', // teal
  '#0284c7', // sky
  '#2563eb', // royal blue
  '#4f46e5', // indigo
  '#7c3aed', // violet
  '#c026d3', // fuchsia
  '#db2777', // pink
  '#16a34a', // green
  '#0891b2', // cyan
  '#9333ea', // purple
];

export const getUserColor = (username) => {
  if (!username) return '#2563eb';
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PRESET_COLORS.length;
  return PRESET_COLORS[index];
};
