migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esz8qh4c27ty1ck")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esz8qh4c27ty1ck")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
