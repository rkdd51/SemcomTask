import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/posts";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="data">
        <div className="search">
          <input
            type="text"
            placeholder="Search Contact"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <div>
          {posts
            ?.filter((post) => {
              if (search == "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return post;
              }
            })
            .map((e) => {
              return (
                <>
                  <div key={e.id}>{e.title}</div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
