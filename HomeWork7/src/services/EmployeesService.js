import db from "../Data/Db.js";

class EmployeesService{
    async patchEmployee(id, firstName, lastName, middleName, position){
        const employee = await db.getEmployee(id);
        return {id, firstName, lastName, middleName, position};
        if(employee === null) throw 'Employee with such id not found';
        const patchedEmployee = await db.patchEmployee(id, firstName, lastName, middleName, position);
        return patchedEmployee;
    }
}

export default new EmployeesService();