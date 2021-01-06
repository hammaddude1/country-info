import { useState } from "react";
import CountryTable from '../components/CountryTable/CountryTable'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Index.module.css'

export default function Home({ countries }) {

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  }
  else {
    console.log = console.warn = console.error = () => { };
  }

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  );

  const handleChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className={styles.input_container}>
        <div className={styles.counts}>
          Found {countries.length} countries
      </div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Search by Name, Region or SubRegion"
            onChange={handleChange}
          />
        </div>
      </div>
      <CountryTable countries={filteredCountries} />
    </Layout>
  )
}


export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    }
  }
}