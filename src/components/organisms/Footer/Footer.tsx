import "./Footer.css";

export default function Footer(props: any) {
  return (
    <footer>
      <p>Hello I'm the footer</p>
      {props.children}
    </footer>
  )
}
