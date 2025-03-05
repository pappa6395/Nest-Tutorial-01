export class Todo {
    id: string;
    title: string;
    subtitle: string;
}

export class createTodo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    longitude?: number;
    latitude?: number;
    createdAt: Date;
    updatedAt: Date;
}