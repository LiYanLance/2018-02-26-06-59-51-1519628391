import Person from "./person"

class Teacher extends Person{

    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        const teachClass = "I teach " + (this.klasses ? "Class " + this.klasses.map(klass =>
            klass.getDisplayName().split(" ")[1]).join(", ") : "No Class") + ".";
        return this.base_introduce(teachClass);
    }

    introduceWith(student){
        const teachStudent = `I ${student.klass.getDisplayName() !== this.klass.getDisplayName() ? "don't " : ""}teach ${student.name}.`;
        return this.base_introduce(teachStudent);
    }

    base_introduce(teachInfo){
        return super.introduce() + ` I am a Teacher. ${teachInfo}`
    }


}
export default Teacher;