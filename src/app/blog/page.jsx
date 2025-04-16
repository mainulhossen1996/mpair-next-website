// import AddBlog from "@/components/Blog/AddBlog";
// import PrivateRoute from "@/components/privateRoute";

// const page = () => {
//   return (
//     <div>
//       <PrivateRoute>
//         <AddBlog />
//       </PrivateRoute>
//     </div>
//   );
// };

// export default page;


import React from 'react';
import Hero from '@/components/Blog/Hero';
import Blog from '@/components/Blog/Blog';

const page = () => {
  return (
    <div>
        <Hero/>
        <Blog/>
    </div>
  )
}
export default page;