import { Node } from "prosemirror-model";
import { defaultMarkdownSerializer } from "prosemirror-markdown";
import StarterKit from "@tiptap/starter-kit";
import { getSchema } from "@tiptap/core";
import { generateHTML } from '@tiptap/html';

// 1. schema do Tiptap (StarterKit)
const extensions = [
    StarterKit, // coloque todas as extensões que você usa
];

const schema = getSchema(extensions);

// 2. função para converter JSON -> markdown
export function tiptapJsonToMarkdown(json: JSON | any) {
    const pmNode = Node.fromJSON(schema, json); // <-- converter para Node
    const markdown = defaultMarkdownSerializer.serialize(pmNode);
    return markdown;
}

// 3. função para converter JSON -> HTML (opcional)
export function tiptapJsonToHTML(json: JSON | any) {
    const html = generateHTML(json, extensions);
    return html;
}