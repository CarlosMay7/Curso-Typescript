type User = {
    name: string;
    startDate: Date;
};

type Admin = {
    name: string;
    permissions: string[];
}

type UserAdmin = User & Admin;

const doctor : UserAdmin = {
    name: 'Carlos',
    startDate: new Date(),
    permissions: ['Ver pacientes']
}


interface UserI {
    name: string;
    startDate: Date;
};

interface AdminI {
    name: string;
    permissions: string[];
}

interface UserAdminI extends UserI, AdminI {

}

const doctorI : UserAdminI = {
    name: 'Carlos',
    startDate: new Date(),
    permissions: ['Ver pacientes']
}