import React, { useState, useEffect } from 'react';
import AdvertList from '../components/adverts/AdvertList';
import FilterForm from '../components/filter/FilterForm';
import Loader from '../components/Loader';
import storage from '../utils/storage';
import { setAuthorizationHeader } from '../api/api';
import { getAdverts } from '../api/adverts';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from 'mdb-react-ui-kit';

const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const data = await getAdverts();
        setAdverts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) {
    return <Loader />;
  }

  if (adverts.length === 0) {
    return (
      <div>
        <p>No hay anuncios disponibles.</p>
        <a href="/adverts/new">Crear un nuevo anuncio</a>
      </div>
    );
  }

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h1>Listado de Anuncios</h1>
            {loading ? (
              <Loader />
            ) : (
              <>
                <MDBRow>
                  <MDBCol md="3">
                    <FilterForm onFilterChange={handleFilterChange} />
                  </MDBCol>
                  <MDBCol md="9">
                    <AdvertList adverts={adverts} />
                    <MDBPagination className="my-4">
                      <MDBPaginationItem disabled>
                        <MDBPaginationLink>Anterior</MDBPaginationLink>
                      </MDBPaginationItem>
                      <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                      </MDBPaginationItem>
                      <MDBPaginationItem active>
                        <MDBPaginationLink>2</MDBPaginationLink>
                      </MDBPaginationItem>
                      <MDBPaginationItem>
                        <MDBPaginationLink>3</MDBPaginationLink>
                      </MDBPaginationItem>
                      <MDBPaginationItem>
                        <MDBPaginationLink>Siguiente</MDBPaginationLink>
                      </MDBPaginationItem>
                    </MDBPagination>
                  </MDBCol>
                </MDBRow>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AdvertsPage;
