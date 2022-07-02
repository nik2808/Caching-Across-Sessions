import React from "react";
import Link from "next/link";
import styles from "./Episode.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

const Episode = ({ episodes }) => {
  if (episodes.length === 0) {
    return (
      <h1 style={{ backgroundColor: "white" }}>
        There are no episodes for your search.
      </h1>
    );
  }
  const isOnline = useContext(ThemeContext);
  return (
    <div className={styles["ep-ind"]}>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <Link href={`/episode/${episode.id}`}>
              <div
                className={
                  styles[isOnline ? "ep-item-online" : "ep-item-offline"]
                }
              >
                <h2 className={styles["ep-txt"]} id="heading">
                  {episode.name}
                </h2>
                <h4 className={styles["ep-txt"]}>Episode: {episode.episode}</h4>
                <h4 className={styles["ep-txt"]}>
                  Air-Date: {episode.air_date}
                </h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Episode;
