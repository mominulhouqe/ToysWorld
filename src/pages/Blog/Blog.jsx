import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container mx-auto mb-5 '>
            <div className='mx-5 bg-red-300 p-5 font-bold rounded-xl'>
                <h1 className='text-3xl mb-6'>  1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <div>
                    <span className='text-2xl'>
                        Ans :
                    </span>
                    <article>
                        An access token is a credential that is used to authorize and authenticate requests to access protected resources in an application. It is typically a string that represents the permissions granted to a user or an application. Access tokens have a limited lifespan and expire after a certain period of time. They are commonly used in token-based authentication systems.

                        A refresh token, on the other hand, is a long-lived token that is used to obtain a new access token after the current one expires. It is used to refresh the access token without requiring the user to reauthenticate. Refresh tokens are securely stored and exchanged for a new access token when needed.

                        To store access tokens and refresh tokens on the client-side, it is recommended to use secure storage mechanisms such as browser cookies or HTML5 Web Storage (localStorage or sessionStorage). These storage options provide a way to persist data on the client-side, and they can be accessed and utilized by the application when making API requests. It is important to store tokens securely and protect them from unauthorized access.
                    </article>
                </div>

            </div>
            <div className='mx-5 bg-red-300 p-5 font-bold mt-5 rounded-xl'>
                <h1 className='font-bold mt-5'>2. Compare SQL and NoSQL databases? </h1>
                <div>
                    <span className='text-2xl'>
                        Ans :
                    </span>

                    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems. Here's a comparison between the two:

                    SQL Databases:
                    - Relational databases with a predefined schema.
                    - Use structured tables with rows and columns to store data.
                    - Provide ACID (Atomicity, Consistency, Isolation, Durability) compliance, ensuring data integrity.
                    - Support complex queries using SQL for data retrieval and manipulation.
                    - Suitable for applications with structured and well-defined data requirements.
                    - Examples: MySQL, PostgreSQL, Oracle.

                    NoSQL Databases:
                    - Non-relational databases with a flexible schema or no schema at all.
                    - Use various data models like key-value pairs, document-based, columnar, or graph-based structures.
                    - Provide high scalability, flexibility, and performance for handling large amounts of data.
                    - Lack strict data consistency but offer eventual consistency models.
                    - Suitable for handling unstructured or semi-structured data and for applications with rapidly changing data requirements.
                    - Examples: MongoDB, Couchbase, Cassandra, Redis.

                    The choice between SQL and NoSQL databases depends on the specific requirements of the application, such as the nature of data, scalability needs, and the complexity of queries.
                </div>
            </div>

            <div className='mx-5 bg-red-300 p-5 font-bold mt-5 rounded-xl'>
                <div>
                    <h1>  3. What is Express.js? What is Nest.js?</h1>
                </div>
                <div>
                <span className='text-2xl'>
                        Ans :
                    </span>
                    <article>
                        - Express.js: Express.js is a fast and minimalist web application framework for Node.js. It provides a set of features for building web applications and APIs, including routing, middleware support, template engine integration, and more. Express.js is known for its simplicity and flexibility, allowing developers to create server-side applications quickly and efficiently. It has a large and active community and is widely used for building web servers and APIs.

                        - Nest.js: Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and incorporates concepts from both object-oriented programming (OOP) and functional programming (FP). Nest.js leverages the power of Express.js while providing a modular and structured approach to application development. It offers features like dependency injection, decorators, middleware, and easy integration with other libraries and tools. Nest.js promotes code reusability, testability, and scalability, making it a popular choice for building complex backend applications.
                    </article>
                </div>
            </div>



            <div className='mx-5 bg-red-300 p-5 font-bold mt-5 rounded-xl'>
                <div>
                    <h1>4. **What is MongoDB aggregate and how does it work?**</h1>
                </div>
                <div>
                <span className='text-2xl'>
                        Ans :
                    </span>
                    <article>
                        In MongoDB, the aggregate function is used to perform data aggregation operations on collections. It allows you to process and transform data using various stages, such as filtering, grouping, sorting, and computing aggregate values.

                        The aggregation framework in MongoDB provides a pipeline-based approach where multiple stages can be chained together

                        to perform complex data operations. Each stage in the pipeline receives input data from the previous stage and passes its output to the next stage.

                       
                    </article>
                </div>
            </div>



        </div>
    );
};

export default Blog;