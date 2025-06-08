import AddBlog from "@/components/Articles/AddArticle";
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


