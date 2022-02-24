const shopListTestData = [
  {
    _id: { $oid: "62137ddd17d718bb29b2bd2d" },
    id: "hello im the id string",
    shopping_items: [
      {
        _itemid: "hello im the id string inside shopping items",
        name: "mangos",
        est_exp: { $date: { $numberLong: "1645444573974" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
        category: "food",
        quantity: 25,
        measurement: "pc",
        _id: { $oid: "62137ddd17d718bb29b2bd2e" },
      },
    ],
    user_id: "hello im the user id string",
  },
  {
    _id: { $oid: "1234" },
    id: "id string1",
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
    id: "id string2",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 2",
        name: "2",
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
    id: "id string3",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 3",
        name: "3",
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
    _id: { $oid: "12345678" },
    id: "id string3",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 4",
        name: "apple",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "food",
        quantity: "54",
        measurement: "barrels",
        _id: { $oid: "12345678" },
      },
    ],
    user_id: "hello im the user id string 3",
  },
];

export default shopListTestData;
