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
          callbacks: {
            onChange: (contents) => {
              onChange(contents);
            }
          }
        });
      });
    }

    return () => {
      if (editorRef.current) {
        $(editorRef.current).summernote('destroy');
      }
    };
  }, []);

  return <div ref={editorRef} />;
}