import React, { useState } from "react";

const Comment = ({ comment, data, handleAddComments,id, handleDelete }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [text, setText] = useState('');


  return (
    <div className="commentContainer ">
      <div className="comment rounded-xl bg-gray-300 p-5 text-lg font-bold mt-2 flex items-center gap-4">
        <div className="h-16 w-16">
          <img
            src="https://placehold.co/120x120/png"
            className="rounded-full"
            alt=""
          />
        </div>
        <div>
          <p> {comment?.comment}</p>
          <div>
            {isAdd ? (
              <div>
                <input type="text" className="border p-1 text-sm rounded" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button
                  className="bg-gray-500 font-medium text-base p-1 ml-2 text-white rounded border"
                  onClick={() => {
                    handleAddComments(id,text)
                    setIsAdd((prev) => !prev)
                  }}
                >add</button>
              </div>
            ) : (
              <div className="">
                <button
                className="bg-gray-500 font-medium text-sm p-1 rounded border text-white "
                onClick={() => setIsAdd((prev) => !prev)}
              >
                Reply
              </button>
                <button
                className="bg-gray-500 font-medium text-sm p-1 rounded border text-white "
                onClick={() => 
                {
                  handleDelete(id)
                }
                }
              >
                Delete
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="reply  ml-10 ">
        {comment?.children.length != 0 &&
          comment?.children.map((key, ind) => (
            <Comment key={ind} comment={data[key]} data={data}  id={key} handleAddComments={handleAddComments} handleDelete={handleDelete}/>
          ))}
      </div>
    </div>
  );
};

export default Comment;
