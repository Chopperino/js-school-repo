import db from "../Data/Db.js";

class EmployeesService{
    async patchEmployee(id, firstName, lastName, middleName, position){
        const employee = await db.getEmployee(id);
        if(employee === null) throw 'Employee with such id not found';
        return await db.patchEmployee(id, firstName, lastName, middleName, position);
    }
}

export default new EmployeesService();