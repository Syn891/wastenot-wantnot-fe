const shopListTestData = [
  {
    _id: { $oid: "62137ddd17d718bb29b2bd2d" },
    id: "hello im the id string",
    shopping_items: [
      {
        _itemid: "hello im the id string inside shopping items",
        name: "hello im the name string inside shopping items",
        est_exp: { $date: { $numberLong: "1645444573974" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
        category: "hello im the category string inside shopping items",
        quantity: "hello im the quantity string inside shopping items",
        measurement: "hello im the measurement string inside shopping items",
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
        name: "name string inside shopping items 1",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "cat string inside shopping items 1",
        quantity: "quan string inside shopping items 1",
        measurement: "measure string inside shopping items 1",
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
        name: "name string inside shopping items 2",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "cat string inside shopping items 2",
        quantity: "quan string inside shopping items 2",
        measurement: "measure string inside shopping items 2",
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
        name: "name string inside shopping items 3",
        est_exp: { $date: { $numberLong: "1645444573974" } },
        category: "cat string inside shopping items 3",
        quantity: "quan string inside shopping items 3",
        measurement: "measure string inside shopping items 3",
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
        _itemid: "id string inside shopping items 3",
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
