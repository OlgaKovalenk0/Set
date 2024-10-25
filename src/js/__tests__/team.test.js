import { Team } from '../team';
import { Character } from '../character';

 test ('add single member', () => {
    const team = new Team();
    const member = new Character();
    team.add(member);

    expect(team.members.has(member)).toBe(true);
 }
 ) 

 test ('add member when exist', () => {
    const team = new Team();
    const member = new Character('Катя');

    expect(() => {
        team.add(member);
        team.add(member);
    }).toThrow("Персонаж уже существует");
 }
 )

 test ('all add', () => {
    const team = new Team();
    const memberKatya = new Character('Катя');
    const memberOlya = new Character('Оля');
    team.addAll(memberKatya, memberOlya);

    expect(team.members.has(memberKatya)).toBe(true);
    expect(team.members.has(memberOlya)).toBe(true);
 }
 )

 test ('is array', () => {
    const team = new Team();
    const memberKatya = new Character('Катя');
    team.add(memberKatya);

    const array = team.toArray();
    expect(Array.isArray(array)).toBe(true);
 }
 )