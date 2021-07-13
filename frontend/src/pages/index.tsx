import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next';

import { Grid, Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core';
import { Container } from '@material-ui/core';

import http from '../http';
import { Route } from '../models/route';

interface RoutesListPageProps {
  routes: Route[];
}

const RoutesListPage: NextPage<RoutesListPageProps> = ({ routes }) => {
  return (
    <Container>
      <div>
        <Head>
          <title>Listagem de rotas</title>
        </Head>
        <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
          Rotas
        </Typography>
        <Grid container spacing={4}>
          {
            routes.map((route, key) => (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography component="h2" variant="h5" gutterBottom>
                      {route.title}
                    </Typography>
                    <Typography component="h4" variant="h6" gutterBottom>
                      Posição inicial
                    </Typography>
                    <Typography component="p" variant="body2" color="textSecondary">
                      {`Latitude: ${route.startPosition.latitude}`}
                    </Typography>
                    <Typography component="p" variant="body2" color="textSecondary">
                      {`Logitude: ${route.startPosition.longitude}`}
                    </Typography>
                    <Typography component="h4" variant="h6" gutterBottom>
                      Posição final
                    </Typography>
                    <Typography component="p" variant="body2" color="textSecondary">
                      {`Latitude: ${route.endPosition.latitude}`}
                    </Typography>
                    <Typography component="p" variant="body2" color="textSecondary">
                      {`Logitude: ${route.endPosition.longitude}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Container>
  )
}

export default RoutesListPage;

export const getServerSideProps: GetServerSideProps<RoutesListPageProps> = async (context) => {
  const { data: routes } = await http.get('routes');
  console.log(routes)
  return {
    props: {
      routes
    }
  };
};