import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({

  name: String,

  department: String,

  salary: Number

});

export default mongoose.models.Employee ||
mongoose.model("Employee", EmployeeSchema);