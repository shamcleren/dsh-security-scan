import DOMPurify from "dompurify";
function render(value: string, element: HTMLElement) { element.innerHTML = DOMPurify.sanitize(value); }
