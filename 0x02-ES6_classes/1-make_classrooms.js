import ClassRoom from "./0-classroom.js";

export default function initializeRooms(){
	const clas1 = new ClassRoom(19);
	const clas2 = new ClassRoom(20);
	const clas3 = new ClassRoom(34);
	const class_list = [clas1, clas2, clas3];
	return (class_list);
}
