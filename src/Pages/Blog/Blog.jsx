import React from 'react';

const Blog = () => {
    const handleDownload = () => {
    
        const pdfContent = `
            Blog Page Information:
            
            Question-1: Tell us the differences between uncontrolled and controlled components.
            Ans: Controlled components provide more control and flexibility over form inputs as the component manages the state and handles user input. Uncontrolled components, on the other hand, rely on the DOM for managing the state and don't provide as much control and flexibility. The choice between the two depends on the specific requirements and complexity of your application.
        `;

        
        const blob = new Blob([pdfContent], { type: 'application/pdf' });

       
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'blog_page.pdf';
        link.click();
    };

    return (
        <>
            <div>
                <h2 className='text-center my-5'>Welcome to my Blog page</h2>
            </div>
            <div className='container'>
                <h5>Question-1: Tell us the differences between uncontrolled and controlled components.</h5>
                <p>
                    <b>Ans: </b> Controlled components provide more control and flexibility over form inputs as the component manages the state and handles user input. Uncontrolled components, on the other hand, rely on the DOM for managing the state and don't provide as much control and flexibility. The choice between the two depends on the specific requirements and complexity of your application.
                </p>
                <h5>Question-2: How to validate React props using PropTypes?</h5>
                <p><b>Ans:</b> Fristly we need to install propTypes. Then also need to import it from prop-types. and then
                    define the propTypes for a component by assigning the desired prop types to the component's propTypes property which is given below: <br />
                    PropTypes.string - Validates that the prop is a string. <br />
                    PropTypes.number - Validates that the prop is a number. <br />
                    PropTypes.array - Validates that the prop is an array.<br />
                    PropTypes.object - Validates that the prop is an object.<br />
                    PropTypes.func - Validates that the prop is a function.<br />
                    PropTypes.bool - Validates that the prop is a boolean.<br />
                    PropTypes.node - Validates that the prop can be a React node (string, number, element, etc.).<br />
                    PropTypes.element - Validates that the prop is a React element.<br />
                    PropTypes.instanceOf(Constructor) - Validates that the prop is an instance of a specific class or constructor function.<br />
                    PropTypes.oneOf([value1, value2]) - Validates that the prop matches one of the provided values.<br />
                    PropTypes.oneOfType([PropTypes.string, PropTypes.number]) - Validates that the prop matches at least one of the provided types.<br />
                    PropTypes.arrayOf(PropTypes.string) - Validates that the prop is an array of a specific type.<br />
                    PropTypes.shape prop: PropTypes.string  - Validates that the prop is an object that matches the provided shape.

                </p>

                <h5>Question-3: Tell us the difference between nodejs and express js.</h5>
                <p><b>Ans:</b> Node.js is a runtime environment that allows to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js. Node.js provides the foundation for server-side JavaScript execution, while Express.js simplifies the process of building web applications and APIs by providing a set of features and abstractions. You can use Express.js within a Node.js environment to build web applications with ease.</p>

                <h5>Question-4: What is a custom hook, and why will you create a custom hook?</h5>
                <p><b>Ans:</b> A custom hook in React is a JavaScript function that utilizes React built-in hooks and allows you to encapsulate and reuse logic across multiple components. Custom hooks follow a naming convention of starting with the word use (e.g., useCustomHook), which helps React recognize them as hooks.By creating custom hooks, you can effectively abstract, share, and reuse logic in a modular way, leading to cleaner and more maintainable code. They provide a powerful tool for building scalable and reusable components in React.</p>


            </div>
            <div className='container text-center my-5'>
                <h3>Download PDF</h3>
                <button onClick={handleDownload}>
                    <i className='fa fa-download'></i> Download
                </button>
            </div>
        </>
    );
};

export default Blog;






























// import React from 'react';

// const Blog = () => {
//     return (

//         <>
//             <div>
//                 <h2 className='text-center'>Welcome to my Blog page</h2>
//             </div>
//             <div className='container'>
//                 <h5>Question-1: Tell us the differences between uncontrolled and controlled components.</h5>
//                 <p><b>Ans: </b> Controlled components provide more control and flexibility over form inputs as the component manages the state and handles user input. Uncontrolled components, on the other hand, rely on the DOM for managing the state and don't provide as much control and flexibility. The choice between the two depends on the specific requirements and complexity of your application.</p>

                
//             </div>
//         </>

//     );
// };

// export default Blog;











// import React from 'react';
// import { FaDownload } from 'react-icons/fa';

// const Blog = () => {
//   const handleDownload = () => {
//     // Code to generate and download the PDF
//     // Here you can use libraries like jsPDF or html2pdf to generate the PDF
//   };

//   return (
//     <>
//       <div>
//         <h2 className="text-center">Welcome to my Blog page</h2>
//       </div>
//       <div className="container">
//         <h5>Question-1: Tell us the differences between uncontrolled and controlled components.</h5>
//         <p>
//           <b>Ans: </b> Controlled components provide more control and flexibility over form inputs as the component
//           manages the state and handles user input. Uncontrolled components, on the other hand, rely on the DOM for
//           managing the state and don't provide as much control and flexibility. The choice between the two depends on
//           the specific requirements and complexity of your application.
//         </p>

//         <button className="btn btn-primary" onClick={handleDownload}>
//           <FaDownload /> Download PDF
//         </button>
//       </div>
//     </>
//   );
// };

// export default Blog;