import { parse } from "postcss";

// TODO make this class more in line to the builder pattern
class FieldBuilder {

    buildForGame(id, fieldNumber, contains, clickAction) {

        return(
            <div className='border-2 h-full w-full' onClick={() => {clickAction(id)}}>
                <p className='mb-5'>Field number {fieldNumber}</p>
                <span className='align-middle inline-block'>{contains}</span>
            </div>
        );
    }
    
    // builds the fields for creation of the game
    buildForCreation(fieldNumber, contains, clickAction, setContains, fieldX, fieldY) {
        return (
            <div className='border-2 h-full w-full' onClick={() => {return clickAction(contains, setContains, fieldX, fieldY)}}>
                <p className='mb-5'>Field number {fieldNumber}</p>
                <span className='align-middle inline-block'>{contains[fieldY][fieldX] ? 'bomb' : 'no bomb'}</span>
            </div>
        )
    }
}

export default FieldBuilder;