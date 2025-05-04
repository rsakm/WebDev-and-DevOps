

// // In a function that can except several types of arguments, but we want to exclude some of them from being passed to the function, we can use Exclude API

type Eventtype = 'click' | 'hover' | 'scroll' | 'load'

type ExcludedEvent = Exclude<Eventtype, 'scroll' | 'load'>



function handleEvent(event: ExcludedEvent) {
    console.log(`Handling ${event}`)
}

handleEvent('click');
handleEvent('hover');

// handleEvent('scroll');  // Error: Argument of type 'scroll' is not assignable to parameter of type 'Exclude<"click" | "hover" | "scroll" | "load", "scroll" | "load">'