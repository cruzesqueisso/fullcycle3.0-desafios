import { Injectable } from '@nestjs/common';
import { Route } from './models/route';

@Injectable()
export class AppService {
  private routes: Route[] = [
    {
      title: 'Los Angeles -> San Francisco',
      startPosition: {
        latitude: '34.059761',
        longitude: '-118.276802',
      },
      endPosition: {
        latitude: '37.733795',
        longitude: '-122.446747',
      }
    },
    {
      title: 'Washington D.C -> Baltimore',
      startPosition: {
        latitude: '38.8951',
        longitude: '-77.0364',
      },
      endPosition: {
        latitude: '39.299236',
        longitude: '-76.609383',
      }
    },
    {
      title: 'Austin -> Round Rock',
      startPosition: {
        latitude: '30.266666',
        longitude: '-97.733330',
      },
      endPosition: {
        latitude: '30.508255',
        longitude: '-97.678894',
      }
    },
    {
      title: 'San Diego -> Las Vegas',
      startPosition: {
        latitude: '32.732346',
        longitude: '-117.196053',
      },
      endPosition: {
        latitude: '36.114704',
        longitude: '-115.201462',
      }
    },
    {
      title: 'Toronto -> Montreal',
      startPosition: {
        latitude: '43.653908',
        longitude: '-79.384293',
      },
      endPosition: {
        latitude: '45.630001',
        longitude: '-73.519997',
      }
    },
  ];

  getRoutes(): Route[] {
    return this.routes;
  }
}
