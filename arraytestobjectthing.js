[
  {
    0: {
      _id: {
        $oid: "1234",
      },
      id: "AA BAT",
      shopping_items: [
        {
          _itemid: "id string inside shopping items 1",
          name: "AA batteries",
          est_exp: {
            $date: {
              $numberLong: "1645444573974",
            },
          },
          category: "not food",
          quantity: "1",
          measurement: "kg",
          _id: {
            $oid: "1234",
          },
        },
      ],
      user_id: "hello im the user id string 1",
    },
    _id: {
      $oid: "12345678",
    },
    id: "TVs",
    shopping_items: [
      {
        _itemid: "id string inside shopping items 3",
        name: "TVs",
        est_exp: {
          $date: {
            $numberLong: "1645444573974",
          },
        },
        category: " 3",
        quantity: "3",
        measurement: "mph",
        _id: {
          $oid: "12345678",
        },
      },
    ],
    user_id: "hello im the user id string 3",
  },
];
