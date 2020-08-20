function patternSearching(pattern, text) {
    var patternLength = pattern.length;
    var textLength = text.length;

    for (var i = 0; i <= textLength - patternLength; i++) {
        for (var j = 0; j < patternLength; j++) {
            if (text[i + j] == pattern[j]) {
                continue;
            } else {
                break;
            }
        }
        if (patternLength == j) {
            console.log("Pattern found at index", i);
        }
    }
}

patternSearching("AABA", "AABAACAADAABAAABAABA");
patternSearching("ABCDE", "ABCDEABCDFABCEABCDE");