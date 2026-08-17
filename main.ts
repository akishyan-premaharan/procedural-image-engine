
// Program Set Up

scene.setBackgroundColor(1)

let displaySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)

displaySprite.setScale(3, ScaleAnchor.Middle)

displaySprite.setPosition(80,60)

// Blank Canvas

let generationArray: number[][] = []

/** Randomly generating values */

function randomImage(positions: number[][]){
    
    // random value creation

    for (let x = 0; x < 16; x++) { // For display pixels in x range
        
        let row: number[] = [] // Local/Temporary Array to iterate and push randomly generated values

        for (let y = 0; y < 16; y++) { // For display pixels in y range

            row.push(randint(0,16))
 
        } 

        positions.push(row)

    }    

    return positions

} 

function attemptGeneration(tryToGenerate: string, positions: number[][]) {
    
    const warmColours = [2,3,4,5,14]

    const coolColours = [6,7,8,9,10,11,12,13]
    
    const blue = [6,8,9]
    
    const yellow = [3,4,5,11,13,14]
    
    let generatedImage = image.create(16, 16)

    if (tryToGenerate == "Beach") {

        for (let y = 0; y < 16; y++) { // For display pixels in x range

            let row: number[] = [] // Local/Temporary Array to iterate and push randomly generated values

            for (let x = 0; x < 16; x++) { // For display pixels in y range
                
                if (y <= 11) {

                    row.push(blue[randint(0, blue.length)])

                } else {

                    row.push(yellow[randint(0, yellow.length)])

                }

            }

            positions.push(row)

        }

    } else if (tryToGenerate == "Warm") {

        for (let y = 0; y < 16; y++) { // For display pixels in x range

            let row: number[] = [] // Local/Temporary Array to iterate and push randomly generated values

            for (let x = 0; x < 16; x++) { // For display pixels in y range

                row.push(warmColours[randint(0, warmColours.length)])

            }

            positions.push(row)

        }

    } else {

        for (let y = 0; y < 16; y++) { // For display pixels in x range

            let row: number[] = [] // Local/Temporary Array to iterate and push randomly generated values

            for (let x = 0; x < 16; x++) { // For display pixels in y range

                row.push(coolColours[randint(0, coolColours.length)])

            }

            positions.push(row)

        }

    }

    return positions

}

/** Inserting generated values into the Sprite Display */

function spriteDisplay(array: number[][], sprite: Sprite) {
    
    let generatedImage = image.create(16, 16)

    for (let column = 0; column < 16; column++) {
        
        for (let row = 0; row < 16; row++) {
                
            generatedImage.setPixel(column, row, array[row][column])

        }

    }

    sprite.setImage(generatedImage)

}

// Basic User Interface

game.splash("Procedural Graphics Engine!")

story.showPlayerChoices("Generate Random Image", "See the program attempt to generate images")

if (story.getLastAnswer() == "Generate Random Image") {

    spriteDisplay(randomImage(generationArray), displaySprite)

} else {
    
    game.showLongText("Choose the Image for it to generate!", DialogLayout.Bottom)

    story.showPlayerChoices("Beach", "Warm", "Cool")

    spriteDisplay(attemptGeneration(story.getLastAnswer(), generationArray), displaySprite)
    
}
