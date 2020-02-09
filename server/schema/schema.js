// Import the modules
const graphql, { GraphQLObjectType, GraphQLString } = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
});
