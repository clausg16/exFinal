import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Series } from '../../series/entities/series.entity';

@Entity()
export class Episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: number;

  @Column()
  numeroCapitulo: number;

  @ManyToOne(() => Series, serie => serie.episodios)
  serie: Series;
}
