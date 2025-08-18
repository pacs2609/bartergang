export default defineEventHandler(async (event) => {
  const data = [
    {
      date: "23-10-2025",
      datalist: [
        {
          id: 1,
          invoiceNo: 240049,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "OC",
        },
        {
          id: 2,
          invoiceNo: 240050,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "TMC",
          total: 2990,
          status: "DL",
        },
        {
          id: 3,
          invoiceNo: 240051,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "PC",
        },
      ],
    },
    {
      date: "23-10-2025",
      datalist: [
        {
          id: 4,
          invoiceNo: 240052,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "WOC",
        },
        {
          id: 5,
          invoiceNo: 240053,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "S",
        },
        {
          id: 6,
          invoiceNo: 240054,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "X",
        },
        {
          id: 7,
          invoiceNo: 240055,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "DC",
        },
      ],
    },
  ];
  return data;
});
