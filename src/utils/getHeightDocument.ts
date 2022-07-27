export function getHeightDocument(){
    let body = window.document.body,
        html = window.document.documentElement;
    let height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    return height
}