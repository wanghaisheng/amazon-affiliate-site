migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esz8qh4c27ty1ck")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gb13rjck",
    "name": "categories",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cagwya2uwqyjreo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esz8qh4c27ty1ck")

  // remove
  collection.schema.removeField("gb13rjck")

  return dao.saveCollection(collection)
})
