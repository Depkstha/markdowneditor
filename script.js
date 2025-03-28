// Configure Marked with Highlight.js
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
});

// Get DOM elements
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clearBtn");

// Initial sample content
editor.value = `# Welcome to Markdown Previewer!

## Basic Syntax

### Headings
# H1
## H2
### H3

### Emphasis
*italic* or _italic_
**bold** or __bold__
***bold italic*** or ___bold italic___

### Lists
1. First item
2. Second item
3. Third item

- Unordered list
- Another item
  - Sub-item
  - Another sub-item

### Links
[ChaiCode](https://chaicode.com)

### Code
Inline \`code\` example

\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`
`;

// Update preview on input
function updatePreview() {
  preview.innerHTML = marked.parse(editor.value);
}

// Event listeners
editor.addEventListener("input", updatePreview);
clearBtn.addEventListener("click", () => {
  editor.value = "";
  preview.innerHTML = "";
});

// Initial preview
updatePreview();
