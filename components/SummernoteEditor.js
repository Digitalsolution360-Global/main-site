'use client';
import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'summernote/dist/summernote-lite.css';

export default function SummernoteEditor({ value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && editorRef.current) {
      import('summernote').then(() => {
        $(editorRef.current).summernote({
          height: 200,
          placeholder: 'Enter description...',
          toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['para', ['ul', 'ol']],
            ['insert', ['link']],
            ['view', ['codeview']]
            
          ],
          callbacks: {
            onChange: (contents) => {
              onChange(contents);
            }
          }
        });

        if (value) {
          $(editorRef.current).summernote('code', value);
        }
      });
    }
  }, []);

  return <div ref={editorRef} />;
}