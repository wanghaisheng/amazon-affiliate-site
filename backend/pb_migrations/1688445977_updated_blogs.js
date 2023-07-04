migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // remove
  collection.schema.removeField("c5ryqua8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pcgf92wm0br74b4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5ryqua8",
    "name": "meta_image",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
