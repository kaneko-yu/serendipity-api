import { Column, Entity } from 'typeorm';

import { Location } from './location';

@Entity('Address')
export class Address extends Location {

  @Column()
  line1: string;

  @Column()
  line2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postalCode: string;

  @Column({
    default: 'Australia'
  })
  country: string;

  @Column()
  addressType: string;

}

// https://github.com/typeorm/typeorm/blob/master/docs/entities.md
