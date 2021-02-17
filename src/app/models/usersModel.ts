export class UserModel {
    id?: number;
    name?: string;
    email: string;
    password: string;
    birthday?: {
        month: number;
        day: number;
        year: number
    };
    termsandconditionsCheck?: boolean;
    phoneNumber?: string;
    totalOrdered?: number;
    dateOfJoin?: string
}