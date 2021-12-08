import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [html, setHtml] = useState("<h1>Bueeenas</h1>");
  useEffect(() => {
    document.getElementById("test").innerHTML = html;
  }, []);
  return (
    <div id="test" className={styles.container}>
      {html}
    </div>
  );
}
