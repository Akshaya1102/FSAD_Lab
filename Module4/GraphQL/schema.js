import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } from "graphql";

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];


const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        price: { type: GraphQLInt }
    }
});


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve() {
                return products;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                name: { type: GraphQLString },
                price: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const product = { id: products.length + 1, name: args.name, price: args.price };
                products.push(product);
                return product;
            }
        }
    }
});


export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
