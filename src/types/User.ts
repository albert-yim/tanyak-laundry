export type User = {
  // auth id
  id: string;
  // user name
  name: string;
  //기수
  class: string;
  //군번
  serviceId: string;
  // 입대날짜
  serviceStartedAt?: string;
  rank?: "병장" | "상병" | "일병" | "이병";
};
