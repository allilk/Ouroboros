const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields: 'title' and 'author'.
	type newsPost {
		title: String
		description: String
		id: String
	}

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "news" query returns an array of zero or more news (defined above).
	type Query {
		news: [newsPost]
	}
`;
const news = [
	{
		title: "Test News Title",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi sem, pretium ac dolor in, tempor ultricies felis. Mauris ac libero sodales, vestibulum nibh ac, scelerisque mauris. Nam fermentum vel sem eu cursus. Proin feugiat luctus tellus, id convallis turpis cursus non. Aenean tincidunt orci at tempor convallis. Nam volutpat, dui nec dapibus facilisis, lacus turpis venenatis tellus, ut condimentum urna nisl id neque. Nunc sed pretium justo, non dapibus lorem. ",

		id: "dasdW",
		details: {
			created_by: "User 1",
		},
	},
	{
		title: "Test News Title 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi sem, pretium ac dolor in, tempor ultricies felis. Mauris ac libero sodales, vestibulum nibh ac, scelerisque mauris. Nam fermentum vel sem eu cursus. Proin feugiat luctus tellus, id convallis turpis cursus non. Aenean tincidunt orci at tempor convallis. Nam volutpat, dui nec dapibus facilisis, lacus turpis venenatis tellus, ut condimentum urna nisl id neque. Nunc sed pretium justo, non dapibus lorem. ",

		id: "dadWs",
		details: {
			created_by: "User 1",
		},
	},
];
const resolvers = {
	Query: {
		news: () => news,
	},
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
