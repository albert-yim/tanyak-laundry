export type User = {
  id: string;
  name: string;
  rank: "병장" | "상병" | "일병" | "이병";
  serviceStartedAt: string;
};
