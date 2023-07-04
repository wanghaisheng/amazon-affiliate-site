migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cd4o0y0i",
    "name": "category",
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
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cd4o0y0i",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cagwya2uwqyjreo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
