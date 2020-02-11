// Import the modules
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const sampleBooks = [
    {name: 'Heir of the apparent', genre: 'fantasy', id: '1'},
    {name: 'Grunge Real', genre: 'gore', id: '2'},
    {name: 'Sahitya Farookh', genre: 'sci-fi', id: '3'},

];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to get data from db/other sources
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
