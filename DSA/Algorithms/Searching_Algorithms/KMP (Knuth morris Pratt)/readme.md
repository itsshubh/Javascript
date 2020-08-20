### Pattern Searching

Given a text txt[0..n-1] and a pattern pat[0..m-1], it search for all the occurrences of pat[] in txt[]. Assumimg that n > m.

Examples:

    Input:  txt[] = "THIS IS A TEST TEXT"
            pat[] = "TEST"
    Output: Pattern found at index 10

    Input:  txt[] =  "AABAACAADAABAABA"
            pat[] =  "AABA"
    Output: Pattern found at index 0
            Pattern found at index 9
            Pattern found at index 12

### Naive Pattern Searching:

Slide the pattern over text one by one and check for a match. If a match is found, then slides by 1 again to check for subsequent matches.


### Optimized Naive Algorithm for Pattern Searching

In the original Naive String matching algorithm , we always slide the pattern by 1. When all characters of pattern are different, we can slide the pattern by more than 1. When a mismatch occurs after j matches, we know that the first character of pattern will not match the j matched characters because all characters of pattern are different. So we can always slide the pattern by j without missing any valid shifts.
- Note:- Only works when all characters of pattern are different.


### KMP

### Rabin-Karp