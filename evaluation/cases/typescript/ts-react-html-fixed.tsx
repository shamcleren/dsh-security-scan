import DOMPurify from "dompurify";
export function Comment(props: { body: string }) {
  return <div className="comment" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }} />;
}
