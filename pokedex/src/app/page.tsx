'use client';
import { Nunito } from "next/font/google";
import styles from "./page.module.css";
import getAllPokemons from '@/services/getAllPokemons';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const data = getAllPokemons();
    console.log(data);
  }, []);

  return (
    <main className={styles.main}>
    </main>
  );
}
