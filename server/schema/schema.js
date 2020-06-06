// Import the modules
const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLId
} = graphql;

const sampleBooks = [
    {name: 'Heir of the apparent', genre: 'fantasy', id: '1'},
    {name: 'Grunge Real', genre: 'gore', id: '2'},
    {name: 'Sahitya Farookh', genre: 'sci-fi', id: '3'},

];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLId},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLId}},
            resolve(parent, args){
                // code to get data from db/other sources
                return _.find(sampleBooks, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
