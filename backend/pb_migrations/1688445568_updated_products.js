migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esz8qh4c27ty1ck")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vr2s2u3",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cxomenoxkslfk4m",
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
  collection.schema.removeField("2vr2s2u3")

  return dao.saveCollection(collection)
})
