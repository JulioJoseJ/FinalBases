db.character.insertMany([
  {
    "_id": "character1",
    "name": "Spider-Man",
    "power": "Wall-crawling",
    "weakness": "Pesticide",
    "groups": ["Avengers"]
  },
  {
    "_id": "character2",
    "name": "Batman",
    "power": "Genius-level intellect",
    "weakness": "Human limits",
    "groups": ["Justice League", "Avengers"]
  },
  {
    "_id": "character3",
    "name": "Wonder Woman",
    "power": "Superhuman strength",
    "weakness": "Piercing weapons",
    "groups": ["Justice League"]
  },
  {
    "_id": "character4",
    "name": "Iron Man",
    "power": "Powered armor suit",
    "weakness": "Technology reliance",
    "groups": ["Avengers"]
  },
  {
    "_id": "character5",
    "name": "Captain America",
    "power": "Enhanced agility",
    "weakness": "Human limits",
    "groups": ["Avengers"]
  },
  {
    "_id": "character6",
    "name": "Thor",
    "power": "Weather manipulation",
    "weakness": "Mjolnir dependency",
    "groups": ["Avengers"]
  },
  {
    "_id": "character7",
    "name": "Hulk",
    "power": "Superhuman strength",
    "weakness": "Rage control",
    "groups": ["Avengers"]
  },
  {
    "_id": "character8",
    "name": "Superman",
    "power": "Flight",
    "weakness": "Kryptonite",
    "groups": ["Justice League", "Avengers"]
  },
  {
    "_id": "character9",
    "name": "Green Lantern",
    "power": "Power ring constructs",
    "weakness": "Needs recharge",
    "groups": ["Justice League"]
  },
  {
    "_id": "character10",
    "name": "Flash",
    "power": "Super speed",
    "weakness": "Cold attacks",
    "groups": ["Justice League"]
  },
  {
    "_id": "character11",
    "name": "Joker",
    "power": "Master manipulator",
    "weakness": "Mental instability",
    "groups": ["Legion of Doom"]
  },
  {
    "_id": "character12",
    "name": "Loki",
    "power": "Shapeshifting and magic",
    "weakness": "Pride",
    "groups": ["Masters of Evil", "Avengers"]
  },
  {
    "_id": "character13",
    "name": "Thanos",
    "power": "Superhuman strength and intelligence",
    "weakness": "Overconfidence",
    "groups": ["Black Order"]
  },
  {
    "_id": "character14",
    "name": "Lex Luthor",
    "power": "Genius-level intellect",
    "weakness": "Human limits",
    "groups": ["Legion of Doom"]
  },
  {
    "_id": "character15",
    "name": "Green Goblin",
    "power": "Enhanced strength and intelligence",
    "weakness": "Psychotic tendencies",
    "groups": ["Sinister Six"]
  }
]);

db.villager.insertMany([
  {
    "_id": "villager1",
    "name": "Alfred Pennyworth",
    "description": "Bruce Wayne's loyal butler and confidant, providing guidance and support.",
    "availability": true
  },
  {
    "_id": "villager2",
    "name": "J. Jonah Jameson",
    "description": "The editor-in-chief of the Daily Bugle, known for his distrust of Spider-Man.",
    "availability": true
  },
  {
    "_id": "villager3",
    "name": "Mary Jane Watson",
    "description": "Peter Parker's long-time love interest and a talented actress.",
    "availability": true
  },
  {
    "_id": "villager4",
    "name": "Commissioner Gordon",
    "description": "The dedicated police commissioner of Gotham City and an ally of Batman.",
    "availability": false
  },
  {
    "_id": "villager5",
    "name": "Aunt May",
    "description": "Peter Parker's caring aunt who raised him and provides him with moral support.",
    "availability": false
  }
]
);


