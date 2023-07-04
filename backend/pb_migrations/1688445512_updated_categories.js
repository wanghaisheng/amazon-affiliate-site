migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxomenoxkslfk4m")

  collection.name = "product_categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxomenoxkslfk4m")

  collection.name = "categories"

  return dao.saveCollection(collection)
})
