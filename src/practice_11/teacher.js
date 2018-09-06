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

    isTeaching(student){
        return this.klasses.filter(klass => klass.isIn(student)).length > 0;
    }

    onLeaderAssign(student){
        const notification = `I am ${this.name}. I know ${student.name} become Leader of ${student.klass.getDisplayName()}.`
        console.log(notification)
    }

    onAppendMember(student){
        const notification = `I am ${this.name}. I know ${student.name} has joined ${student.klass.getDisplayName()}.`
        console.log(notification)
    }


}
export default Teacher;