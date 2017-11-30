/**
 * @flow
 * @relayHash 3035226c041fd93288af91f600654ee9
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreatePageViewerQueryResponse = {|
  +viewer: {|
    +id: string;
  |};
|};
*/


/*
query CreatePageViewerQuery {
  viewer {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePageViewerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreatePageViewerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CreatePageViewerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CreatePageViewerQuery {\n  viewer {\n    id\n  }\n}\n"
};

module.exports = batch;
