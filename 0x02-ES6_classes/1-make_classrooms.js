import ClassRoom from "./0-classroom.js";

export default function initializeRooms(){
	const clasrm1 = new ClassRoom(19);
	const clasrm2 = new ClassRoom(20);
	const clasrm3 = new ClassRoom(34);
	const class_list = [clasrm1, clasrm2, clasrm3];
	return (class_list);
}
