class Class {

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
            if (this.assignLeaderListener) {
                this.assignLeaderListener.onLeaderAssign(student);
            }
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
        if (this.joinListener) {
            this.joinListener.onAppendMember(student);
        }
    }

    registerAssignLeaderListener(teacher) {
        this.assignLeaderListener = teacher;
    }

    isIn(student) {
        return student.klass === this;
    }

    registerJoinListener(teacher) {
        this.joinListener = teacher;
    }
}

export default Class;