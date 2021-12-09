import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [html, setHtml] = useState(`<span style="font-size: xx-large;">asdasdasd</span><span style="font-size: x-large;">asdasdasd</span><span style="font-size: large;">asdasdasd</span><span style="color: var(--font-color);">asdasdsadasdasd<span style="font-weight: bold;">asdasdasdasd</span>asdasdasd<span style="text-decoration-line: underline;">asdasdasd</span>asdasdasd<span style="text-decoration-line: line-through;">asdsadasd</span>asdasdasd</span><span style="color: var(--contrast-color);">asdasdasdasdasdasdasdadsasd</span>
  `);
  useEffect(() => {
    document.getElementById("test").innerHTML = html;
  }, []);
  return (
    <div id="test" className={styles.container}>
      {html}
    </div>
  );
}
