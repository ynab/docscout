import * as collections from '../src/collections'

const apiToken = process.env.HS_DOCS_API_TOKEN

if (apiToken) {
  collections
    .listCollections(apiToken)
    .then(collectionsResponse => {
      console.log(JSON.stringify(collectionsResponse, null, 2))
    })
    .catch(error => {
      console.error(error)
    })
}
