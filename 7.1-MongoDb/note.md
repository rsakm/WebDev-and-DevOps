



https://www.notion.so/Context-1b04d460fff3816cba4cdf47b7443c9d




**Databases are organized collections of data that are structured to enable efficient storage, retrieval, and management of information.**

Whenever you create a `full stack app` , you  `persist` data in `databases`. 

For example - 

1. User information
2. TODOs of your todo app
3. Posts for facebook
4. Tweets for twitter …

## Types of databases

- **Relational Databases**: Use tables to store data and relationships between data (e.g., MySQL, PostgreSQL).
- **NoSQL Databases**: Designed for more flexible data models and often used for big data or real-time web applications (e.g., MongoDB).
- **Graph Databases**: Store data in nodes and edges to represent relationships (e.g., Neo4j).
- **Vector Databases**: Used in ML to store data in the form of embeddings

Today we’ll be learning about `MongoDB` which is a `NoSQL Database`

**For a fullstack application, we'll be deploying our application on the internet. We'll have multiple backend servers, which will run our express application. For a live full stack application, there are many backend servers, which will be transiant, which prevents the backend server failure. I.e sometimes one server may fail then the other will be functioning. Some times when we receive a lot of traffic, then we up scale the backend servers. So we don't want our backend servers to persist data, i.e they must be stateless.i.e we  will not be storing any information in our backend servers.**

**Transiant stands for that we can upscale or use multiple backend servers.**