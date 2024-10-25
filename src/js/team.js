export class Team {

    constructor(name)  {
        this.members = new Set();
    }

    add = (member) => {
        if(this.members.has(member)) {
            throw new Error("Персонаж уже существует");            
        }

        this.members.add(member);
    }

    addAll = (...members) => {
        members.forEach((member) => {
            this.members.add(member);
        })
    }

    toArray = ()=> {
        return Array.from(this.members);
    }
}