export const getData = () => {
    if (Math.random() <0.5) {
        throw Error ("An error occured");

} else {
    const date = new Date ();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
}