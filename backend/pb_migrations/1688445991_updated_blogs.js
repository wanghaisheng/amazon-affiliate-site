migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otl5jzni",
    "name": "meta_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // remove
  collection.schema.removeField("otl5jzni")

  return dao.saveCollection(collection)
})
