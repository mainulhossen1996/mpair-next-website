import AddBlog from "@/components/Blog/AddBlog";
import PrivateRoute from "@/components/privateRoute";

const page = () => {
  return (
    <div>
      <PrivateRoute>
        <AddBlog />
      </PrivateRoute>
    </div>
  );
};

export default page;


