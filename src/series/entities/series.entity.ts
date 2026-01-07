import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Episodio } from '../../episodios/entities/episodio.entity';

@Entity('series')
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column()
  genero: string;

  @OneToMany(() => Episodio, episodio => episodio.serie)
  episodios: Episodio[];
}
