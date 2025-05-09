import React, { useState } from "react";
import folderIcon from "./assets/folder.png";
import fileIcon from "./assets/file.png";
import editIcon from "./assets/editGif.gif";
import createFile from "./assets/createFile.png";
import deleteIcon from "./assets/delete.png";
import { v4 as uuid } from "uuid";

const Content = ({ id, files, setFiles }) => {
  const [isChild, setIsChild] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isNewFolder, setIsNewFolder] = useState(false);
  const [isNewFile, setIsNewFile] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [fileName, setFileName] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editFolderName, setEditFolderName] = useState("");
  const data = files[id];
  const handleDelete = (e,id) => {
    e.stopPropagation();
    if (id == "1") {
      alert("you cant delete root folder");
      return;
    }
    const tempFile = { ...files };
    console.log(tempFile[id])
    const pid = tempFile[id]['pid'];

    tempFile[pid].children = tempFile[pid].children.filter(
      (item) => item != id
    );
    delete tempFile[id];
    setFiles(tempFile);
  };

  const handleFolderSubmit = (e, id) => {
    if(folderName){
        const newId = uuid();
    e.preventDefault();
    const tempFile = { ...files };
    tempFile[id].children.push(newId);
    tempFile[newId] = {
      pid: id,
      name: folderName,
      type: "dir",
      children: [],
    };
    setFiles(tempFile);
    }
    setIsNewFolder(false);
  };
  const handleFileSubmit = (e, id) => {
    if (fileName) {
      const newId = uuid();
      e.preventDefault();
      const tempFile = { ...files };
      tempFile[id].children.push(newId);
      tempFile[newId] = {
        pid: id,
        name: fileName,
        type: "file",
        children: [],
      };
      setFiles(tempFile);
    }
    setIsNewFile(false);
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();

    const tempFiles = { ...files };
    tempFiles[id].name = editFolderName;
    setFiles(tempFiles);
    setEdit(false);
  };

  return (
    <div className="">
      <div
        className="w-max flex gap-1 items-center"
        onClick={() => setIsChild((prev) => !prev)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="icon">
          {data.type == "dir" ? (
            <img src={folderIcon} alt="" className="h-8 w-8" />
          ) : (
            <img src={fileIcon} alt="" className="h-8 w-8" />
          )}
        </div>
        {!isEdit ? (
          <p className="font-bold text-lg">{data.name}</p>
        ) : (
          <form className="flex" onSubmit={(e) => handleEditSubmit(e, id)}>
            <input
              type="text"
              className="border p-1 rounded"
              value={editFolderName}
              onChange={(e) => setEditFolderName(e.target.value)}
            />
          </form>
        )}
        {isHover && (
          <div className="controller flex gap-1 items-center ml-4">
            <img
              src={editIcon}
              alt=""
              className="h-6 w-6 hover:border rounded"
              onClick={(e) => {
                e.stopPropagation();
                setEdit(true);
              }}
            />
            <img
              src={createFile}
              alt=""
              className="h-6 w-6 hover:border rounded"
              onClick={(e) => {
                e.stopPropagation();
                setIsNewFolder(false);
                setIsNewFile(true);
              }}
            />
            <img
              src={folderIcon}
              alt=""
              className="h-6 w-6 hover:border rounded"
              onClick={(e) => {
                e.stopPropagation();
                setIsNewFile(false);
                setIsNewFolder(true);
              }}
            />
            <img
              src={deleteIcon}
              alt=""
              className="h-6 w-6 hover:border rounded"
              onClick={(e) => {
                  handleDelete(e, id);
                  
              }}
            />
          </div>
        )}
      </div>
      <div className="subdir ml-10">
        {isChild &&
          data.children.length != 0 &&
          data.children.map((key, ind) => (
            <Content key={key} id={key} files={files} setFiles={setFiles} />
          ))}
        {isNewFolder && (
          <form className="flex" onSubmit={(e) => handleFolderSubmit(e, id)}>
            <img src={folderIcon} alt="" className="h-6 w-6" />{" "}
            <input
              type="text"
              className="border p-1 rounded"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </form>
        )}
        {isNewFile && (
          <form className="flex" onSubmit={(e) => handleFileSubmit(e, id)}>
            <img src={fileIcon} alt="" className="h-6 w-6" />{" "}
            <input
              type="text"
              className="border p-1 rounded"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Content;
