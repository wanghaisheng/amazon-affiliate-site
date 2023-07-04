migrate((db) => {
  const collection = new Collection({
    "id": "cagwya2uwqyjreo",
    "created": "2023-07-04 04:38:54.479Z",
    "updated": "2023-07-04 04:38:54.479Z",
    "name": "blog_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rrmanfjx",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cagwya2uwqyjreo");

  return dao.deleteCollection(collection);
})
