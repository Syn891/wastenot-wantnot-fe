const shopListTestData = [
  {
    _id: { $oid: "62137ddd17d718bb29b2bd2d" },
    id: "MANGO",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 0",
        name: "mangos",
        est_exp: { $date: { $numberLong: "1645444573974" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
        category: "food",
        quantity: 25,
        measurement: "pc",
        _id: { $oid: "62137ddd17d718bb29b2bd2e" },
      },
    ],
    user_id: "hello im the user id string",
    alertSwiped: true, //if item already in pantry and user has seen alert already and dismissed dont show the alert again
    checkboxTicked: true,
  },
  {
    _id: { $oid: "1234" },
    id: "AA BAT",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 1",
        name: "AA batteries",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "not food",
        quantity: "1",
        measurement: "kg",
        _id: { $oid: "1234" },
      },
    ],
    user_id: "hello im the user id string 1",
  },
  {
    _id: { $oid: "123456" },
    id: "PINEAPPLE",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 2",
        name: "Pineapple",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: " 2",
        quantity: "2",
        measurement: "miles",
        _id: { $oid: "123456" },
      },
    ],
    user_id: "hello im the user id string 2",
  },
  {
    _id: { $oid: "12345678" },
    id: "TVs",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 3",
        name: "TVs",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: " 3",
        quantity: "3",
        measurement: "mph",
        _id: { $oid: "12345678" },
      },
    ],
    user_id: "hello im the user id string 3",
  },
  {
    _id: { $oid: "12345678910" },
    id: "APPLE",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 4",
        name: "apple",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "food",
        quantity: "54",
        measurement: "barrels",
        _id: { $oid: "12345678910" },
      },
    ],
    user_id: "hello im the user id string 4",
  },
];

export default shopListTestData;
