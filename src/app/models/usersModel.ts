export class UserModel {
    uid?: any;
    name?: string;
    email: string;
    password: string;
    displayName?: string;
    birthday?: {
        month: number;
        day: number;
        year: number
    };
    termsandconditionsCheck?: boolean;
    phoneNumber?: string;
    dateOfJoin?: string
}