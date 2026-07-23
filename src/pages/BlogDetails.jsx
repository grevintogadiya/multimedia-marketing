import { useParams } from "react-router-dom";

export default function BlogDetails() {

  const { slug } = useParams();

  return (

    <div className="min-h-screen flex items-center justify-center">

      <h1 className="text-5xl font-bold">

        {slug}

      </h1>

    </div>

  );

}