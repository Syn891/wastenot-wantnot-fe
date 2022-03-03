const shopListTestData = [
  {
    _id: { $oid: "LOADING" },
    id: "LOADING",
    shopping_items: [
      {
        _itemid: "LOADING",
        name: "LOADING",
        est_exp: { $date: { $numberLong: "LOADING" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
        category: "LOADING",
        quantity: "LOADING",
        measurement: "LOADING",
        _id: { $oid: "LOADING" },
      },
    ],
    user_id: "LOADING",
  },
];

export default shopListTestData;
