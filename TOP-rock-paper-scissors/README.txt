1) Problem:
    Client requires rock paper and scissors game to be built. Proof of concept is only required to run in browser console.

2) Requirements:
    Game to be played from browser console
    Person vs Computer
    Game must take input (Rock, Paper or Scissors) from user and recognise any varibles in character case eg: RoCk PApeR scissORS
    5 rounds to determine a winner

3) Pseudo code:
    Load page from browser
    Open console in Devtools/Inspect pane
    
    Prompt user for input
        Take input
        Check input is not longer than 8 characters   
        Slice first letter > capitalise
        Lowercase remaining string
        Concatenate first letter and string

    Take input and compare to randomised computer result
    Determine a winner
    Repeat up to 5 times to determine "best of" senario
    Keep score during gameplay
    Print overall result

4) Comment guides:
    //Create R,P,S randomiser
    //Input for user
    //Validate players choice
    //Determine round winner
    //Loop until grand master has been resolved
    