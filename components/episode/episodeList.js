import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import styles from "../../styles/Home2.module.css";
import { Link } from "@chakra-ui/react";
import Router from "next/router";
import { useQuery, gql } from "@apollo/client";

import Episode from "./episode";

const EPISODE_LIST = gql`
  query getEpisodes($submit: String!) {
    episodes(filter: { name: $submit }) {
      results {
        name
        id
        air_date
        episode
        created
      }
    }
  }
`;

const EpisodeList = () => {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("");
  const { error, data } = useQuery(EPISODE_LIST, {
    variables: { submit },
  });
  const optionList = [
    ["RICK AND MORTY WIKI", "/"],
    ["EPISODES", "/episodePage"],
    ["CHARACTERS", "/charPage"],
  ];

  return (
    <div className="nav">
      <div className="nav-container">
        {optionList.map(([item, URL], index) => (
          <Link
            className="nav-element"
            key={index}
            href={URL}
            style={index === 1 ? { backgroundColor: "lightblue" } : {}}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="page">
        <Head>
          <title>Episodes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="page-heading">
          <Link href="/">Rick and Morty</Link>
        </h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setSubmit(search + " ");
          }}
        >
          <div className="search-bar">
            <input
              className="search-bar-inpt"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="search-btn"
              disabled={search === ""}
              type="submit"
            >
              Search
            </button>
            <button
              className="reset-btn"
              onClick={() => {
                setSubmit("");
                setSearch("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <div className="items">
          {error ? (
            <h1>
              Sorry, you are offline. You cannot make new searches. However, you
              can still make old ones.
            </h1>
          ) : data ? (
            <Episode episodes={data.episodes.results} />
          ) : (
            <div> Loading...</div>
          )}
        </div>
        <footer className={styles.footer}>&copy;</footer>
      </div>
    </div>
  );
};

export default EpisodeList;