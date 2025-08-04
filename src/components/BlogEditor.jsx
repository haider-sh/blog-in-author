import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef, useState } from 'react';
import styles from "../styles/PostForm.module.css";
import { Save } from 'lucide-react';

function BlogEditor({ initialValue, setContent }) {
    const editorRef = useRef(null);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [initialValue]);
    const save = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            
            setDirty(false);
            editorRef.current.setDirty(false);
            
            setContent(content);
        }
    };

    return (
        <div className={styles.editor}>
            <Editor
                apiKey='7mzvcy8qrpnzp6b2etju0s5yccquzmm9st3qnybtgfagi0jv'
                initialValue={initialValue}
                onInit={(evt, editor) => editorRef.current = editor}
                onDirty={() => setDirty(true)}
                init={{
                    plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                }}
            />
            <button onClick={save} disabled={!dirty}><Save /></button>
            {dirty && <p>You have unsaved content!</p>}
        </div>
    );
}

export default BlogEditor;
