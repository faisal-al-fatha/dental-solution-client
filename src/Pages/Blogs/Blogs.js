import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
    return (
        <div>
      <div className="grid grid-cols-1 gap-5 my-14 lg:mx-72 md:mx-48 sm:mx-10">
        {/* Question 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
            </p>
            <br />
            <p>
              <span className="font-semibold">Answer:</span> Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations.
            </p>
            <br />
            <p>
              <span className="font-semibold">Answer:</span> SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
NoSQL databases need not stick to this format, but generally fit into one of four broad categories:.
            </p>
            <br />

          </div>
        </div>
        {/* Question 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> SON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved..
            </p>
            <br />
            <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
          </div>
        </div>
        {/* Question 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.  </p>
              <br />
              <p>
              Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
              </p>
<br />
<p>Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</p>
<br />
<p>Javascript is basically used on the client-side, while nodejs is mostly used on the server-side</p>
            
            
           
          </div>
        </div>
        {/* Question 4  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5  mb-10"
        >
          <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
            </p>
            <br />
            <p>
            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blogs;