db.items.insertMany([
  {
    "_id": "item1",
    "name": "Sword of Destiny",
    "description": "A legendary sword that grants immense power to its wielder.",
    "availability": true
  },
  {
    "_id": "item2",
    "name": "Shield of Valor",
    "description": "A shield that can withstand any attack, providing unmatched defense.",
    "availability": true
  },
  {
    "_id": "item3",
    "name": "Bow of Eternity",
    "description": "A bow with arrows that never miss, guided by the spirits of past archers.",
    "availability": false
  },
  {
    "_id": "item4",
    "name": "Hammer of Thor",
    "description": "A mighty hammer capable of summoning lightning, usable only by the worthy.",
    "availability": true
  },
  {
    "_id": "item5",
    "name": "Dagger of Shadows",
    "description": "A dagger that allows its wielder to move unseen in the darkness.",
    "availability": false
  }
]
);

db.customer.insertMany([
  {
    "_id": "customer1",
    "name": "John Doe",
    "birthday": "1985-03-15",
    "email": "johndoe@example.com"
  },
  {
    "_id": "customer2",
    "name": "Jane Smith",
    "birthday": "1990-07-24",
    "email": "janesmith@example.com"
  },
  {
    "_id": "customer3",
    "name": "Michael Johnson",
    "birthday": "1978-12-05",
    "email": "michaeljohnson@example.com"
  },
  {
    "_id": "customer4",
    "name": "Emily Davis",
    "birthday": "2001-02-10",
    "email": "emilydavis@example.com"
  },
  {
    "_id": "customer5",
    "name": "David Brown",
    "birthday": "1995-11-30",
    "email": "davidbrown@example.com"
  }
]
);

db.comic.insertMany([
  {
    "_id": "comic1",
    "title": "Spider-Man: Web of Shadows",
    "description": "Spider-Man faces a new threat in New York City, battling shadows of his past.",
    "price": 9.99,
    "category": "Superhero",
    "characters": [
      { "characterId": "character1", "characterName": "Spider-Man" },
      { "characterId": "character11", "characterName": "Joker" }
    ],
    "villagers": [
      { "villagerId": "villager1", "villagerName": "Alfred Pennyworth" },
      { "villagerId": "villager3", "villagerName": "Mary Jane Watson" }
    ],
    "items": [
      { "itemId": "item1", "itemName": "Sword of Destiny" },
      { "itemId": "item4", "itemName": "Hammer of Thor" }
    ]
  },
  {
    "_id": "comic2",
    "title": "Batman: The Dark Knight Returns",
    "description": "An aging Batman comes out of retirement to face crime in Gotham City.",
    "price": 14.99,
    "category": "Superhero",
    "characters": [
      { "characterId": "character2", "characterName": "Batman" },
      { "characterId": "character4", "characterName": "Iron Man" }
    ],
    "villagers": [
      { "villagerId": "villager2", "villagerName": "J. Jonah Jameson" },
      { "villagerId": "villager4", "villagerName": "Commissioner Gordon" }
    ],
    "items": [

    ]
  },
  {
    "_id": "comic3",
    "title": "Wonder Woman: Rise of the Amazons",
    "description": "Wonder Woman battles to protect her homeland and defend humanity.",
    "price": 12.99,
    "category": "Fantasy",
    "characters": [
      { "characterId": "character3", "characterName": "Wonder Woman" },
      { "characterId": "character8", "characterName": "Superman" }
    ],
    "villagers": [
      { "villagerId": "villager5", "villagerName": "Aunt May" },
      { "villagerId": "villager1", "villagerName": "Alfred Pennyworth" }
    ],
    "items": [
      { "itemId": "item3", "itemName": "Bow of Eternity" },
      { "itemId": "item1", "itemName": "Sword of Destiny" }
    ]
  },
  {
    "_id": "comic4",
    "title": "The Avengers: Infinity Quest",
    "description": "The Avengers unite to stop Thanos from collecting the Infinity Stones.",
    "price": 19.99,
    "category": "Superhero",
    "characters": [
      { "characterId": "character6", "characterName": "Thor" },
      { "characterId": "character13", "characterName": "Thanos" }
    ],
    "villagers": [
      { "villagerId": "villager2", "villagerName": "J. Jonah Jameson" },
      { "villagerId": "villager3", "villagerName": "Mary Jane Watson" }
    ],
    "items": [

    ]
  },
  {
    "_id": "comic5",
    "title": "The Flash: Speed Force",
    "description": "The Flash races against time to save Central City from a new menace.",
    "price": 8.99,
    "category": "Superhero",
    "characters": [
      { "characterId": "character10", "characterName": "Flash" },
      { "characterId": "character9", "characterName": "Green Lantern" }
    ],
    "villagers": [
      { "villagerId": "villager4", "villagerName": "Commissioner Gordon" },
      { "villagerId": "villager5", "villagerName": "Aunt May" }
    ],
    "items": [
      { "itemId": "item2", "itemName": "Shield of Valor" },
      { "itemId": "item3", "itemName": "Bow of Eternity" }
    ]
  }
]
);


