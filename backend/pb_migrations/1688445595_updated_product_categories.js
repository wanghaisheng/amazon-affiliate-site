migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxomenoxkslfk4m")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxomenoxkslfk4m")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
