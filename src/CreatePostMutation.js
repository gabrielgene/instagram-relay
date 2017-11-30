//1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from './Environment'
//2
let tempID = 0

const mutation = graphql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost($input: $input) {
      post {
        id
        description
        imageUrl
      }
    }
  }  
`
//3
export default (description, imageUrl, viewerId, callback) => {
  //4
  const variables = {
    input: {
      description,
      imageUrl,
      clientMutationId: ""
    },
  }
  //5
  commitMutation(
    environment,
    {
      mutation,
      variables,
      //6
      optimisticUpdater: (proxyStore) => {
        //1
        const id = 'client:newPost:' + tempID++
        const newPost = proxyStore.create(id, 'Post')
        newPost.setValue(id, 'id')
        newPost.setValue(description, 'description')
        newPost.setValue(imageUrl, 'imageUrl')
        //2
        const viewerProxy = proxyStore.get(viewerId)
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allPosts')
        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, newPost)
        }
      },
      updater: (proxyStore) => {
        //1
        const createPostField = proxyStore.getRootField('createPost')
        const newPost = createPostField.getLinkedRecord('post')
        //2
        const viewerProxy = proxyStore.get(viewerId)
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allPosts')
        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, newPost)
        }
      },
      //7
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
