enum Direction{
    Up,
    Down,
    Left,
    Right
}
let move: Direction=Direction.Up;
console.log(move); // Output: 0
console.log(Direction[0]); // Output: "Up"
console.log(Direction[3]); // Output: "Right"

// Status Code
enum StatusCode{
    Success=200,
    NotFound=404,
    InternalServerError=500
}
let mystatus: StatusCode=StatusCode.InternalServerError;
console.log(mystatus);

// Program Status
enum ProgramStatus{
    Running="RUNNING",
    Stopped="STOPPED",
    Paused="PAUSED"
}
let currentStatus: ProgramStatus=ProgramStatus.Running;
console.log(currentStatus);

// data fetched
enum DataStatus{
    SUCCESS="SUCCESS",
    ERROR="ERROR",
    LOADING="LOADING"
}
let dataStatus: DataStatus=DataStatus.LOADING;
console.log(dataStatus);