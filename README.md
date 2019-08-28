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

> Version 1 of this client focuses on fetching data, i.e. the API Reads. We'll happily welcome your PRs to improve this client.

### Articles

[Source Code](src/articles.ts)

#### List Articles

[Docs](https://developer.helpscout.com/docs-api/articles/list/)

##### In Collection

`listArticlesInCollection( apiToken: string, collectionId: string, options?: ListArticleOptions )`

##### In Category

`listArticlesInCategory( apiToken: string, categoryId: string, options?: ListArticleOptions )`

#### Search Articles

`searchArticles( apiToken: string, options: SearchArticlesOptions )`

[Docs](https://developer.helpscout.com/docs-api/articles/search/)

#### List Related Articles

`listRelatedArticles( apiToken: string, articleId: string, options?: ListRelatedArticlesOptions )`

[Docs](https://developer.helpscout.com/docs-api/articles/list-related/)

#### List Revisions

`listRevisions( apiToken: string, articleId: string, options?: ListRevisionsOptions )`

[Docs](https://developer.helpscout.com/docs-api/articles/revisions/list/)

#### Get Article

`getArticle( apiToken: string, articleIdOrNumber: string | number, options?: GetArticleOptions )`

[Docs](https://developer.helpscout.com/docs-api/articles/get/)

#### Get Revision

`getRevision( apiToken: string, revisionId: string )`

[Docs](https://developer.helpscout.com/docs-api/articles/revisions/get/)

### Assets

[Source Code](src/assets.ts)

#### Create Article Asset

`createArticleAsset( apiToken: string, options: CreateArticleAssetOptions )`

[Docs](https://developer.helpscout.com/docs-api/assets/create-article/)

### Categories

[Source Code](src/categories.ts)

#### List Categories

`listCategories( apiToken: string, collectionId: string, options?: ListCategoriesOptions )`

[Docs](https://developer.helpscout.com/docs-api/categories/list/)

#### Get Category

`getCategory( apiToken: string, categoryIdOrNumber: string | number )`

[Docs](https://developer.helpscout.com/docs-api/categories/get/)

### Collections

[Source Code](src/collections.ts)

#### List Collections

`listCollections( apiToken: string, options?: ListCollectionsOptions )`

[Docs](https://developer.helpscout.com/docs-api/collections/list/)

#### Get Collection

`getCollection( apiToken: string, collectionIdOrNumber: string | number )`

[Docs](https://developer.helpscout.com/docs-api/collections/get/)

### Sites

[Source Code](src/sites.ts)

#### List Sites

`listSites( apiToken: string, options?: ListSitesOptions )`

[Docs](https://developer.helpscout.com/docs-api/sites/list/)

## License

Copyright (c) 2019 You Need A Budget, LLC

Licensed under the Apache-2.0 license
