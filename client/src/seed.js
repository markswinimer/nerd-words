const lib1 = {
    libraryName: "Word Attack",
    authorName: "Mark Swinimer",
    date: "03/03/2020",
    wordCount: 1200,
    playCount: 227
}
const lib2 = {
    libraryName: "Bernie",
    authorName: "Bernie Sanders",
    date: "02/2/2020",
    wordCount: 90,
    playCount: 88
}
const lib3 = {
    libraryName: "Magic of Words",
    authorName: "Ian Todd",
    date: "03/01/2020",
    wordCount: 890,
    playCount: 53
}
const lib4 = {
    libraryName: "Game of Thrones",
    authorName: "Cerc'",
    date: "10/01/2019",
    wordCount: 666,
    playCount: 73
}

function libraryPayload() {
    return ({ 
        libraries: [lib1,lib2,lib3,lib4],
        status: 200
    })
}

export default libraryPayload;