'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useState } from 'react';

export default function TipTapEditor({ value, onChange }) {
  const [showHtml, setShowHtml] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Enter description...',
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('bold') ? 'bg-gray-200' : ''}`}
        >
          <b>B</b>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('italic') ? 'bg-gray-200' : ''}`}
        >
          <i>I</i>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('underline') ? 'bg-gray-200' : ''}`}
        >
          <u>U</u>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('strike') ? 'bg-gray-200' : ''}`}
        >
          <s>S</s>
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1"></span>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 rounded hover:bg-gray-200 text-xs ${editor?.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded hover:bg-gray-200 text-xs ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1.5 rounded hover:bg-gray-200 text-xs ${editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
        >
          H3
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1"></span>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('bulletList') ? 'bg-gray-200' : ''}`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded hover:bg-gray-200 ${editor?.isActive('orderedList') ? 'bg-gray-200' : ''}`}
        >
          1. List
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1"></span>
        <button
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
          className="p-1.5 rounded hover:bg-gray-200"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
          className="p-1.5 rounded hover:bg-gray-200"
        >
          ↔
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
          className="p-1.5 rounded hover:bg-gray-200"
        >
          →
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1"></span>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          className="p-1.5 rounded hover:bg-gray-200"
        >
          {'</>'}
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().setHardBreak().run()}
          className="p-1.5 rounded hover:bg-gray-200"
        >
          ↵
        </button>

        {/* HTML Toggle Button */}
        <button
          type="button"
          onClick={() => setShowHtml(!showHtml)}
          className={`ml-auto px-3 py-1 text-xs font-medium rounded ${
            showHtml ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {showHtml ? 'Hide HTML' : 'View HTML'}
        </button>
      </div>

      {/* Editor Content */}
      {!showHtml ? (
        <EditorContent editor={editor} className="p-4 min-h-[200px] prose max-w-none focus:outline-none" />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[200px] p-4 font-mono text-sm focus:outline-none bg-gray-50"
          placeholder="HTML content..."
        />
      )}
    </div>
  );
}