db.collectionName.aggregate([
  {
    $group: {
      _id: "$produceName",
      qty: { $sum: "$qty" },
    },
  },
]);

db.collectionName.aggregate([
  {
    $group: {
      _id: "$produceName",
      Count: { $sum: 1 },
    },
  },
]);

db.collectionName.aggregate([
  { $match: { tag: "red" } },
  { $match: { price: { $gt: 50 } } },
]);

db.collectionName.aggregate([
  {
    $match: { $status: true },
    $group: {
      _id: "$produceName",
      qty: { $sum: "$qty" },
    },
  },
]);

db.guddu.aggregate([
  {
    $match: { $color: "red" },
  },
]);

db.collectionName.aggregate([
  {
    $group: {
      _id: $state,
      totalPop: { $sum: $pop },
    },
  },
  {
    $group: {
      _id: null,
      avgPop: { $avg: "$totalPop" },
    },
  },
]);

db.collectionName.aggregate([
  {
    $group: {
      _id: "emp",
      joined: { $sort: "$joined" },
    },
  },
]);
