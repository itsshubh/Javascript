function optimized(pattern, text) {
    var patternLength = pattern.length;
    var textLength = text.length;
    var i = 0;
    while (i <= textLength - patternLength) {
        for (var j = 0; j < patternLength; j++) {
            if (text[i + j] == pattern[j]) {
                continue;
            } else break;
        }
        if (patternLength == j) {
            console.log("Pattern found at index", i);
            i = i + patternLength;
        }
        else if (j == 0) {
            i = i + 1;
        } else {
            i += j;
        }
    }
}

optimized("ABCDE", "ABCDEABCDFABCEABCDE");
