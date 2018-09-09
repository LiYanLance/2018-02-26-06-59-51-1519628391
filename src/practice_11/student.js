import Person from "./person"

class Student extends Person{

    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        const leader = this.klass.leader === this ? "Leader of" : "at";
        return super.introduce() + ` I am a Student. I am ${leader} ${this.klass.getDisplayName()}.`
    }
}
export default Student;