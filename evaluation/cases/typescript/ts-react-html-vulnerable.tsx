export function Comment(props: { body: string }) {
  return <div className="comment" dangerouslySetInnerHTML={{ __html: props.body }} />;
}
