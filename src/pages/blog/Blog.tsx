import React, { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown"
import "../../styles/markdown.css";


export default function Blog() {
	//const markdownContent = `# Hello, World!\n This is a **markdown** file rendered with React.`;
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(
      './01.md'
    )
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
		<div>
			<ReactMarkDown>{markdown}</ReactMarkDown>
		</div>
	)
}