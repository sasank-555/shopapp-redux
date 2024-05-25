import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const today = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", options);
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    const out = await fetch(API_URL);
    const data = await out.json();
    setLoading(false);
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <div className="text-3xl mt-4 text-center">
            <p className="text-slate-900 font-semibold">
              <span className="text-green-400">{`${dayOfWeek}'s`}</span> Hot
              Deals
            </p>
          </div>
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-5">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
