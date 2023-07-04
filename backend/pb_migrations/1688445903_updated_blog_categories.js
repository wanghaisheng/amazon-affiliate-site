migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cagwya2uwqyjreo")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cagwya2uwqyjreo")

  collection.name = "blog_categories"

  return dao.saveCollection(collection)
})
