class FieldBuilder {

    buildForGame(id, fieldNumber, contains, clickAction) {

        return(
            <div className='border-2 h-full w-full' onClick={() => {clickAction(id)}}>
                <p className='mb-5'>Field number {fieldNumber}</p>
                <span className='align-middle inline-block'>{contains}</span>
            </div>
        );
    }
    
}

export default FieldBuilder;