import Person from "./person"

class Teacher extends Person{

    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        const teachClass = this.klass ? `Class ${this.klass}` : "No Class";
        return super.introduce() + ` I am a Teacher. I teach ${teachClass}.`
    }
}
export default Teacher;