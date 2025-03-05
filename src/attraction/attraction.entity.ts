import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';



@Entity('attaction') // Table name in MySQL
export class Attractions {
  @PrimaryGeneratedColumn()
  id: number; // Auto-incremented primary key

  @Column({ type: 'varchar', length: 255 })
  name: string; // Name of the attraction

  @Column({ type: 'text', nullable: true })
  coverimage?: string; // Optional description

  @Column({ type: 'text', nullable: true })
  detail: string; // Status of the todo

  @Column({ type: 'decimal', precision: 11, scale: 7, nullable: true })
  longitude?: number; // Longitude with high precision

  @Column({ type: 'decimal', precision: 11, scale: 7, nullable: true })
  latitude?: number; // Latitude with high precision

}
