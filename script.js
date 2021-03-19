
function scramble(str1, str2) {
    let s1 = null;
    let s2 = null;
    let needleRegExp = null;
    let status = false;

    if(str1.split("").includes(" ") && str2.split("").includes(" ")) {
        s1 = stringSpaceSplit(str1);
        s2 = stringSpaceSplit(str2);

        for(let i = 0; i < s1.length; i++) {
            console.log(s1[i]);
            needleRegExp = new RegExp(s1[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");

            if (!needleRegExp.test(str2)) {
                status = false;
                break;
            } else {
                status = true;
            }
        }

        console.log(s1);
        console.log(s2);
    } else {

        s1 = stringWithoutSpaceSplit(str1);
        s2 = stringWithoutSpaceSplit(str2);

        for(let i = 0; i < s1.length; i++) {
            console.log(s1[i]);
            needleRegExp = new RegExp(s1[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");

            if (!needleRegExp.test(str2)) {
                status = false;
                break;
            } else {
                status = true;
            }
        }

        console.log(s1);
        console.log(s2);
    }

    function stringSpaceSplit(str) {
        return str.split(" ")
    }
    function stringWithoutSpaceSplit(str) {
        return str.split(/(?=[A-Z])/)
    }

    return status
}
console.log(scramble("dev Team Cluj", "Clujde v Team"));

