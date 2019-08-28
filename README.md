# DocScout

> NodeJS client for HelpScout Docs API
> https://developer.helpscout.com/docs-api/

## Install

```js
$ npm install docscout
```

## Usage

### Functional

```js
import { listCollections } from 'docscout/collections'

const apiToken = process.env.HELPSCOUT_DOCS_API_TOKEN;

(async () => {
  try {
    const collectionsEnvelope = await listCollections(apiToken, { visibility: 'private', sort: 'createdAt', order: 'asc'  });
    console.log(JSON.stringify(collectionsEnvelope, null, 2));
  } catch (error) {
    console.error(error);
  }
})();
```

### OOP Client Instance

The OOP Client has two subtle differences from the functional approach:

* Stores the API token internally so that you don't have to pass it in every single function call.
* Unboxes the envelope data from the API responses. [More info about HS Docs Data Envelopes](https://developer.helpscout.com/docs-api/#response-envelopes)

```js
import DocscoutClient from 'docscout'

const apiToken = process.env.HELPSCOUT_DOCS_API_TOKEN;

(async () => {
  try {
    const docscoutClient = new DocscoutClient(apiToken);
    const collections = await docscoutClient.listCollections({
      visibility: 'private',
      sort: 'createdAt',
      order: 'desc'
    });
    console.log(JSON.stringify(collections, null, 2));
  } catch (error) {
    console.error(error);
  }
})();

```

## API

> Version 1 of this client focuses on fetching data, i.e. the API Reads.  
> We'll happily welcome your PRs to improve this client.

### Articles | [Source Code](src/articles.ts)

#### List Articles | [Docs](https://developer.helpscout.com/docs-api/articles/list/)

##### In Collection

`listArticlesInCollection( apiToken: string, collectionId: string, options?: ListArticleOptions )`

##### In Category

`listArticlesInCategory( apiToken: string, categoryId: string, options?: ListArticleOptions )`

#### Search Articles |  [Docs](https://developer.helpscout.com/docs-api/articles/search/)

`searchArticles( apiToken: string, options: SearchArticlesOptions )`

#### List Related Articles | [Docs](https://developer.helpscout.com/docs-api/articles/list-related/)

`listRelatedArticles( apiToken: string, articleId: string, options?: ListRelatedArticlesOptions )`

#### List Revisions | [Docs](https://developer.helpscout.com/docs-api/articles/revisions/list/)

`listRevisions( apiToken: string, articleId: string, options?: ListRevisionsOptions )`

#### Get Article | [Docs](https://developer.helpscout.com/docs-api/articles/get/)

`getArticle( apiToken: string, articleIdOrNumber: string | number, options?: GetArticleOptions )`

#### Get Revision | [Docs](https://developer.helpscout.com/docs-api/articles/revisions/get/)

`getRevision( apiToken: string, revisionId: string )`

### Assets | [Source Code](src/assets.ts)

#### Create Article Asset | [Docs](https://developer.helpscout.com/docs-api/assets/create-article/)

`createArticleAsset( apiToken: string, options: CreateArticleAssetOptions )`

### Categories | [Source Code](src/categories.ts)

#### List Categories | [Docs](https://developer.helpscout.com/docs-api/categories/list/)

`listCategories( apiToken: string, collectionId: string, options?: ListCategoriesOptions )`

#### Get Category | [Docs](https://developer.helpscout.com/docs-api/categories/get/)

`getCategory( apiToken: string, categoryIdOrNumber: string | number )`

### Collections | [Source Code](src/collections.ts)

#### List Collections | [Docs](https://developer.helpscout.com/docs-api/collections/list/)

`listCollections( apiToken: string, options?: ListCollectionsOptions )`

#### Get Collection | [Docs](https://developer.helpscout.com/docs-api/collections/get/)

`getCollection( apiToken: string, collectionIdOrNumber: string | number )`

### Sites | [Source Code](src/sites.ts)

#### List Sites | [Docs](https://developer.helpscout.com/docs-api/sites/list/)

`listSites( apiToken: string, options?: ListSitesOptions )`

## License

Copyright (c) 2019 You Need A Budget, LLC

Licensed under the Apache-2.0 license
