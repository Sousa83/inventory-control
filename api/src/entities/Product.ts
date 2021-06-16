import { PrimaryColumn, Entity, Column } from 'typeorm';

@Entity()
export default class Product {
  @PrimaryColumn({generated: 'increment'})
  id: number;

  @Column({name: 'nome', nullable: false})
  name: string;

  @Column({name: 'descricao', nullable: true})
  description: string;

  @Column({name: 'quantidade', nullable: false})
  quantity: number;  

  @Column({name: 'price', nullable: false})
  price: number;
}