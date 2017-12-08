export function getAge(birthday){
    let d = new Date(Date.now() - new Date(birthday).getTime());
    return Math.abs(d.getUTCFullYear() - 1970);
}

export function dob(dob){
    return dob.substring(0,10)
}

export function titleCase(str){
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}