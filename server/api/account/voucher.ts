export default defineEventHandler(async (event) => {
  const data = [
    {
      id: 1,
      code: "V0000190868",
      value: 20,
      expiredDate: "20-08-2025",
    },
    {
      id: 2,
      code: "V0000260968",
      value: 200,
      expiredDate: "20-08-2025",
    },
    {
      id: 3,
      code: "V0000260969",
      value: 300,
      expiredDate: "25-08-2025",
    },
  ];
  return data;
});
