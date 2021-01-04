import Layout from "../../components/Layout/Layout";

const Country = ({ country }) => {
    return (<Layout title={country.name}>
        country
    </Layout>
    )
}

export default Country;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
    const country = await res.json();
    return {
        props: {
            country,
        }
    }
}