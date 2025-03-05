import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';



@Entity('todos') // Table name in MySQL
export class Todos {
  @PrimaryGeneratedColumn()
  id: number; // Auto-incremented primary key

  @Column({ type: 'varchar', length: 255 })
  title: string; // Title of the todo

  @Column({ type: 'text', nullable: true })
  description?: string; // Optional description

  @Column({ type: 'boolean', default: false })
  completed: boolean; // Status of the todo

  @Column({ type: 'decimal', precision: 11, scale: 7, nullable: true })
  longitude?: number; // Longitude with high precision

  @Column({ type: 'decimal', precision: 11, scale: 7, nullable: true })
  latitude?: number; // Latitude with high precision

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Auto-generated timestamp when row is created

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date; // Auto-updated timestamp when row is modified
}
