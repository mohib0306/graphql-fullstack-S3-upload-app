const { GraphQLList, GraphQLObjectType, GraphQLNonNull } = require('graphql')
const { FileType } = require('./File')

exports.QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    uploads: {
      description: 'All stored files.',
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
      resolve: (parent, args, { S3Context }) => S3Context.fetchAllObjects()
    }
  })
})
