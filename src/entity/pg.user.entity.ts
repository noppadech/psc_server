import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}