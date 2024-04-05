// Code EyesOnMe Component Here

function EyesOnMe (event) {
    function handleEvent(){
    console.log("Good!")
    }
    return (
        <div>
            <button onFocus={handleEvent} onBlur={(e) => {
        console.log('Hey! Eyes on me!');
      }}>Eyes on me</button>
        </div>
    )


}

export default EyesOnMe;