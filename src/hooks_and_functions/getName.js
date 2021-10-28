export default function getName(username, firstName, lastName) {
    if(firstName === "" && lastName === "") return username;
    if(firstName !== "" && lastName === "") return firstName;
    if(firstName === "" && lastName !== "") return lastName;
    if(firstName !== "" && lastName !== "") return firstName + " " + lastName;
}
