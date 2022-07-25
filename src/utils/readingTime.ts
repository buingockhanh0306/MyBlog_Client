export function readingTime(text: string | undefined) {
    if(text){
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time
    }
}