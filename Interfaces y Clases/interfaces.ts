enum Role {
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

interface Billable {
    currentBill(): string
}

const medico = {
    name: 'Martin',
    email: 'martin@correo.com',
    role: Role.Doctor,
    total: 25,
    currentBill() {
        return `Valor actual es: ${this.total}`;
    }
}

const printStaff = (staff: Staff) => {
    console.log(staff)
}

const printBill = (bill: Billable) => {
    console.log(bill.currentBill())
}