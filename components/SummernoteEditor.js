"use client";

import { useEffect, useRef } from "react";
import $ from "jquery";

import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";

export default function SummernoteEditor({
  value,
  onChange,
  height = 300,
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    const $editor = $(editorRef.current);

    $editor.summernote({
      height,
      callbacks: {
        onChange: function (contents) {
          onChange(contents);
        },
      },
    });

    $editor.summernote("code", value || "");

    return () => {
      $editor.summernote("destroy");
    };
  }, []);

  useEffect(() => {
    const $editor = $(editorRef.current);

    if ($editor.summernote("code") !== value) {
      $editor.summernote("code", value || "");
    }
  }, [value]);

  return <textarea ref={editorRef}></textarea>;
}