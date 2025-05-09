import React, { useRef, useState, useEffect } from "react";
import useSearch from "./useSearch";

const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const bottomRef = useRef(null);
  const { data,loading } = useSearch(pageNumber);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prev) => prev + 1);
        console.log("bottom reach")
      } 
    });

    const currentRef = bottomRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="flex justify-between items-center flex-col text-2xl gap-4">
      {data.map((title,ind) => (
        <div
          className="w-full flex justify-center py-8 border-b-2 border-solid"
          key={ind}
        >
          {title}
        </div>
      ))}

      <div ref={bottomRef} className="text-2xl text-red-500">
       this div visible wooh
      </div>
    </div>
  );
};

export default InfiniteScroll;
