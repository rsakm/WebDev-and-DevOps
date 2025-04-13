
let currClock;
function searchBackend(){
    console.log("Request sent to backend");

    // // fetch

}


function debouncedSearch(){
    // restart the clock if inputs get changed
    clearTimeout(currClock);

    currClock = setTimeout(searchBackend, 30*1000);  /// start a clock
}


debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();
debouncedSearch();   /////
