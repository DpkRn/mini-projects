import React, { useState } from 'react'
import Content from './Content'

const FileExprorer = () => {
    const [files,setFiles]=useState({
        "1": {
          "pid": null,
          "name": "root",
          "type": "dir",
          "children": [2, 5, 12, 18, 19]
        },
        "2": {
          "pid": 1,
          "name": "public",
          "type": "dir",
          "children": [3, 4]
        },
        "3": {
          "pid": 2,
          "name": "images",
          "type": "dir",
          "children": []
        },
        "4": {
          "pid": 2,
          "name": "public_nested_file",
          "type": "file",
          "children": []
        },
        "5": {
          "pid": 1,
          "name": "src",
          "type": "dir",
          "children": [6, 8, 9, 10]
        },
        "6": {
          "pid": 5,
          "name": "components",
          "type": "dir",
          "children": []
        },
        "8": {
          "pid": 5,
          "name": "main.jsx",
          "type": "file",
          "children": []
        },
        "9": {
          "pid": 5,
          "name": "App.jsx",
          "type": "file",
          "children": []
        },
        "10": {
          "pid": 5,
          "name": "app.module.css",
          "type": "file",
          "children": []
        },
        "12": {
          "pid": 1,
          "name": "dist",
          "type": "dir",
          "children": [13, 14, 15]
        },
        "13": {
          "pid": 12,
          "name": "index.js",
          "type": "file",
          "children": []
        },
        "14": {
          "pid": 12,
          "name": "index.html",
          "type": "file",
          "children": []
        },
        "15": {
          "pid": 12,
          "name": "index.css",
          "type": "file",
          "children": []
        },
        "18": {
          "pid": 1,
          "name": "package.json",
          "type": "file",
          "children": []
        },
        "19": {
          "pid": 1,
          "name": "package-lock.json",
          "type": "file",
          "children": []
        }
      }
      )
  return (
    <div className='p-10'>
        <Content id='1' files={files} setFiles={setFiles}/>
    </div>
  )
}

export default FileExprorer