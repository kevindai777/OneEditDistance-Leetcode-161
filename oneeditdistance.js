//Objective is to see whether two words are one edit apart, an edit being
//an insertion, deletion, or replacement. An edit must occur.


//

//Make sure first argument is always shorter
if (s.length > t.length) {
    return isOneEditDistance(t, s)
}

//More than one edit is needed
if (t.length - s.length > 1) {
    return false
}

for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) {
        
        //Check the remaining characters
        if (s.length == t.length) {
            //Replace the incorrect character at 'i'
            return s.slice(i + 1) == t.slice(i + 1)
        } else {
            //Delete the incorrect character at 'i'
            return s.slice(i) == t.slice(i + 1)
        }
    }
}

//We can insert one more character
return s.length + 1 == t.length