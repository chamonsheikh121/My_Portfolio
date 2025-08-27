// import React, { useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import { useEffect } from 'react';

import { useAuth } from "./AuthProvider";


// import BlogCard from './BlogCard';




const Blogs = () => {
    const { theme } = useAuth()
    // console.log(global);
    // // const { user } = UseAuthContext()
    // // const [blogs, isLoading] = UsePost();


    // const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    // const saveContent = () => {
    //     const content = editorState.getCurrentContent();
    //     const rawContent = convertToRaw(content);
    //     const html = draftToHtml(rawContent);
    //     console.log('Saved HTML:', html); // You can store this HTML in your backend
    // };


console.log(theme);
    const blogs = [123, 21, 31, 23, 123, 12, 3, 12, 31, 2]
    return (

        <div className={`mx-auto p-5 h-screen gap-10 md:gap-0 flex flex-col md:flex-row items-center justify-center`}>
            <iframe className="w-[300px] h-[300px] rounded-full" src="https://lottie.host/embed/f41e3275-c64b-4d1f-a99a-74e82a52cf6c/VmR54PiYAB.json"></iframe>
            <h1 className="text-3xl px-10 font-bold text-center">Blog page Under Processing, Will be update soon</h1>
            
        </div>

    );
};

export default Blogs;