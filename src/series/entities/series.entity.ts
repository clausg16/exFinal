import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Episodio } from '../../episodios/entities/episodio.entity';
import { MinLength } from 'class-validator';

@Entity('series')
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column({nullable: true })
  sinopsis: string;

  @Column({ nullable: true })
  @MinLength(10)
  urlPortada: string; 

  @OneToMany(() => Episodio, episodio => episodio.serie)
  episodios: Episodio[];
}