db.transaction.insertMany([
  {
    "_id": "transaction1",
    "comic": { "comicId": "comic1", "title": "Spider-Man: Web of Shadows" },
    "customer": { "customerId": "customer1", "name": "John Doe" },
    "purchase_date": "2024-11-10",
    "total_amount": 9.99
  },
  {
    "_id": "transaction2",
    "comic": { "comicId": "comic2", "title": "Batman: The Dark Knight Returns" },
    "customer": { "customerId": "customer2", "name": "Jane Smith" },
    "purchase_date": "2024-11-11",
    "total_amount": 14.99
  },
  {
    "_id": "transaction3",
    "comic": { "comicId": "comic3", "title": "Wonder Woman: Rise of the Amazons" },
    "customer": { "customerId": "customer3", "name": "Michael Johnson" },
    "purchase_date": "2024-11-12",
    "total_amount": 12.99
  },
  {
    "_id": "transaction4",
    "comic": { "comicId": "comic4", "title": "The Avengers: Infinity Quest" },
    "customer": { "customerId": "customer4", "name": "Emily Davis" },
    "purchase_date": "2024-11-13",
    "total_amount": 19.99
  },
  {
    "_id": "transaction5",
    "comic": { "comicId": "comic5", "title": "The Flash: Speed Force" },
    "customer": { "customerId": "customer5", "name": "David Brown" },
    "purchase_date": "2024-11-14",
    "total_amount": 8.99
  },
  {
    "_id": "transaction6",
    "comic": { "comicId": "comic2", "title": "Batman: The Dark Knight Returns" },
    "customer": { "customerId": "customer1", "name": "John Doe" },
    "purchase_date": "2024-11-15",
    "total_amount": 14.99
  }
]
);


db.comic.find(
  { price: { $lt: 20 } },
  { title: 1, price: 1, _id: 0 }
).sort({ title: 1 });


db.character.find(
  { power: /flight/i },
  { name: 1, power: 1, _id: 0 }
).sort({ name: 1 });

db.transaction.aggregate([
  {
    $group: {
      _id: "$customer.customerId",
      customerName: { $first: "$customer.name" },
      totalComicsPurchased: { $sum: 1 },
      totalAmountSpent: { $sum: "$total_amount" }
    }
  },
  {
    $match: {
      totalComicsPurchased: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      customerId: "$_id",
      customerName: 1,
      totalComicsPurchased: 1,
      totalAmountSpent: 1
    }
  }
]);


db.transaction.aggregate([
  {
    $lookup: {
      from: "comic",
      localField: "comic.comicId",
      foreignField: "_id",
      as: "comic_info"
    }
  },
  {
    $unwind: "$comic_info"
  },
  {
    $group: {
      _id: "$comic_info.category",
      purchaseCount: { $sum: 1 }
    }
  },
  {
    $sort: { purchaseCount: -1 }
  },
  {
    $limit: 1
  }
]);

db.character.find(
  { groups: { $all: ["Justice League", "Avengers"] } },
  { name: 1, groups: 1, _id: 0 }
);


db.comic.find(
  { items: { $exists: true, $ne: [] } },
  { title: 1, items: 1, _id: 0 }
);


