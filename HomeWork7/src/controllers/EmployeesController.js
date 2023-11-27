import EmployeesService from "../services/EmployeesService.js";

class EmployeesController{
    async patch(req, res){
        const {firstName, lastName, middleName, position} = req.body;
        await EmployeesService.patchEmployee(req.params.employeeId, firstName, lastName, middleName, position)
            .then((data) => {res.status(200).json({ data })})
            .catch((e) => {res.status(404).send(e)})
    }
}

export default new EmployeesController();