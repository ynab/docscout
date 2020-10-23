import * as lodash from 'lodash'
import DocsClient from '../src'

const apiToken = process.env.HS_DOCS_API_TOKEN

if (apiToken) {
  ;(async () => {
    try {
      const client = new DocsClient(apiToken)
      const publicCollectionsEnvelope = await client.listCollections({ visibility: 'public' })
      const publicCollections = publicCollectionsEnvelope.items
      printObject(publicCollections)

      const firstPublicCollection = publicCollections[0]
      const articlesEnvelope = await client.listArticlesInCollection(firstPublicCollection.id, {
        status: 'published',
        sort: 'updatedAt',
        order: 'desc',
      })

      console.log(`Found ${articlesEnvelope.count} in ${articlesEnvelope.pages} pages`)
      const mostRecentlyUpdatedArticleRef = articlesEnvelope.items[0]
      printObject(mostRecentlyUpdatedArticleRef)

      const mostRecentlyUpdatedArticle = await client.getArticle(mostRecentlyUpdatedArticleRef.id)
      printObject(mostRecentlyUpdatedArticle)

      const revisions = await client.listRevisions(mostRecentlyUpdatedArticle.id)
      printObject(revisions)

      const oldestRevision = lodash.last(revisions.items)
      if (oldestRevision) {
        const revision = await client.getRevision(oldestRevision.id)
        printObject(revision)
      }
    } catch (error) {
      console.error(error)
    }
  })()
}

function printObject(data: any) {
  console.log(JSON.stringify(data, null, 2))
}
