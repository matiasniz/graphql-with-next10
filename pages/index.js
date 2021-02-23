import BasicLayout from "./../layouts/BasicLayout";

import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "./../lib/queries/products";
import { initializeApollo } from "../lib/apollo";

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.productos.length === 0) return <h2>404 | Not Found</h2>;

  return (
    <div className="home">
      <BasicLayout>
        {data.productos.map((producto) => (
          <div key={producto.id}>
            <span>{producto.nombre}</span>
            <div>
              {producto.fotos.map((foto) => (
                <img key={foto.id} src={foto.url} />
              ))}
            </div>
          </div>
        ))}
      </BasicLayout>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_ALL_PRODUCTS,
  });
  return {
    props: { initialApolloState: apolloClient.cache.extract() },
  };
};
