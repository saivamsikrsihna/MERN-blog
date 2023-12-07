import React from "react";
// import ThreeScene from '../components/ThreeScene';


const Home = () => {
  return (
   
    <div className='mb-20' >
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      Welcome to our technical blog focused on Node.js!
      </h1>
      <p className='mx-auto leading-relaxed text-base mb-4'>
      Our homepage is designed to provide you with valuable insights, tutorials, and resources related to Node.js development. Whether you're a beginner seeking fundamental concepts or an experienced developer looking for advanced techniques, we have you covered.
</p>
      <p className='mx-auto leading-relaxed text-base mb-4'>
      On our homepage, you can expect to find the following sections:
<br></br>
1. Latest Articles: Stay up to date with the newest content we've published. This section showcases our most recent blog posts, covering a wide range of Node.js topics. We strive to offer articles that are informative, practical, and relevant to the latest developments in the Node.js ecosystem.
</p>
      <p className='mx-auto leading-relaxed text-base mb-4'>
      2. Resources: Access a curated list of valuable resources, including recommended books, online courses, video tutorials, and relevant documentation. We aim to provide you with a comprehensive collection of resources to further expand your knowledge of Node.js.

Stay tuned for regular updates and new content. We hope our blog serves as a valuable resource for your Node.js journey. Happy coding!
      </p>
      {/* <ThreeScene /> */}
   <img src='/images/svg.svg'/>
    </div>
    
  );
};

export default Home;
